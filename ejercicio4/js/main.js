let radio = Number(prompt("Introduce el Radio"));
let radio2 = (radio ** 2);

console.log(radio);
console.log(diametro);
console.log(resultado)

function calculaArea() {
    return radio2 * Math.PI
}

function otroCalculo(areaDesdeLaFunc) {
    alert(areaDesdeLaFunc - 10)
}

let area = calculaArea()
otroCalculo(area)

//  esto es un llamado de funcion y proceso