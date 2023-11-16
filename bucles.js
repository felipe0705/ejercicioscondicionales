// // document.write("EJERCICIO 1" + "<br>")

// let numero = parseInt(prompt("ingrese numero a multiplicar"))

// // for (let i = 1; i <= 10; i++) {

// //     document.write(+numero + "*" + i + "=" + (numero * i) + "<br>")
// // }


// // document.write("EJERCICIO 2" + "<br>")

// // let acumulador = [];
// // let entrada;

// // do {
// //     entrada = parseInt(prompt("Ingrese un número:"));
// //     document.write(entrada + "<br>")
// // } while (entrada !== 0);


// // document.write("EJERCICIO 3" + "<br>")

// let numeroSecreto= numero;
// let intentos = 0;

// while (true) {  
//   let numero2 = parseInt(prompt("Adivina el número (entre 1 y 100):"));
//   intentos++;
//   // Comparar el número ingresado con el número secreto
//   if (numero2 < numeroSecreto) {
//     alert("El número ingresado es menor. Intenta nuevamente.");
//   } else if (numero2 > numeroSecreto) {
//     alert("El número ingresado es mayor. Intenta nuevamente.");
//   } else {
//     // El usuario adivinó el número secreto
//     document.write("¡Felicidades! Adivinaste el número en " +intentos+"intentos.");
//     break;
//   }
// }


// document.write("EJERCICIO 4" + "<br>")

// let num = parseInt(prompt("ingrese numero"))
// var prime = new Boolean(true);
// for (i = 2; i < num; i++) {
//     if (num % i == 0) {
//         prime = false;
//         break;
//     }
// }
// if (prime) {
//     document.write("numero es primo." + num);
// } else {
//     document.write("numero no es primo" + num);
// }


// document.write("EJERCICIO 5" + "<br>")

// number = parseInt(prompt("Introduce un numero",0));
// document.write("divisores del numero:"+number + "<br>")
// for(var i = 1;i <= number;i++){
//     if(number % i == 0){
        
//         document.write(i+"<br>");
//     }
// }

document.write("EJERCICIO 6" + "<br>")

