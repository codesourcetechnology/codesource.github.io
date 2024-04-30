$(document).ready(function(){
    // Inicializar el carrusel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 1, // Número de diapositivas visibles
        margin: 30, // Espacio entre diapositivas
        loop: true, // Repetir el carrusel
        nav: true, // Mostrar navegación
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], // Personalizar los iconos de navegación
        dots: true, // Mostrar puntos de paginación
        dotsEach: true // Mostrar un punto para cada diapositiva
    });

    // Controlar el desplazamiento del carrusel al hacer clic en los botones de navegación
    $('.owl-prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });
    
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    // Ir a una diapositiva específica al hacer clic en un punto de paginación
    $('.owl-dot').click(function() {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});