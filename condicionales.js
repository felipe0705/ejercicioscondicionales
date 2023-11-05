console.log("EJERCICIO 1")

let num1 = prompt("ingrese numero")
let num2 = prompt("ingrese numero")
let num3 = prompt("ingrese numero")
if (num1 > num2) {
    console.log("numero 1 mayor a numero 2")
} else {
    console.log("numero 1 menor a numero 2")
}

console.log("EJERCICIO 2")

if (num1 == num2) {
    console.log("numeros iguales")
} else {
    console.log("numeros diferentes")
}

console.log("EJERCICIO 3")

if (num1 > num2) {
    console.log("numero 1 es el mas grande")
} else if (num2 > num1) {
    console.log("numero 2 es el mas grande")
}

console.log("EJERCICIO 4")

let milista = [num1, num2, num3]

function menor(lista) {
    let menor = lista[0];
    for (i = 1; i < lista.length; i++) {
        if (lista[i] < menor)
            menor = lista[i];
    }
    return menor
}
console.log("el numero menor es: " + menor(milista))

console.log("EJERCICIO 5")

let persona1 = {
    nombre: prompt("ingrese su nombre"),
    edad: prompt("ingrese su edad"),
    altura: prompt("ingrese su altura")
}
let persona2 = {
    nombre: prompt("ingrese su nombre"),
    edad: prompt("ingrese su edad"),
    altura: prompt("ingrese su altura")
}
if (persona1.altura > persona2.altura && persona1.edad > persona2.edad) {

    console.log("persona 1 es más alta: " + persona1.nombre)
    console.log("persona 1 es mayor: " + persona1.nombre)

} else if (persona2.altura > persona1.altura && persona2.edad > persona1.edad) {

    console.log("persona 2 es más alta: " + persona2.nombre)
    console.log("persona 2 es mayor: " + persona2.nombre)
}