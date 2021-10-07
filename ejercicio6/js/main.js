
let producto = Number(prompt('Introduce el Precio el Producto'));
console.log(producto);
const iva = (producto * 0.21) ;
console.log(iva);

let precioFinal = (producto + iva)
console.log(precioFinal);

alert(precioFinal);

//modificar como funcion