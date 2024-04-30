// Abre el modal al hacer clic en una tarjeta
document.querySelectorAll('.info-card').forEach(item => {
    item.addEventListener('click', event => {
        const modal = document.getElementById('myModal1');
        const modalText = document.getElementById('modal-text');
        const modalTitle = document.getElementById('modal-title');
        const cardContent = event.currentTarget.querySelector('p').innerHTML; // Obtener el contenido de la tarjeta
        const cardTitle = event.currentTarget.querySelector('h2').innerHTML; // Obtener el título de la tarjeta
        modal.style.display = "block";
        modalText.innerHTML = cardContent; // Mostrar el contenido de la tarjeta en el modal
        modalTitle.innerHTML = cardTitle; // Mostrar el título de la tarjeta en el modal
    });
});

// Cierra el modal al hacer clic en el icono de cierre (X)
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('myModal1').style.display = "none";
});

// Cierra el modal al hacer clic fuera de él
window.addEventListener('click', (event) => {
    const modal = document.getElementById('myModal1');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
