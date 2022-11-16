//EJERCICIO 1
// let importe= +prompt('Ingrese el precio de la compra: ')
// let descuento= importe / 100 * 12
// let preciofinal= importe - descuento
// if(importe >= 150){
//         alert("Su importe es de " + importe + " soles,por lo tanto se le aplicara un descuento del 12% a continuacion:")
//         alert("El descuento es de "+ descuento.toFixed(2) + " soles y el precio final es de " + preciofinal.toFixed(2) + " soles.")
//     } else {
//         alert("Su importe es de " + importe + " soles.")
//     }

//EJERCICIO 2

// let alumno= prompt("Ingrese su nombre:")
// let notaparcial= +prompt( alumno + " ingresa tu nota parcial:"
// + "                                             Nota= 0 - 20")
// let examfinal= +prompt("Ahora ingrese su nota del examen final:")
// let promPrac= +prompt("Por último ingrese su nota del promedio de prácticas:")

// let promFinal = (notaparcial + promPrac + examfinal + examfinal)/4 ;
// if (promFinal > 10){
//     alert(alumno + " Su promedio final es de " + promFinal+ " por ende usted esta aprobado.");
// } else {
//     alert(alumno + " no has aprobado.");
// }

//EJERCICIO 3

// let trabajador= prompt("Ingrese su nombre: ")
// let sueldo= +prompt("Ingrese su sueldo básico: ")
// let numHijos= +prompt("Ingrese el número de hijos que usted tiene: ")

// let bono= (sueldo/100) * 7
// let sueldoBono= sueldo + bono
// if(numHijos > 0){
//     alert(trabajador + " usted tiene " + numHijos + " hijo(s), por lo cual le corresponde el bono siendo su sueldo final de " +sueldoBono)
// } else{
//     alert(trabajador + " usted no es beneficiario del bono de hijos. Su sueldo final es de "+ sueldo)
// }

//EJERCICIO 4

// let numero= +prompt("Ingrese un número:")

// let porcentaje= (numero/100) * 18

// if(numero>500){
//     alert("El 18% de " + numero + " es " + porcentaje)
// }

//EJERCICIO 5

// let numero= +prompt("Ingrese un número:")
// let f = 1

// for(let i= numero ; i>0 ; i--){
//     f *=i
// }
// alert("El factorial del número " + numero + " es " + f)