// =====================================================================
// JNV dashboard – DATA
// Dette er den eneste fila du trenger å endre for å oppdatere tallene.
// Uker er ISO-uker (mandag–søndag). "seere" = kinobesøk i den uka.
// La "seere" stå som tom liste [] hvis landet ikke har tall ennå.
// =====================================================================

window.JNV_DATA = {
  film: "Julenissens verksted",
  oppdatert: "2026-11-23",

  // Uker som vises i grafen (rekkefølge = x-aksen)
  uker: [
    { id: "2026-U45", navn: "Uke 45", periode: "2.–8. nov" },
    { id: "2026-U46", navn: "Uke 46", periode: "9.–15. nov" },
    { id: "2026-U47", navn: "Uke 47", periode: "16.–22. nov" }
  ],

  // Fast rekkefølge = fast farge per land. Ikke endre rekkefølgen.
  land: [
    {
      kode: "NO", navn: "Norge",
      tittel: "Julenissens verksted",
      premiere: "2026-11-06",
      distributor: "Nordisk Film Distribusjon",
      seere: { "2026-U45": 59179, "2026-U46": 40658, "2026-U47": 38486 },
      merknad: "Uke 45 inkl. førpremierer. Uke 46 = differanse mellom akkumulerte tall (99 837 − 59 179). Uke 47 = differanse (138 323 − 99 837); 138 323 er «Tot. besøk» per 22.11 fra kino.no.",
      kilde: "https://kino.no/tallogfakta/",
      trailer: { url: "https://www.nfkino.no/film/julenissens-verksted", tekst: "Trailer hos Nordisk Film Kino" },
      anmeldelser: [
        { kilde: "NRK", url: "https://www.nrk.no/artikkel/julenissens-verksted-sjarmerande-eventyrspenning-1531569" },
        { kilde: "Moviezine", url: "https://www.moviezine.no/anmeldelser/anmeldelse-julenissens-verksted-en-ny-norsk-juleslager" },
        { kilde: "Filmkikk", url: "https://filmkikk.no/anmeldelse.php?id=8915" },
        { kilde: "Barnevakten", url: "https://www.barnevakten.no/film/julenissens-verksted/" }
      ]
    },
    {
      kode: "SK", navn: "Slovakia",
      tittel: "Santova čarovná dielňa",
      premiere: "2026-11-05",
      distributor: "Forum Film Slovakia",
      seere: { "2026-U45": 5205, "2026-U46": 2587 },
      merknad: "UFD-uker starter torsdag (5.11 og 12.11).",
      kilde: "https://www.ufd.sk/aktualny-top-20/",
      trailer: { url: "https://www.forumfilm.sk/santova-carovna-dielna", tekst: "Trailer hos Forum Film" },
      anmeldelser: [
        { kilde: "ČSFD", url: "https://www.csfd.sk/film/1789666-santova-carovna-dielna/prehlad/" },
        { kilde: "Feminity (Zoznam)", url: "https://feminity.zoznam.sk/cl/2005520/9540767/Najkrajsi-vianocny-darcek-do-papiera-nezabalite--Presvedci-vas-o-tom-nova-rozpravka" }
      ]
    },
    {
      kode: "FI", navn: "Finland",
      tittel: "Joulupukin salainen paja",
      premiere: "2026-11-13",
      distributor: "Nordisk Film Finland",
      seere: { "2026-U46": 3506 },
      merknad: "Kun åpningshelgen 13.–15. nov (5. plass, 72 kinoer).",
      kilde: "https://www.ses.fi/ajankohtaista/top-20-viiden-karjessa-oli-kolme-ensi-iltaa/",
      trailer: { url: "https://www.youtube.com/watch?v=X5Gf3rpxKhE", tekst: "YouTube (finsk)" },
      anmeldelser: [
        { kilde: "Filminurkka (YouTube)", url: "https://www.youtube.com/watch?v=jnvtEh05Ah4" }
      ]
    },
    {
      kode: "SE", navn: "Sverige",
      tittel: "Jakten på jultomtens verkstad",
      premiere: "2026-11-13",
      distributor: "Nordisk Film",
      seere: {},
      merknad: "Nr. 7 på Biotoppen uke 46. Besøkstall ikke offentlig tilgjengelig.",
      kilde: "https://www.bioguiden.se/",
      trailer: { url: "https://youtu.be/mxnVMOpO09M", tekst: "YouTube (svensk)" },
      anmeldelser: [
        { kilde: "MovieZine", url: "https://www.moviezine.se/nyheter/ny-julfilm-charmar-kritikerna-ett-maste-for-barnfamiljer" }
      ]
    },
    {
      kode: "DK", navn: "Danmark",
      tittel: "Jagten på julens magi",
      premiere: "2026-11-12",
      distributor: "Nordisk Film Distribution",
      seere: {},
      merknad: "Billettall fra DFI ikke tilgjengelig ennå.",
      kilde: "https://www.nfbio.dk/film/jagten-paa-julens-magi",
      trailer: { url: "https://www.youtube.com/watch?v=7Fhro1JmQjA", tekst: "YouTube" },
      anmeldelser: [
        { kilde: "Filmmagasinet Ekko", url: "https://www.ekkofilm.dk/anmeldelser/jagten-pa-julens-magi/" }
      ]
    },
    {
      kode: "DE", navn: "Tyskland",
      tittel: "Auf der Suche nach der Weihnachtswerkstatt",
      premiere: "2026-11-26",
      distributor: "Capelight Pictures",
      seere: {},
      merknad: "Ikke hatt premiere ennå. Tall kommer via FFA.",
      kilde: "https://www.kino.de/film/julenissens-verksted--01KT65VK1F2M24J25WASA8M5WP",
      trailer: { url: "https://www.kino.de/film/julenissens-verksted--01KT65VK1F2M24J25WASA8M5WP", tekst: "Trailer hos kino.de" },
      anmeldelser: [
        { kilde: "Filmdienst", url: "https://www.filmdienst.de/film/details/626886/auf-der-suche-nach-der-weihnachtswerkstatt" },
        { kilde: "nord24", url: "https://www.nord24.de/kultur/auf-der-suche-nach-der-weihnachtswerkstatt-elfenalarm-nachts-432733.html" },
        { kilde: "Jugend Filmjury", url: "https://www.jugend-filmjury.com/film/auf_der_suche_nach_der_weihnachtswerkstatt" }
      ]
    },
    {
      kode: "PL", navn: "Polen",
      tittel: "Warsztat Świętego Mikołaja",
      premiere: "2026-12-04",
      distributor: "Vivarto",
      seere: {},
      merknad: "Ikke hatt premiere ennå.",
      kilde: "https://www.vivarto.pl/warsztat-swietego-mikolaja",
      trailer: { url: "https://www.youtube.com/watch?v=gjqPWUFwjKw", tekst: "YouTube (polsk)" },
      anmeldelser: []
    }
  ]
};
