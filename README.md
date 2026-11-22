# JNV dashboard

Kinobesøk for «Julenissens verksted» i Norge, Sverige, Danmark, Finland, Tyskland, Slovakia og Polen.

- `index.html` – selve nettsiden
- `data.js` – alle tall og lenker (det er denne du oppdaterer)
- `CLAUDE.md` – instruksjoner som Claude Code leser automatisk

---

## Slik legger du siden ut på GitHub og oppdaterer den med Claude Code

### 1. Installer verktøyene (én gang)

Åpne Terminal på Mac og kjør:

```bash
# Claude Code
curl -fsSL https://claude.ai/install.sh | bash

# Git og GitHub CLI (krever Homebrew: https://brew.sh)
brew install git gh
gh auth login          # velg GitHub.com → HTTPS → logg inn i nettleseren
```

### 2. Start Claude Code i mappa

Pakk ut `jnv-dashboard` (f.eks. til `~/Documents/jnv-dashboard`) og kjør:

```bash
cd ~/Documents/jnv-dashboard
claude
```

Første gang blir du bedt om å logge inn med Claude-kontoen din.
Nå kan du skrive vanlige instruksjoner på norsk. Claude leser filene, gjør endringer og spør om lov før den kjører kommandoer.

### 3. La Claude publisere siden på GitHub

Skriv dette til Claude:

> Lag et nytt offentlig GitHub-repo som heter jnv-dashboard, commit alle filene, push, og slå på GitHub Pages fra main-branchen. Gi meg lenken til nettsiden.

Claude kjører da omtrent dette for deg:

```bash
git init && git add . && git commit -m "Første versjon av JNV dashboard"
gh repo create jnv-dashboard --public --source=. --push
gh api repos/{eier}/jnv-dashboard/pages -X POST -f "source[branch]=main" -f "source[path]=/"
```

Etter 1–2 minutter ligger siden på `https://<ditt-github-navn>.github.io/jnv-dashboard/`. Den lenken kan du dele med hvem som helst.

> Vil du ikke at siden skal være offentlig? Be om et **privat** repo. Merk at GitHub Pages fra private repo krever en betalt GitHub-plan.

### 4. Oppdater tallene hver uke

Start `claude` i mappa og skriv f.eks.:

> Hent nye tall for uke 47 fra kildene i CLAUDE.md og oppdater data.js. Vis meg endringene før du committer.

eller, hvis du har tallene selv:

> Legg inn uke 47: Norge 31 200, Finland 2 900, Slovakia 1 450. Commit og push.

Siden oppdateres automatisk på GitHub noen minutter etter push.

### 5. Nyttige ting å vite i Claude Code

| Du vil … | Skriv |
|---|---|
| Se hva som er endret | «vis meg diffen» |
| Angre siste endring | «angre det du nettopp gjorde» |
| Endre design | «gjør grafen høyere og bruk mørkere blåfarge for Norge» |
| Legge til et land | «legg til Nederland med tittel … og premiere …» |
| Avslutte | `/exit` eller Ctrl+C to ganger |
| Få hjelp | `/help` |

Tips: Claude leser `CLAUDE.md` hver gang den starter i mappa. Skriv faste regler der (f.eks. «bruk alltid tall fra Filmweb for Norge»), så slipper du å gjenta dem.
