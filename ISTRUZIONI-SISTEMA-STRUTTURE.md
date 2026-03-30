# Sistema Strutture — Guida Completa
## Sara Celentani Property Manager — schomes.it

---

## 📁 File da installare

```
sito/
├── js/
│   └── strutture-data.js          ← NUOVO — dati centralizzati di tutte le strutture
├── css/
│   └── struttura-detail.css       ← NUOVO — stili pagine dettaglio
├── strutture/                     ← NUOVA CARTELLA
│   ├── midori-house-florence.html
│   ├── santo-stefano.html
│   ├── tokei-togliatti.html
│   └── piazza-liberta-firenze.html
└── struttura-template.html        ← Template per nuove strutture
```

---

## ✅ Cosa fare con i file esistenti

### 1. `strutture.html` — sostituire il contenuto statico con quello dinamico

Dentro `#properties-container` elimina i blocchi HTML statici e aggiungi:
```html
<!-- Properties Section -->
<section class="properties section">
  <div class="container">
    <div id="properties-container">
      <!-- Compilato dinamicamente da strutture-data.js -->
    </div>
  </div>
</section>
```

Poi in fondo alla pagina, prima di `</body>`, aggiungi:
```html
<script src="js/strutture-data.js"></script>
<script>
  // Renderizza tutte le strutture in formato dettaglio
  renderStrutturePage('properties-container');

  // Reinizializza le gallery (il tuo codice in main.js)
  initGalleries();
</script>
```

### 2. `index.html` — sezione "Alloggi Selezionati"

Aggiungi `id="prop-track-container"` al div del carousel:
```html
<div class="carousel-track" id="prop-track-container">
  <!-- Compilato da strutture-data.js -->
</div>
```

Prima di `</body>`:
```html
<script src="js/strutture-data.js"></script>
<script>
  renderPropertyCards('prop-track-container'); // tutte le strutture
  // oppure:
  renderPropertyCards('prop-track-container', 4); // solo le prime 4
</script>
```

---

## ➕ Come aggiungere una nuova struttura

### Passo 1 — Aggiungi i dati in `js/strutture-data.js`

Apri il file e copia questo blocco nell'array `STRUTTURE`:

```javascript
{
  id: "nome-id",                    // ID univoco, solo minuscole e trattini
  slug: "nome-struttura",           // diventa l'URL: strutture/nome-struttura.html
  nome: "Nome Visualizzato",
  badge: "👥 Fino a X Ospiti",
  location: "Città, Provincia, Regione",
  mapsUrl: "https://maps.app.goo.gl/...",
  mq: 70,
  imgCover: "img/NomeStruttura/cover.jpg",
  gallery: [
    "img/NomeStruttura/foto1.jpg",
    "img/NomeStruttura/foto2.jpg",
    // ... altre foto
  ],
  descrizioneBreve: "Breve descrizione per le card (1-2 frasi).",
  descrizione: [
    "Primo paragrafo della descrizione completa.",
    "Secondo paragrafo.",
    "Terzo paragrafo.",
  ],
  features: ["Tag 1", "Tag 2", "Tag 3"],
  amenities: [
    { icon: "🍳", label: "Cucina attrezzata" },
    { icon: "📶", label: "Wi-Fi alta velocità" },
    // ... altri servizi
  ],
  airbnb: "https://www.airbnb.it/h/...",
  booking: "https://www.booking.com/Share-...",
},
```

### Passo 2 — Crea la pagina HTML

Copia `struttura-template.html` nella cartella `strutture/`:
```
strutture/nome-struttura.html
```
**Non modificare niente** — il JS legge lo slug dall'URL automaticamente.

### Passo 3 — Verifica

Apri `strutture/nome-struttura.html` nel browser.
La pagina si compila automaticamente con i dati inseriti.

**Fatto!** La struttura appare automaticamente in:
- ✅ `strutture.html` (lista completa)
- ✅ `index.html` (carousel alloggi)
- ✅ Pagina dettaglio `/strutture/nome-struttura.html`
- ✅ Sezione "Altre Strutture" nelle sidebar delle altre pagine

---

## 🔗 Link aggiornati

Con il nuovo sistema, i link alle strutture cambiano da:
```
strutture.html#midori
```
a:
```
strutture/midori-house-florence.html
```

Aggiorna eventuali link presenti in:
- `proprietari.html`
- `esperienze.html`
- Post social / link esterni

---

## 💡 Suggerimenti

- **Immagini**: usa sempre foto in formato JPG/WebP, max 800KB
- **Slug**: usa solo lettere minuscole e trattini (no spazi, no accenti)
- **imgCover**: è l'immagine usata nelle card → scegli la più bella!
- **descrizioneBreve**: max 200 caratteri, apparirà nelle card

