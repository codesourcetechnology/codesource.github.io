document.addEventListener("DOMContentLoaded", function() {
    const catalogCards = document.querySelectorAll(".catalog-card");
    const modals = document.querySelectorAll(".modal");
    const closeModalButtons = document.querySelectorAll(".close");

    // Función para abrir el modal
    function openModal(index) {
        const modal = modals[index];
        const card = catalogCards[index];
        const imageUrl = card.querySelector("img").src;
        const gameTitle = card.querySelector("h3").textContent;
        const gameDescription = card.querySelector("p").textContent;
        const gameLink = card.querySelector("a").href;

        const modalImage = modal.querySelector("img");
        const modalTitle = modal.querySelector("h2");
        const modalDescription = modal.querySelector("p");
        const modalLink = modal.querySelector("a");

        modalImage.src = imageUrl;
        modalImage.alt = gameTitle;
        modalTitle.textContent = gameTitle;
        modalDescription.textContent = gameDescription;
        modalLink.href = gameLink;

        modal.style.display = "block";
    }

    // Función para cerrar el modal
    function closeModal(index) {
        const modal = modals[index];
        modal.style.display = "none";
    }

    // Agregar evento de clic a cada tarjeta para abrir el modal correspondiente
    catalogCards.forEach((card, index) => {
        card.addEventListener("click", function() {
            openModal(index);
        });
    });

    // Agregar evento de clic a cada botón de cierre para cerrar el modal correspondiente
    closeModalButtons.forEach((button, index) => {
        button.addEventListener("click", function(event) {
            event.stopPropagation(); // Detiene la propagación del evento para evitar que se abra el modal
            closeModal(index);
        });
    });

    // Cerrar el modal haciendo clic en cualquier parte fuera del modal
    window.addEventListener("click", function(event) {
        modals.forEach((modal, index) => {
            if (event.target === modal) {
                closeModal(index);
            }
        });
    });
});
