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

confirm("bienvenido persona 1")
let persona1 = {
    nombre: prompt("ingrese su nombre"),
    edad: prompt("ingrese su edad"),
    altura: prompt("ingrese su altura"),
    vision: prompt("tipo de vision del 1 al 10"),
    pase: prompt("vip o normal"),


}
confirm("bienvenido persona 2")
let persona2 = {

    nombre: prompt("ingrese su nombre"),
    edad: prompt("ingrese su edad"),
    altura: prompt("ingrese su altura")


}
if (persona1.edad > persona2.edad) {

    console.log("persona 1 es mayor: " + persona1.nombre)
} else if (persona2.edad > persona1.edad) {

    console.log("persona 2 es mayor: " + persona2.nombre)
} else {
    console.log("son de la misma edad")
}

if (persona1.altura > persona2.altura) {

    console.log("persona 1 es más alto: " + persona1.nombre)


} else if (persona2.altura > persona1.altura) {

    console.log("persona 2 es más alto: " + persona2.nombre)

} else {
    console.log("son igual de altos")
}

console.log("EJERCICIO 6")

if (persona1.edad >= 18) {
    if (persona1.altura >= 150) {
        if (persona1.vision >= 8) {
            console.log("Estas capacitado para conducir ")
        } else {
            console.log("No estas capacitado para conducir")
        }

    } else {
        console.log("No estas capacitado para conducir")
    }

} else {
    console.log("No estas capacitado para conducir")
}


console.log("EJERCICIO 7")


if (persona1.nombre == "felipe" || persona1.pase == "vip") {
    confirm("Bienvenido")
} else {
    var confirmar = confirm("¿Tienes entrada?")
    if (confirmar) {
        let confirmar2 = confirm("¿deseas uzarla?")
        if (confirmar2) {
            confirm("Bienvenido")
        }
    } else {
        var confirmar3 = confirm("¿deseas comprar?")
    }
    if (confirmar3) {
        let saldo = prompt("Ingrese saldo disponible")
        if (saldo >= 1000) {
            confirm("compra exitosa de entrada ")
            confirm("Bienvenido")
        } else {
            confirm("compra fallida de entrada ")
        }
    } else {
        console.log("Hasta luego")
    }
}



console.log("EJERCICIO 8")

let Intento1 = prompt("Ingrese un dígito del 1 al 10 para adivinar el número: ")
let numeroAdivinanza = 3
if (Intento1 == numeroAdivinanza) {
    console.log("Ganaste, haz adivinado el numero.")
} else if (Intento1 > numeroAdivinanza) {
    confirm("El numero ingresado es mayor, vuelve a intentarlo")
    var intento2 = prompt("segundo intento: ")
    if (intento2 == numeroAdivinanza) {
        console.log("Ganaste, haz adivinado el numero.")
    } else if (intento2 > numeroAdivinanza) {
        confirm("El numero ingresado es mayor, vuelve a intentarlo")
        var intento3 = prompt("último intento")
        if (intento3 == numeroAdivinanza) {
            console.log("Ganaste, haz adivinado el numero.")
        }else {
            console.log("no adivinaste adivinanza")
        }
    } else if (intento2 < numeroAdivinanza) {
        confirm("El numero ingresado es menor, vuelve a intentarlo")
        var intento3 = prompt("último intento")
        if (intento3 == numeroAdivinanza) {
            console.log("Ganaste, haz adivinado el numero.")
        } else {
            console.log("no adivinaste adivinanza")
        }
    }
} else if (Intento1 < numeroAdivinanza) {
    confirm("El numero ingresado es menor, vuelve a intentarlo")
    var intento2 = prompt("segundo intento: ")
    if (intento2 == numeroAdivinanza) {
        console.log("Ganaste, haz adivinado el numero.")
    } else if (intento2 > numeroAdivinanza) {
        confirm("El numero ingresado es mayor, vuelve a intentarlo")
        var intento3 = prompt("último intento")
        if (intento3 == numeroAdivinanza) {
            console.log("Ganaste, haz adivinado el numero.")
        } else {
            console.log("no adivinaste adivinanza")
        }
    } else if (intento2 < numeroAdivinanza) {
        confirm("El numero ingresado es menor, vuelve a intentarlo")
        var intento3 = prompt("último intento")
        if (intento3 == numeroAdivinanza) {
            console.log("Ganaste, haz adivinado el numero.")
        } else {
            console.log("no adivinaste adivinanza")
        }
} 
}

console.log("EJERCICIO 9")

