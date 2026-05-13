// Esto es un comentario
// Esto es otro comentario
/*  Estos es un comentario pero para múltiples lineas */

// Hello world
console.log("Hello World");

// Variables
console.log("##### Variables ####")

let nombre = "Kathy"; // let cambia
const rut = "20202020-k"; // const no cambia
var edad = 32;


console.log(nombre);
nombre = "Felipe";
console.log(nombre);

console.log(rut);
//rut = "1010100101-k";
//console.log(rut);


if(true){
    var x = 10;
    let y = 5;
    const z = 5;
}

console.log(x);
//console.log(y);
//console.log(z);

// Tipos de datos
console.log("##### Tipos de datos ####");

// Tipos de datos primitivos
let variablesString = "Soy un texto";
let variablesNumber = 32;
let variablesBoolean = true; // false
let variablesNull = null; 
let variableUndefined;
console.log(variableUndefined);
console.log(variablesNull);

let nombreUsuario = "Felipe";
let edadUsuario = 46;
let comuna = "Maipu";


// Tipos de datos objeto 
let variableObjeto = {
    nombre: "Felipe",
    edad: 46,
    comuna: "Maipu",
    pedidoSupermercado: []
}
console.log(variableObjeto);

let variablesArray = ["Elemento1", 2, true, "Elemento4", []]
console.log(variablesArray);

console.log(typeof(variablesArray));
console.log(typeof(variableObjeto));
console.log(typeof(variablesString));
console.log(typeof(variablesNumber));
console.log(typeof(variablesBoolean));
console.log(typeof(variablesNull));
console.log(typeof(variableUndefined));
