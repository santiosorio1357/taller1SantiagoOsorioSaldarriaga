/**
 * Crear un array números aleatorios. El tamaño del array lo debe de ingresar el usuario.
 */

let array = []

const ArrayAleatorios = (tamano) => {
    if (tamano == 0) {
        return array
    }
    array.push(parseInt(Math.random() * (10)));
    return ArrayAleatorios(tamano - 1)
}

const imprimirArreglo = () => {
    array.forEach(function (elemento, indice, array) {
        console.log("El valor del vector en la posicion: ", indice, " es: ", elemento)
    })
}

console.log("Escribe el numero");
var stdin = process.openStdin();

stdin.on("data", function (d) {
    var num = d;
    num = parseInt(num, 10);
    console.time("TIEMPO")
    ArrayAleatorios(num);
    console.timeEnd("TIEMPO")
    imprimirArreglo();
    process.exit(0);
});
