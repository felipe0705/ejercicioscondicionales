document.write("EJERCICIO 1" + "<br>")

let numero1 = parseInt(prompt("ingrese numero a multiplicar"))

for (let i = 1; i <= 10; i++) {

    document.write(+numero1 + "*" + i + "=" + (numero1 * i) + "<br>")
}


document.write("EJERCICIO 2" + "<br>")

let acumulador = [];
let entrada;

do {
    entrada = parseInt(prompt("Ingrese un número:"));
    document.write(entrada + "<br>")
} while (entrada !== 0);


document.write("EJERCICIO 3" + "<br>")

let numeroSecreto = 5;
let intentos = 0;

while (true) {  
  let numero2 = parseInt(prompt("Adivina el número (entre 1 y 100):"));
  intentos++;
  if (numero2 < numeroSecreto) {
    alert("El número ingresado es menor. Intenta nuevamente.");
  } else if (numero2 > numeroSecreto) {
    alert("El número ingresado es mayor. Intenta nuevamente.");
  } else {
   
    document.write("¡Felicidades! Adivinaste el número en " +intentos+"intentos.");
    break;
  }
}

document.write("EJERCICIO 4" + "<br>")

let num = parseInt(prompt("ingrese numero"))
var prime = new Boolean(true);
for (i = 2; i < num; i++) {
    if (num % i == 0) {
        prime = false;
        break;
    }
}
if (prime) {
    document.write("numero es primo." + num);
} else {
    document.write("numero no es primo" + num);
}


document.write("EJERCICIO 5" + "<br>")

number = parseInt(prompt("Introduce un numero",0));
document.write("divisores del numero:"+number + "<br>")
for(var i = 1;i <= number;i++){
    if(number % i == 0){
        
        document.write(i+"<br>");
    }
}

document.write("EJERCICIO 6" + "<br>")
document.write("arreglo" + "<br>")
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array1.length; i++) {
  document.write(array1[i]+ "<br>");
}

document.write("EJERCICIO 7" + "<br>")

document.write("Doble de los elemento del arreglo" + "<br>")
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array2.length; i++) {
    
    document.write(array2[i] * 2+ "<br>");
  }

document.write("EJERCICIO 8" + "<br>")

const familia = [
    { nombre: "Juan", edad: 35, ciudad: "Bogotá", ocupacion: "Ingeniero" },
    { nombre: "María", edad: 32, ciudad: "Medellín", ocupacion: "Médico" },
    { nombre: "Pedro", edad: 10, ciudad: "Cali", ocupacion: "Estudiante" },
    { nombre: "Sofía", edad: 8, ciudad: "Barranquilla", ocupacion: "Estudiante" },
    { nombre: "Luis", edad: 60, ciudad: "Cartagena", ocupacion: "Pensionado" }
  ];
for (let i = 0; i < familia.length; i++) {
  const persona = familia[i];
  document.write("Hola, mi nombre es "+persona.nombre+" tengo "+ persona.edad+" años, vivo en" + persona.ciudad+" y soy"+persona.ocupacion+"."+ "<br>"+ "<br>");
}

document.write("EJERCICIO 9" + "<br>")
document.write("NUMEROS IMPARES" + "<br>")
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array3.length; i++) {
    if (array3[i] % 2 !== 0) {
      document.write(array3[i]+ "<br>");
    }
}
document.write("EJERCICIO 10" + "<br>")
let numero3 = 1;
let sumaPares = 0;
let sumaImpares = 0;
while (numero3 !== 0) {
  numero3 = parseInt(prompt("Ingresa un número: "));
  
  if (numero3 % 2 === 0) {
    sumaPares += numero3;
  } else {
    sumaImpares += numero3;
  }
}

document.write("La suma de los números pares es: "+sumaPares + "<br>");
document.write("La suma de los números impares es:"+ sumaImpares);

document.write("EJERCICIO 11" + "<br>")

const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let maximo = array4[0];

for (let i = 1; i < array4.length; i++) {
  if (array4[i] > maximo) {
    maximo = array4[i];
  }
}

document.write("El número más grande en el array es: "+maximo);

document.write("EJERCICIO 12" + "<br>")

const array5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let minimo = array4[0];

for (let i = 1; i < array5.length; i++) {
  if (array5[i] < minimo) {
    maximo = array5[i];
  }
}

document.write("El número más chico en el array es: "+minimo);

document.write("EJERCICIO 13" + "<br>")


let jugador1 = prompt("Ingrese el nombre primer jugador: ");
let jugador2 = prompt("Ingrese el nombre segundo jugador: ");
let puntos_jugador1 = 0;
let puntos_jugador2 = 0;
let empate = true;

while (empate) {
    let mano_jugador1 = prompt(`${jugador1}, ¿piedra, papel o tijeras?: `);
    let mano_jugador2 = prompt(`${jugador2}, ¿piedra, papel o tijeras?: `);    
    if (mano_jugador1 === "piedra") {
        if (mano_jugador2 === "piedra") {
            console.log("Empate");
        } else if (mano_jugador2 === "papel") {
            console.log(`${jugador2} gana el turno`);
            puntos_jugador2 += 1;
            empate = false;
        } else if (mano_jugador2 === "tijeras") {
            console.log(`${jugador1} gana el turno`);
            puntos_jugador1 += 1;
            empate = false;
        }
    } else if (mano_jugador1 === "papel") {
        if (mano_jugador2 === "piedra") {
            console.log(`${jugador1} gana el turno`);
            puntos_jugador1 += 1;
            empate = false;
        } else if (mano_jugador2 === "papel") {
            console.log("Empate");
        } else if (mano_jugador2 === "tijeras") {
            console.log(`${jugador2} gana el turno`);
            puntos_jugador2 += 1;
            empate = false;
        }
    } else if (mano_jugador1 === "tijeras") {
        if (mano_jugador2 === "piedra") {
            console.log(`${jugador2} gana el turno`);
            puntos_jugador2 += 1;
            empate = false;
        } else if (mano_jugador2 === "papel") {
            console.log(`${jugador1} gana el turno`);
            puntos_jugador1 += 1;
            empate = false;
        } else if (mano_jugador2 === "tijeras") {
            console.log("Empate");
        }
    }
}
if (puntos_jugador1 > puntos_jugador2) {
    console.log(`${jugador1} gana el juego`);
} else if (puntos_jugador2 > puntos_jugador1) {
    console.log(`${jugador2} gana el juego`);
} else {
    console.log("El juego terminó en empate");
}


document.write("EJERCICIO 14" + "<br>")
for (let i = 1; i <= 5; i++) {
    let asteriscos = "";

    for (let j = 1; j <= i; j++) {
        asteriscos += "*";
    }

    console.log(asteriscos);
}


document.write("EJERCICIO 15" + "<br>")


for (let i = 5; i >= 1; i--) {
    let asteriscos = "";

    
    for (let j = 1; j <= i; j++) {
        asteriscos += "*";
    }

    console.log(asteriscos);
}

document.write("EJERCICIO 16" + "<br>")

let numeros = [5, 9, 2, 7, 1, 3, 8, 4, 6, 10];

document.write("arreglos en desorden: "+ "<br>"+numeros+ "<br>")
for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] > numeros[j]) {
            let temp = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = temp;
        }
    }
}

document.write("arreglos en orden:"+"<br>")

document.write(numeros);
