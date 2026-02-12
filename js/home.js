// Home page specific JavaScript
<<<<<<< Updated upstream
=======

// ─── Properties Carousel ────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function() {
    const track    = document.getElementById('propTrack');
    const prevBtn  = document.getElementById('propPrev');
    const nextBtn  = document.getElementById('propNext');

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    let isTransitioning = false;

    /** How many cards are fully visible at the current viewport width */
    function visibleCount() {
        if (window.innerWidth <= 640)  return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function getOriginalCards() { 
        return Array.from(track.querySelectorAll('.property-card:not(.clone)')); 
    }

    function getGapPx() {
        const style = window.getComputedStyle(track);
        return parseFloat(style.columnGap) || 24;
    }

    function cloneCards() {
        // Rimuovi eventuali cloni esistenti
        track.querySelectorAll('.clone').forEach(el => el.remove());

        const originalCards = getOriginalCards();
        const vis = visibleCount();

        // Clona le prime 'vis' card e aggiungile alla fine
        for (let i = 0; i < vis; i++) {
            const clone = originalCards[i].cloneNode(true);
            clone.classList.add('clone');
            track.appendChild(clone);
        }

        // Clona le ultime 'vis' card e aggiungile all'inizio
        for (let i = originalCards.length - vis; i < originalCards.length; i++) {
            const clone = originalCards[i].cloneNode(true);
            clone.classList.add('clone');
            track.insertBefore(clone, track.firstChild);
        }

        // Parti dalla prima card originale (dopo i cloni iniziali)
        currentIndex = vis;
        updateCarousel(false);
    }

    function updateCarousel(animate = true) {
        const allCards = Array.from(track.children);
        if (allCards.length === 0) return;

        const cardWidth = allCards[0].offsetWidth;
        const gap = getGapPx();
        const offset = currentIndex * (cardWidth + gap);

        if (!animate) {
            track.style.transition = 'none';
            track.style.transform = `translateX(-${offset}px)`;
            
            // Forza il reflow per assicurarsi che la transizione sia disabilitata
            track.offsetHeight;
            
            // Riabilita la transizione
            track.style.transition = 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)';
        } else {
            track.style.transform = `translateX(-${offset}px)`;
        }
    }

    function handleTransitionEnd() {
        if (!isTransitioning) return;

        const originalCards = getOriginalCards();
        const vis = visibleCount();
        const totalOriginal = originalCards.length;

        // Aggiungi un micro-delay per evitare il flash
        setTimeout(() => {
            // Se siamo oltre l'ultima card originale (sui cloni alla fine)
            if (currentIndex >= vis + totalOriginal) {
                currentIndex = vis + (currentIndex - (vis + totalOriginal));
                updateCarousel(false);
            }
            
            // Se siamo prima della prima card originale (sui cloni all'inizio)
            else if (currentIndex < vis) {
                currentIndex = vis + totalOriginal + (currentIndex - vis);
                updateCarousel(false);
            }

            isTransitioning = false;
        }, 20);
    }

    prevBtn.addEventListener('click', function () {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        updateCarousel(true);
    });

    nextBtn.addEventListener('click', function () {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        updateCarousel(true);
    });

    // Ascolta la fine della transizione
    track.addEventListener('transitionend', handleTransitionEnd);

    // Re-calculate on resize (debounced)
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            cloneCards();
        }, 120);
    });

    // Initial setup
    cloneCards();
<<<<<<< Updated upstream
});
>>>>>>> Stashed changes
=======
});
>>>>>>> Stashed changes