let edad = prompt("Que edad tienes?")
 
 switch (true) {
     case (edad >= 0 && edad <= 12):
         console.log("eres un infante")
         break;
     case (edad >= 13 && edad <= 18):
         console.log("eres un adolescente")
         break;
     case (edad >= 19 && edad <= 45):
         console.log("eres mayor joven")
         break;
     case (edad >= 45 && edad <= 100):
         console.log("eres un anciano")
         break;
     default:
         confirm("¿en realidad tiene esa edad?")
         if (confirm) {
            confirm("no eres mortal")
         }
         break;
 }

console.log("EJERCICIO 10")

confirm("Bienvenido Jugador 1")
let jugador1 = {
    
    chimbupapas : prompt("Jugador 1 piedra, papel o tijera")
}
confirm("Bienvenido Jugador 2")
let jugador2 = {
    chimbupapas : prompt("Jugador 2 piedra, papel o tijera")
}

switch (true) {
    case (jugador1.chimbupapas == "papel" && jugador2.chimbupapas == "piedra"):
        confirm("jugador 1 ganador")
        break;
    case (jugador1.chimbupapas == "piedra" && jugador2.chimbupapas == "tijera"):
        confirm("jugador 1 ganador")
        break;
    case (jugador1.chimbupapas == "tijera" && jugador2.chimbupapas == "papel"):
        confirm("jugador 1 ganador")
        break;
    case (jugador2.chimbupapas == "papel" && jugador1.chimbupapas == "piedra"):
        confirm("jugador 2 ganador")
        break;
    case (jugador2.chimbupapas == "piedra" && jugador1.chimbupapas == "tijera"):
        confirm("jugador 2 ganador")
        break;
    case (jugador2.chimbupapas == "tijera" && jugador1.chimbupapas == "papel"):
        confirm("jugador 2 ganador")
        break;    
    case (jugador1.chimbupapas == "papel" && jugador2.chimbupapas == "papel"):
        confirm("jugadores empatados")
        break;    
    case (jugador1.chimbupapas == "piedra" && jugador2.chimbupapas == "piedra"):
        confirm("jugadores empatados")
        break;
    case (jugador1.chimbupapas == "tijera" && jugador2.chimbupapas == "tijera"):
        confirm("jugadores empatados")
        break;
    default:
        console.log("algun jugador hizo trampa")
        break;
}

console.log("EJERCICIO 11")

let color = prompt("Ingresa un color");
switch (true) {
    case(color == "blanco" || color == "negro" ):
        confirm("falta de color")
    break;

    case(color == "verde"):
        confirm("El color de la naturaleza")
    break;
    
    case(color == "azul"):
        confirm("El color del agua")
    break;

    case(color == "amarillo"):
        confirm("El color del sol")
    break;

    case(color == "rojo"):
        confirm("El color del fuego")
    break;

    case(color == "marrón"):
        confirm("El color de la tierra")
    break;

    default:
        confirm("Excelente elección, no lo teníamos pensado.")
        break;
}

console.log("EJERCICIO 12")


let numero1 = prompt("ingrese un numero")
let numero2 = prompt("ingrese un numero")
let operacion = prompt("ingrese tipo de operacion: suma, resta, multiplicar, dividir")

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
var suma = numero1 + numero2
let resta = numero1 - numero2 
let multi = numero1 * numero2 
let dividir = numero1 / numero2


if (operacion == "suma") {
    confirm("el resultado de la suma es: " + suma)
} else if (operacion == "resta") {
    confirm("el resultado de la resta es: " + resta)
} else if(operacion == "multiplicar"){
    confirm("el resultado de la multiplicación es: " + multi)
}else if (operacion == "dividir"){
    confirm("el resultado de la division es: " + dividir)
}

if (operacion = "dividir" && numero1 == 0 || numero2 ==0) {
    
    confirm("Error")
}

console.log("EJERCICIO 13")

let nombre = prompt("ingrese su nombre")
let apellidos = prompt("ingrese sus apellidos")
let numeroindentidad = prompt("ingrese su numeroindentidad ")
let fechaNacimiento = prompt("ingrese su fechaNacimiento")
let estatura = prompt("ingrese su estatura")
let RH = prompt("ingrese su RH")
let fechaExpedicion = prompt("ingrese su fechaExpedicion")

confirm(`BIEVENIDO \n Nombre: ${nombre} \n Apellidos: ${apellidos} \n Id: ${numeroindentidad} \n Fecha de nacimiento: ${fechaNacimiento} \n Estatura: ${estatura} \n RH: ${RH} \n Fecha de expedicion: ${fechaExpedicion} \n ¿DATOS CORRECTOS? `)

if (confirm) {

    let dni = {
        nombre,
        apellidos,
        numeroindentidad,
        fechaNacimiento,
        estatura,
        RH,
        fechaExpedicion
    }
    console.table(dni)
    
}
    alert(`vuelva a intentarlo en 1 mes`)


