// for (let numeros = 0; numeros <= 100; numeros++) {
//     if (numeros % 2 == 0) {
//         console.log(numeros + ' par')
//     } else {
//         console.log(numeros + ' inpar');
//     }
// }

let numeros = 0;

for (numeros; numeros <= 100; numeros++) {
    parImp();
}

function parImp() {
    if (numeros % 2 == 0 || numeros % 3 == 0) {
        console.log(numeros)
    }
}