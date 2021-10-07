var numero1 = Number(prompt("¿Qué numero 1 quieres asignar"));
var numero2 = Number(prompt("¿Qué numero 2 quieres asignar"));
var operacion = prompt("¿Qué operación quieres realizar");


switch (operacion) {
    case '+':
        alert((numero1) + (numero2));
        break;
    case '-':
        alert(numero1 - numero2);
        break;
    case '*':
        alert(numero1 * numero2);
        break;
    case '/':
        alert(numero1 / numero2);
        break;
    case '^':
        alert(numero1 ** numero2);
        break;
    case '%':
        alert(numero1 % numero2);
        break;
    default:
        break;
}