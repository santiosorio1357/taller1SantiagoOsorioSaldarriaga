/**
 * Crear un array números aleatorios. El tamaño del array lo debe de ingresar el usuario.
 */

let arregloNumerosAleatorios = []

const llenarArreglo = (tamanoArreglo, tamanoOriginal) => {
    if (tamanoArreglo == 0) {
        return arregloNumerosAleatorios
    }
    arregloNumerosAleatorios.push(parseInt(Math.random() * (tamanoOriginal*10)));
    return llenarArreglo(tamanoArreglo - 1, tamanoOriginal)
}

const mostrarArregloConsola = () => {
    arregloNumerosAleatorios.forEach(function (elemento, indice, array) {
        console.log("El valor del vector en la posicion: ", indice, " es: ", elemento)
    })
}

console.log("Escriba el tamaño del arreglo: ");
var stdin = process.openStdin();

stdin.on("data", function (capturaNumero) {
    var numero = capturaNumero;
    numero = parseInt(numero, 10);
    console.time("TIEMPO")
    llenarArreglo(numero,numero);
    console.timeEnd("TIEMPO")
    mostrarArregloConsola();
    process.exit(0);
});
