const formulario = document.getElementById("formulario").addEventListener('submit', validar_datos);

function validar_datos(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    if (nombre.length == 0) {
        alert('Debe Ingresar nombre');
    }

    let apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
        alert('Debe Ingresar Apellido');
    }

    let email = document.getElementById('correo').value;
    if (email.length == 0) {
        alert('Debe Ingresar un email');

    }

    let mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
        alert('Debe Ingresar un mensaje');

    }

    return;

    this.submit();
}