# schomes.it — Sara Celentani Property Manager

Sito statico (HTML/CSS/JS, nessun build) di Sara Celentani: gestione di locazioni turistiche e affitti brevi a Firenze e dintorni.
Pubblicato con **GitHub Pages** sul dominio `www.schomes.it` (file `CNAME`): ogni push su `main` va online in pochi minuti.

## Struttura

```
├── index.html            Home
├── chi-sono.html
├── strutture.html        Elenco strutture (generato da js/strutture-data.js)
├── strutture/            Pagine di dettaglio, una per struttura (+ struttura-template.html)
├── esperienze.html
├── shop.html             Itinerari di viaggio
├── proprietari.html      Servizi per proprietari + form
├── contatti.html         Form contatti
├── privacy.html, cookies.html
├── css/                  styles.css (globale) + un file per pagina
├── js/
│   ├── main.js           Menu mobile, form Formspree, gallerie, pulsante "torna su"
│   ├── strutture-data.js Dati di tutte le strutture (fonte unica)
│   ├── home.js           Carosello strutture in home
│   └── proprietari.js    Carosello recensioni
├── img/
├── sitemap.xml, robots.txt
└── ISTRUZIONI-SISTEMA-STRUTTURE.md
```

## Operazioni frequenti

- **Aggiungere o modificare una struttura** (compreso il codice CIN): vedi [ISTRUZIONI-SISTEMA-STRUTTURE.md](ISTRUZIONI-SISTEMA-STRUTTURE.md). Ricordarsi di aggiungere la nuova pagina anche in `sitemap.xml`.
- **Form**: `contatti.html` e `proprietari.html` inviano a Formspree (`https://formspree.io/f/xlgwdzjw`); la gestione dell'invio è in `js/main.js`.
- **Immagini**: prima di caricarle, ridimensionarle a max 1920 px di lato e comprimerle in JPG (idealmente < 400 KB). I nomi dei file distinguono maiuscole e minuscole sul sito pubblicato (`Foto.jpg` ≠ `foto.jpg`).
- **Colori e font**: variabili CSS in cima a `css/styles.css`.

## Anteprima in locale

```bash
python -m http.server 8000
```

poi aprire http://localhost:8000.

## File locali non pubblicati

Esclusi tramite `.gitignore`: `Dns.txt` (codici di verifica del dominio), `esperienze_idee.html` (bozza), `_archivio/` (foto non usate dal sito), `.claude/`.
