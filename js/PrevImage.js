// Obtener referencia al input y a la imagen

const $seleccionArchivos = document.querySelector("#seleccionArchivos"),
    $imagenPrevisualizacion = document.querySelector("#imagenPrevisualizacion1");
    $imagenPrevisualizacion2 = document.querySelector("#imagenPrevisualizacion2");

// Escuchar cuando cambie
$seleccionArchivos.addEventListener("change", () => {
    // Los archivos seleccionados, pueden ser muchos o uno
    const archivos = $seleccionArchivos.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
        $imagenPrevisualizacion.src = "";
        $imagenPrevisualizacion2.src = "";
        return;
    }
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    $imagenPrevisualizacion.src = objectURL;
    $imagenPrevisualizacion2.src = objectURL;
});


/* configuracion de password */
    /* Password iguales */
    var password, password2;

    password = document.getElementById('validationCustom01');
    password2 = document.getElementById('validationCustom02');

    password.onchange = password2.onkeyup = passwordMatch;

    function passwordMatch() {
        if (password.value !== password2.value) {
            password2.setCustomValidity('Las contraseñas no coinciden.');
        } else {
            password2.setCustomValidity('');
        }
    }

    /* ver - ocultar password */

