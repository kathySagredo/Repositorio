// Operadores matematicos
let a = 10;
let b = 5;

console.log(a + b); // suma
console.log(a - b); // resta
console.log(a * b); // multiplica
console.log(a / b); // dividir
console.log(a % b); // módulo o resto

// Operadores de asignación
let x = 10 + 5;
console.log(x)
x = x + 5; //x += 5;
console.log(x);
y = x + 5;

// Operadores de comparación
console.log(a > b); // mayor
console.log(a < b); // menor
console.log(a >= b); // mayor o igual
console.log(a <= b); // menor o igual
console.log(a == b); // Igual
console.log(a != b); // Distinto
console.log("Validación de edad")
let edad = 16;
console.log(edad >= 18)

// Operadores lógicos -> tablas de la verdad
console.log("Operadores lógicos AND")
console.log(true && true); 
console.log(a == 10 && b == 5); // a es igual a 10 Y b es igual a 5
console.log(true && false); 
console.log( b == 5 && a == 3); // b es igual a 5 Y a es igual a 3
console.log(false && false);
console.log(a == 3 && b > 13); // a es igual a 3 Y b es mayor a 13

console.log("Operadores lógicos OR");
console.log(true || true );
console.log(a == 10 || b == 5); // a  es igual a 10 O b es igual a 5
console.log(true || false);
console.log(a == 10 || b > 13); // O
console.log(false || false);
console.log(a > 20 || b > 13); // O

console.log("Operadores lógicos negación");
console.log(!true);
let tieneLicencia = false;
let edadPersona = 29
console.log(edadPersona >= 18 || tieneLicencia);


// Estrictamente igual
let numero1 = 4
let numero2 = "4"
console.log(numero1 == numero2); 
console.log(numero1 === numero2);

// Operadores de incremento y decremento
let numero = 5;
numero++ // numero = numero + 1 | numero+=1
numero-- 




