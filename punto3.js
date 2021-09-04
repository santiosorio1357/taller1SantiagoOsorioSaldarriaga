/**
 * 
 * @param {Escribir un programa que encuentre la suma de los enteros positivos pares desde N hasta
 * 2. Comprobar que si N es impar se imprima un mensaje de error.} n 
 * @returns 
 */

const sumaEnteros = (n) => {
    if (n%2 != 0) {
        return console.log("ERROR. INGRESO UN NUMERO IMPAR");
    }
    if (n == 0) {
        return 0;
    }
    return n + sumaEnteros(n-2)
}

console.log("Escribe el numero");
var stdin = process.openStdin();

stdin.on("data", function (capturaNumero) {
    var numero = capturaNumero;
    numero = parseInt(numero, 10);
    console.time("TIEMPO")
    console.log(sumaEnteros(numero))
    console.timeEnd("TIEMPO")
    process.exit(0);
});

