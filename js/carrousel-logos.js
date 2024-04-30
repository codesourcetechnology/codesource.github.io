document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) {
            index = carouselItems.length - 1;
        } else if (index >= carouselItems.length) {
            index = 0;
        }
        
        const offset = -index * carouselItems[0].offsetWidth;
        document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
        currentIndex = index;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Autoplay (opcional)
    const autoplayInterval = 3000; // Cambia el intervalo en milisegundos según prefieras
    let autoplayTimer;

    function startAutoplay() {
        autoplayTimer = setInterval(function() {
            showSlide(currentIndex + 1);
        }, autoplayInterval);
    }

    function stopAutoplay() {
        clearInterval(autoplayTimer);
    }

    startAutoplay();

    // Pausar el autoplay cuando el cursor esté sobre el carrusel (opcional)
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
});