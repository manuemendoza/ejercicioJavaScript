
let radio = Number(prompt("Introduce el Radio"));
let diametro = (2 * radio);
let resultado = (radio * Math.PI) ;

console.log(radio);
console.log(diametro);
console.log(resultado)


function calculaArea() {
    alert(resultado)
    return  diametro * Math.PI ;
}
calculaArea()