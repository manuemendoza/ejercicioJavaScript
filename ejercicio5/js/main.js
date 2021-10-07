let numero = Number(prompt('Introduce el numero'))
console.log(numero);

let divisible2 = (numero % 2);

console.log(divisible2);

if (divisible2 === 0) {
    alert('Es divisible por 2')
}else{
    alert('No es divisible')
}