
// Botón para cambiar el tema de la página
const btnTema = document.getElementById("btnTema");

// Escuchar cuando el usuario hace clic
btnTema.addEventListener("click", function() {

    // Activar o desactivar el modo oscuro
    document.body.classList.toggle("modo-oscuro");

    // Cambiar el texto del botón
    if (document.body.classList.contains("modo-oscuro")) {

        btnTema.innerHTML = "☀️ Modo claro";

    } else {

        btnTema.innerHTML = "🌙 Modo oscuro";

    }

});
