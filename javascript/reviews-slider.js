document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.reviews-slider');
    if (!slider) return;

    const track = slider.querySelector('.reviews-track');
    const items = Array.from(track.children);
    const prevBtn = slider.querySelector('.review-nav.prev');
    const nextBtn = slider.querySelector('.review-nav.next');

    let index = 0;

    function update() {
        const offset = -index * 100; // percent
        track.style.transform = `translateX(${offset}%)`;
        // disable buttons at ends
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === items.length - 1;
    }

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index -= 1;
            update();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (index < items.length - 1) {
            index += 1;
            update();
        }
    });

    // allow left/right arrow keyboard navigation when the slider is focused
    slider.setAttribute('tabindex', '0');
    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });

    // make sure the track uses percentage sizing (handled by CSS) and initialize
    update();

    // optional: resize handler if you later compute widths
    window.addEventListener('resize', () => {
        // nothing required when using percent widths; placeholder for future
    });
});