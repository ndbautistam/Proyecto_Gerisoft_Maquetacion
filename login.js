
// ========================================
// 1. ANIMACIÓN DEL BOTÓN INGRESAR
// ========================================

// Obtener el botón
var btn = document.getElementById("btnIngresar");

// Cuando el mouse pasa sobre el botón
if (btn) {
    btn.onmouseover = function() {
        btn.style.backgroundColor = "#21c167";
    };

    // Cuando el mouse sale del botón
    btn.onmouseout = function() {
        btn.style.backgroundColor = "#196f3d";
    };
}


// ========================================
// 2. ANIMACIÓN DE ERROR DEL FORMULARIO
// ========================================

// Obtener el formulario
var formularioLogin = document.getElementById("formularioLogin");

// Función para animar el formulario
function animarError() {

    var posicion = 0;

    var movimiento = setInterval(function() {

        formularioLogin.style.transform =
            "translateX(" + (posicion % 2 == 0 ? 8 : -8) + "px)";

        posicion++;

        if (posicion >= 6) {
            clearInterval(movimiento);
            formularioLogin.style.transform = "translateX(0)";
        }

    }, 60);

}


// ========================================
// 3. MOSTRAR Y OCULTAR CONTRASEÑA
// ========================================

// Obtener los elementos
var password = document.getElementById("password");
var btnMostrar = document.getElementById("btnMostrar");
var iconoOjo = document.getElementById("iconoOjo");

// Cuando el usuario presiona el botón del ojo
if (btnMostrar && password && iconoOjo) {

    btnMostrar.onclick = function() {

        if (password.type === "password") {

            // Mostrar contraseña
            password.type = "text";

            // Cambiar a ojo cerrado
            iconoOjo.className = "bi bi-eye-slash";

        } else {

            // Ocultar contraseña
            password.type = "password";

            // Cambiar a ojo abierto
            iconoOjo.className = "bi bi-eye";

        }

    };

}
// ========================================
// 4. MODO CLARO Y OSCURO
// ========================================

// Obtener elementos
var btnTema = document.getElementById("btnTema");
var iconoTema = document.getElementById("iconoTema");
var textoTema = document.getElementById("textoTema");

// Función para cambiar el tema
function cambiarTema(tema) {

    document.documentElement.setAttribute("data-bs-theme", tema);

    if (tema === "dark") {

        // Activar modo oscuro
        document.body.classList.remove("bg-light");
        document.body.classList.add("bg-dark");

        document.querySelectorAll(".bg-white").forEach(function(elemento) {
            elemento.classList.remove("bg-white");
            elemento.classList.add("bg-body-tertiary");
        });

        document.querySelectorAll(".text-dark").forEach(function(elemento) {
            elemento.classList.remove("text-dark");
            elemento.classList.add("text-light");
        });

        iconoTema.className = "bi bi-sun";
        textoTema.textContent = "Modo claro";

    } else {

        // Activar modo claro
        document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-light");

        document.querySelectorAll(".bg-dark").forEach(function(elemento) {
            if (elemento !== document.body) {
                elemento.classList.remove("bg-dark");
                elemento.classList.add("bg-white");
            }
        });

        document.querySelectorAll(".text-light").forEach(function(elemento) {
            elemento.classList.remove("text-light");
            elemento.classList.add("text-dark");
        });

        iconoTema.className = "bi bi-moon-stars";
        textoTema.textContent = "Modo oscuro";
    }

}

// Recuperar tema guardado
var temaGuardado = localStorage.getItem("temaGerisoft") || "light";

cambiarTema(temaGuardado);

// Evento del botón
btnTema.onclick = function() {

    var temaActual = document.documentElement.getAttribute("data-bs-theme");

    var nuevoTema = temaActual === "light" ? "dark" : "light";

    cambiarTema(nuevoTema);

    localStorage.setItem("temaGerisoft", nuevoTema);

};