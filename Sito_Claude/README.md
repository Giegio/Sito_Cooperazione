# Sara Celentani Property Manager - Sito Web Completo

## 📋 Panoramica del Progetto

Sito web professionale multipage per **Sara Celentani**, property manager specializzata in affitti brevi e valorizzazione immobiliare in Toscana (Firenze, Siena e dintorni).

### 🎨 Design

**Palette RAL 1016 - Giallo Brillante:**
- Giallo Oro Primario: `#FFD700`
- Giallo Accento: `#FFC300`
- Oro Scuro: `#D4AF37`
- Nero: `#1a1a1a`
- Grigi: `#2d2d2d`, `#4a4a4a`, `#d1d1d1`
- Bianco: `#ffffff`

**Typography:**
- Titoli: Playfair Display (serif elegante)
- Corpo testo: Poppins (sans-serif moderna)

**Stile:** Minimalista elegante con accenti caldi, ispirato al brand reale

## 📂 Struttura del Sito

### Pagine Principali

1. **index.html** - Homepage
   - Hero con doppia CTA
   - Preview servizi
   - Proprietà in evidenza
   - "Perché scegliermi"
   - CTA finale

2. **strutture.html** - Le Mie Strutture
   - Midori House Florence
   - Santo Stefano
   - Tokei Togliatti
   - Dettagli completi con amenities

3. **proprietari.html** - Sei un Proprietario?
   - Hero dedicato
   - Vantaggi della gestione
   - Servizi inclusi
   - **Form di contatto completo** per richiedere consulenza
   - Testimonial

4. **esperienze.html** - Esperienze e Servizi
   - Book Fotografico
   - Passeggiata a Cavallo
   - Esperienza Musicale

5. **shop.html** - Shop e Consulenze
   - Itinerari personalizzati
   - Consulenze viaggio

6. **chi-sono.html** - Chi Sono
   - Biografia Sara
   - Competenze
   - Storia professionale

7. **contatti.html** - Contatti
   - Form contatto semplice
   - Informazioni di contatto complete
   - Social links

### Struttura File

```
├── index.html
├── strutture.html
├── proprietari.html
├── esperienze.html
├── shop.html
├── chi-sono.html
├── contatti.html
├── css/
│   ├── styles.css          (CSS globale)
│   ├── home.css            (Home page)
│   ├── strutture.css       (Strutture)
│   ├── proprietari.css     (Proprietari)
│   └── pages.css           (Altre pagine)
├── js/
│   ├── main.js             (JavaScript globale)
│   ├── home.js             (Home specific)
│   └── proprietari.js      (Proprietari specific)
└── README.md
```

## 🎯 Funzionalità Implementate

### JavaScript Interattivo
✅ Menu mobile hamburger responsive
✅ Smooth scroll per anchor links
✅ Navbar con effetto scroll
✅ Form validation e handling
✅ Sistema notifiche elegante
✅ Intersection Observer per animazioni
✅ Back to top button
✅ Lazy loading immagini

### Design Responsive
✅ Mobile-first approach
✅ Breakpoints: 480px, 768px, 1024px
✅ Menu mobile completamente funzionante
✅ Grid adaptive
✅ Typography scaling

### SEO & Performance
✅ Semantic HTML5
✅ Meta tags ottimizzati
✅ Heading hierarchy
✅ Alt text ready
✅ Performance optimized

## 🛠 Personalizzazione

### 1. Cambiare Colori

In `css/styles.css`, modifica le CSS variables:

```css
:root {
    --color-primary: #FFD700;     /* Giallo oro principale */
    --color-primary-dark: #D4AF37;
    --color-accent: #FFC300;
    /* ... altre variabili */
}
```

### 2. Modificare Testi

Tutti i testi sono facilmente modificabili nei file HTML:
- Titoli: tag `<h1>`, `<h2>`, `<h3>`
- Paragrafi: tag `<p>`
- Links: tag `<a>`

### 3. Aggiungere Immagini Reali

Attualmente il sito usa gradienti colorati come placeholder.

**Per aggiungere foto vere:**

```html
<!-- Invece di -->
<div class="property-image-main" style="background: linear-gradient(...);">

<!-- Usa -->
<div class="property-image-main" style="background-image: url('path/to/image.jpg');">
```

**Raccomandazioni:**
- Formato: WebP (con fallback JPG)
- Dimensioni: Max 1920px width
- Compressione: TinyPNG o Squoosh
- Ottimizza per web!

### 4. Logo SC

Attualmente usa un placeholder con le iniziali "SC".

**Per inserire il logo vero:**

```html
<!-- Sostituisci in tutti i file HTML -->
<div class="logo-icon">SC</div>

<!-- Con -->
<img src="path/to/logo-sc.png" alt="SC Logo" class="logo-icon">
```

E nel CSS:

```css
.logo-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
}
```

### 5. Modificare Font

Per cambiare i Google Fonts:

