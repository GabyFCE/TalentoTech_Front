// ==========================
// VALIDACIÓN DEL FORMULARIO
// ==========================

    // Seleccionamos el botón
    const btn = document.getElementById("btn_enviar");

    // Seleccionamos el contenedor para mensajes de error.
    const errorBox = document.getElementById("errorBox");

    // Cuando se hace clic en Enviar:
    btn.addEventListener("click", function (e) {

        e.preventDefault(); // evitamos enviar el formulario

        // Obtenemos los campos por ID
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        // Limpiamos los mensajes anteriores
        errorBox.innerHTML = "";

        // Variable para guardar errores

        errores = detectarErrores()

        // ======================
        // MOSTRAR ERRORES
        // ======================

        if (errores.length > 0) {
            // Mostramos cada error en una línea dentro de la caja roja
            errorBox.innerHTML = errores.join("<br>");
            return; // detenemos el envío
        }

        // ======================
        // SI TODO ESTÁ BIEN
        // ======================

        // Redireccionamos a la página success
        window.location.href = "success.html";
    });

    function detectarErrores(){

        // Obtenemos los campos por ID
        const nombre = document.getElementById("nombre");
        const email = document.getElementById("email");
        const mensaje = document.getElementById("mensaje");

        // Variable para guardar errores
        let errores = [];

        // ======================
        // VALIDACIÓN DEL NOMBRE
        // ======================

        // 1. No debe estar vacío
        if (nombre.value.trim() === "") {
            errores.push("El campo Nombre está incompleto.");
        }

        // 2. Debe tener letras
        if (!/[a-zA-ZñÑáéíóúÁÉÍÓÚ]/.test(nombre.value)) {
            errores.push("El campo Nombre debe contener letras.");
        }

        // ======================
        // VALIDACIÓN DEL EMAIL
        // ======================

        // 1. No debe estar vacío
        if (email.value.trim() === "") {
            errores.push("El campo Email está incompleto.");
        }

        // 2. Debe tener formato válido
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!regexEmail.test(email.value)) {
            errores.push("El Email ingresado no es válido (debe incluir @ y tener formato correcto).");
        }

        // ======================
        // VALIDACIÓN DEL MENSAJE
        // ======================

        // 1. No debe estar vacío
        if (mensaje.value.trim() === "") {
            errores.push("El campo Mensaje está incompleto.");
        }

        // 2. Debe tener una cantidad mínima de caracteres
        if (mensaje.value.trim().length < 10) {
            errores.push("El Mensaje debe tener al menos 10 caracteres.");
        }

        return errores;
    }


