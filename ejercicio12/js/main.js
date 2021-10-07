const contraseñaGuardada = 'manuel';
let intentos = 3;
var nuevoIntento

for (intentos; intentos > 0; intentos--) {
    console.log('1 pasada por el for');
    var contraseñaUsuario = (prompt('Escriba su contraseña'));
    if (contraseñaUsuario === contraseñaGuardada) {
        alert('contraseña correcta');
        intentos = 0
    } else {
        alert('No es correcta ' + 'Te quedan ' + (0 + (intentos - 1)) + ' intentos');
    }
}

// do {
//     if (contraseñaUsuario === contraseñaGuardada) {
//         alert('contraseña correcta');

//     } else {
//         alert('no es correcta');
//     }

//     intentos--

// } while (intentos > 0);