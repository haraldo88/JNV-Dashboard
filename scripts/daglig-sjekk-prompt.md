Du jobber i repoet JNV-Dashboard. Les CLAUDE.md og data.js først, og følg reglene i CLAUDE.md nøye.

1. Sjekk kildene i CLAUDE.md for hvert land og se om det finnes nye besøkstall for «Julenissens verksted»
   (lokale titler står i CLAUDE.md under Bakgrunn). Sjekk også uker som ikke ligger i `uker` ennå.
   Åpne kildesidene direkte med WebFetch (f.eks. kino.no/tallogfakta/ for Norge, ufd.sk/aktualny-top-20/,
   ses.fi sine nyheter/Top 20). Bruk WebSearch bare for å finne riktig side/artikkel.
   For Norge viser kino.no «Tot. besøk» per film. Ukas tall = Tot. besøk minus summen av tidligere uker i data.js.
   Repoet er allerede oppdatert med `git pull` – ikke kjør git eller andre shell-kommandoer.
2. Bruk bare tall du finner i kildene. Ikke gjett. Gir kilden bare akkumulerte tall, regner du ut tallet
   for uka og skriver det i `merknad`. Er et tall delvis (f.eks. bare åpningshelgen), skriv det i `merknad`.
   Kilder som blokkerer henting (dfi.dk, filminstitutet.se, Bioguiden-PDF-er) hopper du over.
3. Hvis det er nye eller rettede tall: oppdater data.js (ny uke i `uker`, `seere`, `merknad`,
   `oppdatert` = dagens dato). Endre ingen andre filer.
4. Hvis ingenting er nytt, gjør du ingen endringer.
5. Ikke commit eller push – det gjør skriptet som kjører deg.
6. Avslutt med en kort oppsummering: hvilke land du sjekket, hva som var nytt, og hvilke kilder som ikke kunne hentes.
