// Ejemplo de añadir un producto al carrito
document.addEventListener('DOMContentLoaded', () => {
    // Event listeners y lógica para añadir al carrito, por ejemplo
    document.querySelectorAll('.producto a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const productoId = new URLSearchParams(window.location.search).get('id');
            console.log(`Producto ${productoId} añadido al carrito`);
            // Aquí puedes agregar lógica para añadir al carrito
        });
    });
});
