document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const pageNumbers = document.querySelectorAll(".page-numbers");
    let currentPage = 1;

    // Función para mostrar la página actual y ocultar las demás
    function showPage(page) {
        pageNumbers.forEach(number => {
            if (Number(number.textContent) === page) {
                number.classList.add("active");
            } else {
                number.classList.remove("active");
            }
        });
    }

    // Función para actualizar la paginación al hacer clic en "Anterior"
    prevButton.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    // Función para actualizar la paginación al hacer clic en "Siguiente"
    nextButton.addEventListener("click", function() {
        if (currentPage < pageNumbers.length) {
            currentPage++;
            showPage(currentPage);
        }
    });

    // Función para actualizar la paginación al hacer clic en un número de página
    pageNumbers.forEach(number => {
        number.addEventListener("click", function() {
            currentPage = Number(number.textContent);
            showPage(currentPage);
        });
    });
});