1. Vai su [fonts.google.com](https://fonts.google.com)
2. Seleziona i tuoi font
3. Copia il link nel `<head>` di ogni pagina
4. Aggiorna in `css/styles.css`:

```css
:root {
    --font-display: 'TuoFontTitoli', serif;
    --font-body: 'TuoFontCorpo', sans-serif;
}
```

## 📋 Form di Contatto

### Proprietari Form (proprietari.html)

Form completo con campi:
- Nome e Cognome
- Email
- Telefono
- Città della proprietà
- Tipo di proprietà
- Numero camere e ospiti
- Servizi di interesse (checkbox)
- Messaggio
- Privacy consent

### Connessione Backend

Il form attualmente mostra solo una notifica. Per connettere a backend:

```javascript
// In js/main.js, trova la sezione form submission e modifica:

forms.forEach(form => {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                showNotification('Grazie! Ti contatterò presto.', 'success');
                this.reset();
            } else {
                showNotification('Errore. Riprova.', 'error');
            }
        } catch (error) {
            console.error('Error:', error);
            showNotification('Errore di connessione.', 'error');
        }
    });
});
```

**Opzioni Backend:**
- FormSpree
- Netlify Forms
- EmailJS
- Custom PHP/Node.js endpoint

## 🚀 Deploy

### Hosting Statico (Consigliato)

**Netlify (Gratuito):**
1. Vai su [netlify.com](https://netlify.com)
2. Drag & drop la cartella del sito
3. Configura dominio personalizzato
4. SSL automatico

**Vercel:**
1. Push su GitHub
2. Importa repository su [vercel.com](https://vercel.com)
3. Deploy automatico

**GitHub Pages:**
1. Push su repository GitHub
2. Abilita GitHub Pages in Settings
3. Scegli branch main/docs

### Hosting Tradizionale (FTP)

1. Acquista hosting (SiteGround, Aruba, etc.)
2. Carica file via FTP/FileZilla
3. Punta dominio alla cartella
4. Installa SSL certificate

### Domini Consigliati
- saracelentani.com
- scpropertymanager.com
- saracelentani.it

## 📞 Contatti Reali da Aggiornare

Verifica e aggiorna in tutti i file HTML:

```
Email: sara.celentani@gmail.com
Telefono: +39 331 125 0968
Indirizzo: Via U. Terracini n.22/N, Campi Bisenzio 50013 - Firenze
P.IVA: 07517410481
Codice Fiscale: CLNSRA98E69D612V
SDI: M5UXCR1
```

## 🔧 Integrazioni Consigliate

### Analytics
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

### Social Media
Aggiorna i link social nel footer e contatti con URL reali:
- Instagram
- Facebook
- LinkedIn

### Booking/Calendar
Integra piattaforme come:
- Lodgify
- Hospitable
- Guesty
- Beds24

### Live Chat
- Tawk.to (gratuito)
- Intercom
- Drift

### Email Marketing
- Mailchimp
- ConvertKit
- Sendinblue

## 🎨 Risorse Utili

### Immagini Stock Gratis
- [Unsplash](https://unsplash.com)
- [Pexels](https://pexels.com)
- [Pixabay](https://pixabay.com)

### Icone
- [Font Awesome](https://fontawesome.com)
- [Feather Icons](https://feathericons.com)
- [Heroicons](https://heroicons.com)

### Ottimizzazione Immagini
- [TinyPNG](https://tinypng.com)
- [Squoosh](https://squoosh.app)
- [ImageOptim](https://imageoptim.com)

## ✅ Checklist Pre-Launch

- [ ] Sostituisci tutti i placeholder con contenuti reali
- [ ] Aggiungi foto professionali delle proprietà
- [ ] Inserisci logo SC reale
- [ ] Verifica tutti i link
- [ ] Testa form di contatto
- [ ] Controlla responsive su tutti i dispositivi
- [ ] Ottimizza immagini
- [ ] Configura Analytics
- [ ] Imposta SEO meta tags
- [ ] Aggiungi favicon
- [ ] Testa velocità (PageSpeed Insights)
- [ ] Verifica accessibilità
- [ ] Setup SSL certificate
- [ ] Configura sitemap.xml
- [ ] robots.txt

## 📱 Responsive Testing

Testa su:
- iPhone (Safari)
- Android (Chrome)
- iPad/Tablet
- Desktop (Chrome, Firefox, Safari, Edge)

## 🐛 Troubleshooting

**Menu mobile non funziona:**
- Verifica che `js/main.js` sia caricato
- Controlla console per errori JavaScript

**Form non invia:**
- Verifica configurazione backend
- Controlla network tab in DevTools

**Immagini non si caricano:**
- Verifica percorsi file
- Controlla permessi cartelle

**Stili non applicati:**
- Verifica link CSS negli HTML
- Pulisci cache browser

## 📚 Documentazione CSS

### Classi Utility Disponibili

```css
/* Text Alignment */
.text-center, .text-left, .text-right

/* Colors */
.text-primary, .text-black, .text-gray, .text-white
.bg-primary, .bg-black, .bg-white, .bg-gray

/* Spacing */
.mt-1, .mt-2, .mt-3  /* margin-top */
.mb-1, .mb-2, .mb-3  /* margin-bottom */

/* Layout */
.container, .container-narrow
.grid, .grid-2, .grid-3, .grid-4, .grid-auto
.d-flex, .flex-column, .align-center, .justify-center

/* Components */
.btn, .btn-primary, .btn-secondary, .btn-outline
.card, .card-img, .card-body, .card-footer
.section, .section-sm
```

## 🎓 Supporto Aggiuntivo

Per personalizzazioni avanzate considera:
- Web developer freelance
- Agenzia web design
- Piattaforme no-code (Webflow, Wix, Squarespace)

## 📄 Licenza

Questo sito è stato creato per **Sara Celentani Property Manager**.
Tutti i contenuti sono modificabili per uso interno.

---

## ⭐ Caratteristiche Implementate

✅ **7 pagine complete** seguendo la sitemap
✅ **Palette RAL 1016** giallo brillante
✅ **Brand reale** Sara Celentani
✅ **Form funzionanti** con validazione
✅ **Design responsive** mobile-first
✅ **JavaScript interattivo** completo
✅ **SEO-friendly** structure
✅ **Performance optimized**
✅ **Contatti reali** dal biglietto da visita
✅ **Navigazione multipage** fluida

---

**Versione:** 1.0
**Data:** Febbraio 2026
**Creato per:** Sara Celentani Property Manager

Per domande o supporto: sara.celentani@gmail.com

Buon lavoro con il tuo nuovo sito! 🏠✨
