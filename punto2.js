/**
 * Igual que el ejercicio anterior, pero ingresar en el array números aleatorios sin que se
 *repitan.
 */

let array = []

const ArrayAleatorios = (tamano, tamanoOriginal) => {
    if (tamano == 0) {
        return array
    }
    numero = parseInt(Math.random() * (tamanoOriginal));
    for (let index = 0; index < tamanoOriginal; index++) {
        if (array[index] == numero) 
        {
            return ArrayAleatorios(tamano,tamanoOriginal)
        }
    }
    array.push(numero);
    return ArrayAleatorios(tamano-1,tamanoOriginal)    
}

const imprimirArreglo = () => {
    array.forEach(function(elemento, indice, array){
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