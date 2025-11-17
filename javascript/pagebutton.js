document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.scroll-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const target = document.querySelector(this.getAttribute('data-target'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            } else if (this.getAttribute('data-target') === '#top') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});