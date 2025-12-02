// Force media query recalculation on page load to fix responsive layout issues
(function() {
    // Trigger a viewport recalculation
    function triggerResponsiveRecalc() {
        // Force a reflow by temporarily changing a style
        const html = document.documentElement;
        const originalWidth = html.style.width;
        html.style.width = '99.9%';
        
        // Trigger reflow
        void html.offsetWidth;
        
        html.style.width = originalWidth;
    }

    // Call on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', triggerResponsiveRecalc);
    } else {
        triggerResponsiveRecalc();
    }

    // Also trigger on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(triggerResponsiveRecalc, 150);
    });
})();