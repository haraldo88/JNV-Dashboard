# JNV dashboard – instruksjoner for Claude Code

Statisk nettside (GitHub Pages) som viser kinobesøk for filmen «Julenissens verksted» i 7 land.

## Filer
- `index.html` – layout, stil og grafer (ren SVG, ingen biblioteker). Endres sjelden.
- `data.js` – ALLE tall, titler, datoer og lenker. Oppdater tall her.
- `scripts/daglig-sjekk.sh` – kjøres kl. 08:00 hver dag av launchd på Haralds Mac
  (`~/Library/LaunchAgents/no.jnv-dashboard.daglig.plist`). Kjører Claude med
  `scripts/daglig-sjekk-prompt.md`, validerer data.js, committer og pusher. Logg: `~/Library/Logs/jnv-dashboard.log`.
  Jobben bruker en egen klone i `~/Library/Application Support/jnv-dashboard` (macOS blokkerer
  bakgrunnsjobber fra Dokumenter). Kjør derfor `git pull` her før du endrer noe.

## Regler ved oppdatering av tall
- Legg til ny uke i `uker` (ISO-uke, f.eks. `{ id: "2026-U47", navn: "Uke 47", periode: "16.–22. nov" }`).
- `seere` per land er besøk *i den uka*, ikke akkumulert. Hvis kilden bare gir akkumulert tall,
  regn ut differansen mot forrige uke og skriv det i `merknad`.
- Ikke endre rekkefølgen i `land` – rekkefølgen bestemmer fargen.
- Oppdater `oppdatert` til dagens dato.
- Bruk bare tall fra kildene under. Ikke finn på tall; la `seere: {}` stå tom hvis tall mangler.

## Kilder
- Norge: filmweb.no/kinotoppen, cine.no
- Sverige: bioguiden.se (Biotoppen), filminstitutet.se
- Danmark: dfi.dk (aktuelt billetsalg), kino.dk
- Finland: ses.fi (Top 20 / katsojaluvut), filmikamari.fi
- Tyskland: FFA (ffa.de)
- Slovakia: ufd.sk (aktuálny top 20)
- Polen: boxoffice.pl / distributør Vivarto

## Etter endring
Åpne `index.html` i nettleseren og sjekk at tallene stemmer. Commit med en kort melding,
f.eks. «Oppdatert tall uke 47», og push til GitHub.

## Bakgrunn
- Film: «Julenissens verksted» (Qvisten Animation, 2026), regi Rasmus A. Sivertsen og Mette Tange.
- Lokale titler og premierer (alle 2026):
  NO *Julenissens verksted* 6.11 · SK *Santova čarovná dielňa* 5.11 · DK *Jagten på julens magi* 12.11 ·
  SE *Jakten på jultomtens verkstad* 13.11 · FI *Joulupukin salainen paja* 13.11 ·
  DE *Auf der Suche nach der Weihnachtswerkstatt* 26.11 · PL *Warsztat Świętego Mikołaja* 4.12.
- dfi.dk, filminstitutet.se og Bioguiden-PDF-ene blokkerer automatisk henting – be brukeren om
  skjermbilde eller fil når tall mangler.
- Filmikamari sine tall er betalt – bruk ses.fi for Finland.
- Slovakiske UFD-uker starter torsdag.
- Første graf viser akkumulerte totaler (sum fra start til og med hver uke).
