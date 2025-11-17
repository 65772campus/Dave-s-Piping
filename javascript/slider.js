document.addEventListener('DOMContentLoaded', function() {
    const banners = document.querySelectorAll('.banner');
    let currentIndex = 0;

    function showNextBanner() {
        banners[currentIndex].style.transform = 'translateX(-100%)';
        banners[currentIndex].style.zIndex = -1; // Move the current banner behind
        currentIndex = (currentIndex + 1) % banners.length;
        banners[currentIndex].style.transform = 'translateX(0)';
        banners[currentIndex].style.zIndex = 10; // Move the next banner on top
        setTimeout(() => {
            banners[(currentIndex - 1 + banners.length) % banners.length].style.transform = 'translateX(100%)';
        }, 3000); // Adjust this timeout to match the transition duration
    }

    setInterval(showNextBanner, 5000); // Change banner every 5 seconds
});