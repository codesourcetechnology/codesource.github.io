// Selecciona el botón de "Aceptar cookies"
const botonAceptarCookies = document.getElementById('acceptCookiesBtn');

// Selecciona el contenedor del aviso de cookies
const avisoCookies = document.getElementById('aviso-cookies');

// Selecciona el fondo transparente
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

// Verifica si el usuario ya ha aceptado las cookies anteriormente utilizando el almacenamiento local
if (!localStorage.getItem('cookies-aceptadas')) {
    // Si las cookies no han sido aceptadas previamente, se muestra el aviso de cookies y el fondo transparente
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
}

// Evento de clic para el botón de "Aceptar cookies"
botonAceptarCookies.addEventListener('click', () => {
    // Cuando el usuario hace clic en "Aceptar cookies", se oculta el aviso de cookies y el fondo transparente
    avisoCookies.classList.remove('activo');
    fondoAvisoCookies.classList.remove('activo');

    // Se establece una marca en el almacenamiento local indicando que el usuario ha aceptado las cookies
    localStorage.setItem('cookies-aceptadas', true);
});