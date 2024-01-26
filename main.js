/* Asi se comenta un código en 
multiples lineas*/
// Y asi se comenta un código en una linea.

// Declaración de variables
var nombre
var apellido

// Almacenar valores con el operador de asignación =
var nombre = 'Juan'
var apellido = 'Perez'

// Asigna el valor de una variable a otra variable
var primerNombre = 'Juan'
var primerApellido = 'Perez'

// Inicializa variables con el operador de asignación =
var primerNombre = 'Juan'
var primerApellido = 'Perez'
var segundoNombre = primerNombre

// Declaración de variables en cadena
var primerNombre = 'Juan',
    primerApellido = 'Perez',
    segundoNombre = 'Pedro',
    segundoApellido = 'Martinez'

var nombreCompleto = primerNombre + ' ' + primerApellido;
console.log(nombreCompleto);

// Compresión de variables no inicializadas
var a = 10;
var b = 20;
var c = "I am a";
var d // Sin valor, su valor es undefined
console.log(a + b + d); // No es un error, pero el resultado es NaN

// Compresión de sensibilidad de mayúsculas y minúsculas en variables
var apellido = 'Perez';
var Apellido = 'Rodriguez';
console.log(apellido);
console.log(Apellido);
/* No es una buena practica de programación, pero es posible.
Una buena practica es escribir las variable en estilo camelCase */
var primerNombre = 'Juan';
var primerApellido = 'Perez';

// Diferencias entre declarar una variable con var o let
var primerNombre = 'Juan';
var primerNombre = 'Pedro';
console.log(primerNombre); // Pedro

//let primerNombre = 'Diego'; 
/* Declaración de variable con let nos da error porque la variable ya esta declarada,
en ejemplos anteriores declaramos variables del mismo nombre con la palabra var y no tuvimos errores,
con la palabra clave let eso no se puede hacer y es una buena practica trabajar de este modo para evitar repeticiones en nuestro código */

// Declaración de constantes
const PI = 3.1416;
console.log(PI);
/* Las constantes son variables que no pueden cambiar su valor,
si intentamos cambiar su valor nos dará un error */

// Suma de números
let num1 = 10;
let num2 = 20;
let resultado = num1 + num2;
console.log(resultado);

// Resta de números
let num3 = 40;
let num4 = 20;
let resultado2 = num3 - num4;
console.log(resultado2);

// Multiplicación de números
let resultadoMultiplicacion = num1 * num2;
console.log(resultadoMultiplicacion);

// Division de números
let resultadoDivision = num3 / num4;
console.log(resultadoDivision);

// Incremento de números
let num5 = 10;
num5++;
console.log(num5);

// Decremento de números
let num6 = 20;
num6--;
console.log(num6);

// Crear números decimales o flotantes
let miDecimal = 5.7;
console.log(miDecimal);

// Multiplicación de números decimales
let num7 = 5.6;
let num8 = 0.5;
let resultadoMultiplicacionDecimal = num7 * num8;
console.log(resultadoMultiplicacionDecimal);

// Division de números decimales
let resultadoDivisionDecimal = num7 / num8;
console.log(resultadoDivisionDecimal);


