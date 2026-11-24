#!/bin/zsh
# Daglig sjekk av kinotall. Kjøres av launchd (se scripts/no.jnv-dashboard.daglig.plist, kl. 09:30).
# Claude oppdaterer bare data.js; skriptet validerer, committer og pusher.
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO"
echo "=== $(date '+%Y-%m-%d %H:%M') ==="

# Finn Claude Code: egen installasjon først, ellers nyeste versjon fra VS Code-utvidelsen
CLAUDE=""
for c in "$HOME/.local/bin/claude" /usr/local/bin/claude /opt/homebrew/bin/claude; do
  [[ -x "$c" ]] && { CLAUDE="$c"; break; }
done
if [[ -z "$CLAUDE" ]]; then
  CLAUDE="$(ls -td "$HOME"/.vscode/extensions/anthropic.claude-code-*/resources/native-binary/claude 2>/dev/null | head -1 || true)"
fi
[[ -x "$CLAUDE" ]] || { echo "Fant ikke Claude Code."; exit 1; }

if [[ -n "$(git status --porcelain)" ]]; then
  echo "Repoet har ulagrede endringer – hopper over i dag."; exit 1
fi
# Vent på nett (Mac-en kan nettopp ha våknet) – prøv i opptil 5 minutter
for i in {1..30}; do
  git ls-remote -q origin >/dev/null 2>&1 && break
  [[ $i -eq 30 ]] && { echo "Ingen nettforbindelse – avbryter."; exit 1; }
  sleep 10
done
git pull --ff-only

"$CLAUDE" -p --model sonnet \
  --allowedTools "Read,Edit,Glob,Grep,WebFetch,WebSearch" \
  < scripts/daglig-sjekk-prompt.md

if [[ -z "$(git status --porcelain)" ]]; then
  echo "Ingen nye tall."; exit 0
fi
if [[ "$(git status --porcelain)" != " M data.js" ]]; then
  echo "Uventede endringer – ruller tilbake:"; git status --porcelain
  git checkout -- . ; git clean -fd -q; exit 1
fi

# Valider data.js og lag commit-melding fra siste uke
MSG="$(node -e '
  global.window = {}; require("./data.js");
  const d = window.JNV_DATA;
  if (!d || !Array.isArray(d.uker) || !d.uker.length || !Array.isArray(d.land) || d.land.length !== 7) throw new Error("Ugyldig data.js");
  console.log("Oppdatert tall " + d.uker[d.uker.length - 1].navn.toLowerCase());
')" || { echo "data.js er ugyldig – ruller tilbake."; git checkout -- data.js; exit 1; }

git commit -q -m "$MSG" -m "Automatisk daglig sjekk." data.js
git push -q
echo "Pushet: $MSG"
