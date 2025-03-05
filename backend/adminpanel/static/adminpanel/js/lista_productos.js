document.addEventListener("DOMContentLoaded", function () {
    // Animación de entrada para los productos
    const productos = document.querySelectorAll(".product-item");
    productos.forEach((producto, index) => {
        setTimeout(() => {
            producto.style.opacity = "1";
            producto.style.transform = "translateY(0)";
        }, index * 100);
    });

    // Confirmación antes de eliminar un producto
    const deleteButtons = document.querySelectorAll(".btn.delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            const confirmDelete = confirm("¿Estás seguro de que quieres eliminar este producto?");
            if (confirmDelete) {
                window.location.href = this.href;
            }
        });
    });

    // Notificación al agregar un producto
    const agregarBtn = document.querySelector(".btn.agregar");
    if (agregarBtn) {
        agregarBtn.addEventListener("click", function () {
            alert("Redirigiendo para agregar un nuevo producto...");
        });
    }
});
