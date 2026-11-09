// MENÚ LATERAL CON ANIMACIÓN

document.addEventListener("DOMContentLoaded", function () {

    const menuLateral = document.getElementById("menuLateral");

    if (menuLateral) {
        const menu = bootstrap.Offcanvas.getOrCreateInstance(menuLateral);

        // Cerrar el menú al seleccionar una opción
        const enlaces = menuLateral.querySelectorAll(".nav-link");

        enlaces.forEach(function (enlace) {
            enlace.addEventListener("click", function () {
                menu.hide();
            });
        });
    }

});
