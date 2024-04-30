document.addEventListener("DOMContentLoaded", function() {
    const videos = document.querySelectorAll(".video");
    const modal = document.getElementById("modal-container");
    const modalVideo = document.getElementById("modal-video");
    const closeModal = document.querySelectorAll(".close");

    videos.forEach(video => {
        video.addEventListener("click", function() {
            const videoSource = this.getAttribute("data-video");
            modalVideo.src = videoSource;
            modal.style.display = "block";
        });
    });

    closeModal.forEach(button => {
        button.addEventListener("click", function() {
            modal.style.display = "none";
            modalVideo.pause(); // Pausar el video al cerrar la ventana modal
        });
    });

    // Cerrar la ventana modal haciendo clic fuera de ella
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            modalVideo.pause(); // Pausar el video al cerrar la ventana modal
        }
    });
});
