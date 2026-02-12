// Home page specific JavaScript

// ─── Properties Carousel ────────────────────────────────────────────────────
(function () {
    const track    = document.getElementById('propTrack');
    const prevBtn  = document.getElementById('propPrev');
    const nextBtn  = document.getElementById('propNext');

    if (!track || !prevBtn || !nextBtn) return;

    let currentIndex = 0;

    /** How many cards are fully visible at the current viewport width */
    function visibleCount() {
        if (window.innerWidth <= 640)  return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    }

    function getCards()  { return Array.from(track.children); }

    function getGapPx() {
        // Read the computed gap from the track element (matches the 1.5rem in CSS)
        const style = window.getComputedStyle(track);
        return parseFloat(style.columnGap) || 24;
    }

    function updateCarousel() {
        const cards = getCards();
        const total = cards.length;
        const vis   = visibleCount();

        if (total === 0) return;

        // Clamp currentIndex in case viewport was resized
        const maxIndex = Math.max(0, total - vis);
        if (currentIndex > maxIndex) currentIndex = maxIndex;

        const cardWidth = cards[0].offsetWidth;
        const gap       = getGapPx();
        const offset    = currentIndex * (cardWidth + gap);

        track.style.transform = `translateX(-${offset}px)`;

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
    }

    prevBtn.addEventListener('click', function () {
        if (currentIndex > 0) { currentIndex--; updateCarousel(); }
    });

    nextBtn.addEventListener('click', function () {
        const maxIndex = Math.max(0, getCards().length - visibleCount());
        if (currentIndex < maxIndex) { currentIndex++; updateCarousel(); }
    });

    // Re-calculate on resize (debounced)
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(updateCarousel, 120);
    });

    // Initial render
    updateCarousel();
})();
