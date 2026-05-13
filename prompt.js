const prompt = require("prompt-sync")();

let nombre = prompt("¿Cuál es tu nombre? ")
let edad = prompt("¿Cual es tu edad? ")
let comuna = prompt("¿Donde vives? ")
console.log(`Hola mundo, mi nombre es ${nombre}, tengo ${edad} años y soy de ${comuna}.`)