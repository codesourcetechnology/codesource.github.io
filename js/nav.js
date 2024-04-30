document.addEventListener('DOMContentLoaded', function () {
    // Encabezado
    var video = document.getElementById('headerVideo');

    // Nav
    const menuHamburguer = document.getElementById('Hamburguer');
    const menuContainer = document.getElementById('Menu');
    const menuItems = document.querySelectorAll('.menuItem');

    menuHamburguer.addEventListener('click', toggleMenu);

    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            window.location.href = item.querySelector('.menuItemLink').href;
            closeMenu();
        });
    });

    document.addEventListener('click', function (event) {
        const isClickInsideMenu = menuContainer.contains(event.target);
        const isClickOnHamburger = menuHamburguer.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger) {
            closeMenu();
        }
    });

    function toggleMenu() {
        menuContainer.classList.toggle('open');
        menuHamburguer.classList.toggle('open');
    }

    function closeMenu() {
        menuContainer.classList.remove('open');
        menuHamburguer.classList.remove('open');
    }

    /* Buscador
    const inputSearch = document.getElementById('inputSearch');

    // Agrega un evento para manejar la búsqueda al presionar "Enter"
    inputSearch.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            // Simulación de obtener los resultados disponibles con información detallada
            const resultadosDisponibles = [
                { id: 'inicio', ruta: '../index.html', categoria: 'página principal', genero: '', creador: '', año: '' },
                // ... (otros resultados)
            ];

            const resultadoRelevante = buscarResultadoRelevante(inputSearch.value.toLowerCase(), resultadosDisponibles);
            if (resultadoRelevante) {
                window.location.href = resultadoRelevante.ruta;
            } else {
                // Muestra un banner indicando que no hay resultados
                mostrarBannerModal("No se encontraron resultados para tu búsqueda.");
            }

            // Limpiar el campo de búsqueda después de presionar "Enter"
            inputSearch.value = '';
        }
    });

    // Función para buscar el resultado más relevante
    function buscarResultadoRelevante(consulta, resultados) {
        // Implementa aquí tu lógica de búsqueda avanzada o utiliza bibliotecas de coincidencia de cadenas
        // En este ejemplo, buscamos coincidencias en IDs, rutas, categorías, géneros, creadores y años
        for (const resultado of resultados) {
            if (
                resultado.id.toLowerCase().includes(consulta) ||
                resultado.ruta.toLowerCase().includes(consulta) ||
                resultado.categoria.toLowerCase().includes(consulta) ||
                resultado.genero.toLowerCase().includes(consulta) ||
                resultado.creador.toLowerCase().includes(consulta) ||
                resultado.año.toLowerCase().includes(consulta)
            ) {
                return resultado;
            }
        }
        return null;
    }

    // Función para mostrar un banner modal
    function mostrarBannerModal(mensaje) {
        const modalContainer = document.getElementById('modal-container');
        const modalMessage = document.getElementById('modal-message');

        // Establece el mensaje del modal
        modalMessage.textContent = mensaje;

        // Muestra el modal
        modalContainer.style.display = 'flex';

        // Cierra el modal si se hace clic en la "X"
        document.getElementById('close-modal').addEventListener('click', function () {
            modalContainer.style.display = 'none';
        });

        // Cierra el modal si se hace clic fuera del contenido
        window.addEventListener('click', function (event) {
            if (event.target === modalContainer) {
                modalContainer.style.display = 'none';
            }
        });
    }*/
});