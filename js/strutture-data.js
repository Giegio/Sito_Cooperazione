/**
 * =====================================================
 * STRUTTURE-DATA.JS — Fonte Unica di Tutte le Strutture
 * =====================================================
 * Per aggiungere una nuova struttura:
 * 1. Aggiungi un nuovo oggetto nell'array STRUTTURE
 * 2. Crea la pagina dettaglio: strutture/nome-struttura.html
 * 3. Il sito si aggiorna automaticamente ovunque!
 * =====================================================
 */

const STRUTTURE = [
  {
    id: "midori",                              // ID univoco (usato per anchor e URL)
    slug: "midori-house-florence",             // URL della pagina dettaglio
    nome: "Midori House Florence",
    badge: "👥 Fino a 4 Ospiti",
    location: "Campi Bisenzio, Firenze, Toscana",
    mapsUrl: "https://maps.app.goo.gl/5DfsAddZxSmMHhjY9",
    mq: 55,
    imgCover: "img/Midori.png",               // Immagine principale (card e hero)
    gallery: [                                 // Tutte le immagini dello slider
      "img/Midori.png",
      "img/MIDORI/Midori2.jpg",
      "img/MIDORI/Midori3.jpg",
      "img/MIDORI/Midori4.jpg",
      "img/MIDORI/Midori5.jpg",
      "img/MIDORI/Midori6.jpg",
      "img/MIDORI/Midori7.jpg",
    ],
    descrizioneBreve: "Elegante appartamento di 55 m² in zona tranquilla e sicura, vicino a trasporti, ristoranti e centri benessere. Parcheggio gratuito nelle vicinanze.",
    descrizione: [
      "Elegante e moderno appartamento di 55 m², arredato in modo accogliente e funzionale, ideale per viaggiatori di tutto il mondo.",
      "Situato in una zona sicura e tranquilla, lontano dal caos del centro ma vicino a tutti i principali servizi: fermata dell'autobus per il centro di Firenze, stazioni ferroviarie, uscita autostradale, supermercati, ristoranti (anche gluten free), centri commerciali, spa, piscine, palestre e cinema.",
      "Parcheggio gratuito disponibile nelle vicinanze dell'appartamento.",
    ],
    features: ["Intero Appartamento", "Parcheggio Gratuito", "Vista sulle montagne fiorentine"],
    amenities: [
      { icon: "🌄", label: "Vista panoramica sulle montagne fiorentine" },
      { icon: "🍳", label: "Cucina attrezzata" },
      { icon: "📶", label: "Wi-Fi alta velocità" },
      { icon: "🐾", label: "Animali domestici ammessi" },
      { icon: "🧺", label: "Lavatrice gratuita in alloggio" },
      { icon: "❄️", label: "Climatizzazione e riscaldamento" },
    ],
    airbnb: "https://www.airbnb.it/h/midorihouseflorence",
    booking: "https://www.booking.com/Share-zG6cM3",
  },
  {
    id: "tokei",
    slug: "tokei-togliatti",
    nome: "Tokei Togliatti",
    badge: "👥 Fino a 5 Ospiti",
    location: "Campi Bisenzio, Firenze, Toscana",
    mapsUrl: "https://maps.app.goo.gl/FA8NgYUmkqcZCSjq6",
    mq: 58,
    imgCover: "img/Togliatti.jpeg",
    gallery: [
      "img/Togliatti.jpeg",
      "img/TOKEI/Tokei2.jpg",
      "img/TOKEI/Tokei3.jpg",
      "img/TOKEI/Tokei4.jpg",
      "img/TOKEI/Tokei5.jpg",
      "img/TOKEI/Tokei6.jpg",
      "img/TOKEI/Tokei7.jpg",
    ],
    descrizioneBreve: "Moderno appartamento di 58 m² con parcheggio gratuito di fronte. Fermata del bus per Firenze proprio sotto casa, animali benvenuti.",
    descrizione: [
      "Elegante e moderno appartamento di 58 m², arredato in modo funzionale e accogliente, ideale per viaggiatori di tutto il mondo.",
      "Situato in una zona sicura e tranquilla, lontano dal caos del centro, davanti alla fermata dell'autobus per il centro di Firenze e vicino a stazioni ferroviarie, uscita autostradale, supermercati, ristoranti, centri commerciali, spa, piscine, palestre e cinema.",
      "Parcheggio gratuito disponibile sulla strada di fronte all'appartamento.",
    ],
    features: ["Intero Appartamento", "Parcheggio Gratuito", "Pet Friendly"],
    amenities: [
      { icon: "🚍", label: "Di fronte alla fermata del bus per Firenze" },
      { icon: "🍳", label: "Cucina attrezzata" },
      { icon: "📶", label: "Wi-Fi alta velocità" },
      { icon: "🐾", label: "Animali domestici ammessi" },
      { icon: "🧺", label: "Lavatrice gratuita in alloggio" },
      { icon: "❄️", label: "Climatizzazione e riscaldamento" },
    ],
    airbnb: "https://airbnb.it/h/tokeitogliatti",
    booking: "https://www.booking.com/Share-wQpdRAa",
  },
  {
    id: "liberta",
    slug: "piazza-liberta-firenze",
    nome: "Piazza Libertà Firenze",
    badge: "👥 Fino a 8 Ospiti",
    location: "Piazza della Libertà, Firenze, Toscana",
    mapsUrl: "https://share.google/cJhnM6vR1uyh9ezx9",
    mq: 95,
    imgCover: "img/LIBERTA/liberta.jpeg",              // ← Sostituire con img reale
    gallery: [
      "img/LIBERTA/liberta.jpeg",
      "img/LIBERTA/1.jpeg",
      "img/LIBERTA/2.jpeg",
      "img/LIBERTA/3.jpeg",
      "img/LIBERTA/4.jpeg",
      "img/LIBERTA/5.jpeg",
      "img/LIBERTA/6.jpeg",
      "img/LIBERTA/7.jpeg",
      "img/LIBERTA/8.jpeg",
      "img/LIBERTA/9.jpeg",
      "img/LIBERTA/10.jpeg",
    ],
    descrizioneBreve: "Appartamento di 95 m² a 4 passi dal centro storico di Firenze. Posizione privilegiata vicino a tutti i principali monumenti e servizi.",
    descrizione: [
      "Spazioso appartamento al piano terra per famiglie e gruppi fino a 8 persone, situato in una zona tranquilla e residenziale a Piazza della Libertà, nel cuore di Firenze.",
      "Il centro storico UNESCO, con il meraviglioso Duomo di Firenze, gli Uffizi e Piazza della Signoria, è raggiungibile in soli 10 minuti a piedi o con il tram che ferma proprio vicino all'edificio. ",
      "L'appartamento dispone di cortile privato esclusivo, 4 camere da letto, 3 bagni e garage sorvegliato a pagamento nelle vicinanze."
    ],
    features: ["Intero Appartamento", "Centro Firenze", "Parcheggio Gratuito"],
    amenities: [
      { icon: "🌄", label: "A 4 passi dal centro storico di Firenze" },
      { icon: "🍳", label: "Cucina attrezzata" },
      { icon: "📶", label: "Wi-Fi alta velocità" },
      { icon: "🐾", label: "Animali domestici ammessi" },
      { icon: "❄️", label: "Climatizzazione e riscaldamento" },
    ],
    airbnb: "https://airbnb.it/h/piercapponi",   // ← Sostituire con link reale
    booking: "https://www.booking.com/hotel/it/piazza-liberta-firenze-10min-dal-duomo-di-firenze.it.html",         // ← Sostituire con link reale
  },
  {
    id: "santo-stefano",
    slug: "santo-stefano",
    nome: "Santo Stefano",
    badge: "👥 Fino a 4 Ospiti",
    location: "Campi Bisenzio, Firenze, Toscana",
    mapsUrl: "https://maps.app.goo.gl/6EWzc9SwBGxcgd5N7",
    mq: 92,
    imgCover: "img/SantoStefano.jpeg",
    gallery: [
      "img/SantoStefano.jpeg",
      "img/SANTOSTEFANO/Santo2.jpg",
      "img/SANTOSTEFANO/Santo3.jpg",
      "img/SANTOSTEFANO/Santo4.jpg",
      "img/SANTOSTEFANO/Santo5.jpg",
      "img/SANTOSTEFANO/Santo6.jpg",
      "img/SANTOSTEFANO/Santo7.avif",
    ],
    descrizioneBreve: "Splendido appartamento di 92 m² su due piani con vista sulla Rocca Strozzi, il fiume Bisenzio e le montagne toscane. A 10 min dall'aeroporto.",
    descrizione: [
      "Elegante e moderno appartamento di 92 m² su due piani, con origini storiche, arredato in modo ottimale per viaggiatori di tutto il mondo.",
      "Offre una splendida vista sul castello medievale \"Rocca\" Strozzi, sul fiume Bisenzio, sul ponte, sul centro storico e sulle montagne toscane.",
      "Di fronte alla fermata del bus per il centro di Firenze, vicino a supermercati, ristoranti, spa e palestre, e a 10 minuti di auto dall'aeroporto di Firenze.",
      "Parcheggio gratuito disponibile nelle vicinanze.",
    ],
    features: ["Intero Appartamento", "2 Piani", "Vista castello medievale"],
    amenities: [
      { icon: "🌄", label: "Vista sul castello, sul fiume e sul centro storico" },
      { icon: "🍳", label: "Cucina attrezzata" },
      { icon: "📶", label: "Wi-Fi alta velocità" },
      { icon: "💻", label: "Spazio di lavoro dedicato" },
      { icon: "🔨", label: "Appartamento appena ristrutturato!" },
      { icon: "❄️", label: "Climatizzazione e riscaldamento" },
    ],
    airbnb: "https://www.airbnb.it/h/santostefanocastle",
    booking: "https://www.booking.com/Share-2nsdDk",
  }
  ,

  // =====================================================
  // ➕ AGGIUNGI QUI NUOVE STRUTTURE — copia il blocco sopra
  // =====================================================
];


