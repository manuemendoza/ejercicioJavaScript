let numeroIndicado = Number(prompt('¿Cuantas Ventas HICISTES!!?'));

let resultado = 0;

for (numeroIndicado; numeroIndicado > 0; numeroIndicado--) {
    let venta = Number(prompt('introduce ganancia'))
    console.log(venta)
    resultado += venta
}
alert(resultado)