/* =========================================================
   FUNZIONI HELPER — usate dai componenti del sito
   ========================================================= */

/**
 * Genera le card per la sezione "Featured Properties" (usata in index.html e strutture.html)
 * @param {number} limit - quante card mostrare (undefined = tutte)
 */
function renderPropertyCards(containerId, limit) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const strutture = limit ? STRUTTURE.slice(0, limit) : STRUTTURE;

  container.innerHTML = strutture.map(s => `
    <div class="property-card card">
      <a href="strutture/${s.slug}.html">
        <div class="property-img" style="background-image: url('${s.imgCover}');"></div>
        <div class="card-body">
          <h3 class="card-title">${s.nome}</h3>
          <p class="property-location">📍 ${s.location}</p>
          <p class="card-text">${s.descrizioneBreve}</p>
          <div class="property-features">
            ${s.features.map(f => `<span class="feature-tag">${f}</span>`).join('')}
          </div>
        </div>
        <div class="card-footer">
          <a href="strutture/${s.slug}.html" class="btn btn-outline btn-sm">Scopri di più</a>
        </div>
      </a>
    </div>
  `).join('');
}

/**
 * Genera la lista completa in strutture.html (formato dettaglio con gallery)
 */
function renderStrutturePage(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = STRUTTURE.map((s, i) => `
    ${i > 0 ? '<div class="divider"></div>' : ''}
    <div class="property-detail" id="${s.id}">
      <div class="property-grid ${i % 2 !== 0 ? 'reverse' : ''}">
        <div class="property-gallery" data-gallery>
          ${s.gallery.map((img, idx) => `
            <div class="slide ${idx === 0 ? 'active' : ''}" style="background-image:url('${img}')"></div>
          `).join('')}
          <button class="gallery-arrow prev">‹</button>
          <button class="gallery-arrow next">›</button>
        </div>
        <div class="property-info">
          <span class="property-badge">${s.badge}</span>
          <h2 class="property-name">${s.nome}</h2>
          <span class="amenity-icon">📍 </span>
          <a href="${s.mapsUrl}" target="_blank" class="property-location">${s.location}</a>
          <div class="property-description">
            ${s.descrizione.map(p => `<p>${p}</p>`).join('')}
          </div>
          <div class="property-amenities">
            <h3>Servizi & Comfort</h3>
            <div class="amenities-grid">
              ${s.amenities.map(a => `
                <div class="amenity">
                  <span class="amenity-icon">${a.icon}</span>
                  <span>${a.label}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div class="property-cta ${i % 2 !== 0 ? 'reverse' : ''}">
            <a href="contatti.html" class="btn btn-primary">Richiedi Disponibilità</a>
            <a href="${s.airbnb}" target="_blank" class="btn btn-outline">Vedi su Airbnb</a>
            <a href="${s.booking}" target="_blank" class="btn btn-outline">Vedi su Booking.com</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

/**
 * Genera le mini-card per la sidebar / sezione correlate
 */
function renderRelatedCards(containerId, excludeSlug) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const altre = STRUTTURE.filter(s => s.slug !== excludeSlug).slice(0, 3);
  container.innerHTML = altre.map(s => `
    <a href="../strutture/${s.slug}.html" class="related-card">
      <div class="related-img" style="background-image:url('../${s.imgCover}')"></div>
      <div class="related-info">
        <strong>${s.nome}</strong>
        <span>📍 ${s.location}</span>
      </div>
    </a>
  `).join('');
}
