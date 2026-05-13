const prompt = require("prompt-sync")();

/*let edad = parseInt(prompt("¿Cuál es tu edad?"));

if(edad >= 18 && edad <= 100){
    console.log("Es adulto")
} else if(edad >= 12 && edad <= 17){
    console.log("Es adolescente")
}else if(edad>0 && edad <= 11){
    console.log("Es un niño")
} else {
    console.log("Agrega una edad valida")
} */

/* while(true){
    let edad = parseInt(prompt("¿Cuál es tu edad?"));

    if(edad >= 18 && edad <= 100){
        console.log("Es adulto")
        break
    } else if(edad >= 12 && edad <= 17){
        console.log("Es adolescente")
        break
    }else if(edad>0 && edad <= 11){
        console.log("Es un niño")
        break
    } else {
        console.log("Esa no es una edad valida, ingresa otro valor")
    }
} */


/* console.log("Bucle While")   
let i = 1;
while(i <= 10){
    console.log("Esto se ejecutará 10 veces")
    i++
}

console.log("Bucle For")
for(let i=1; i<= 10; i++){
    if(i % 2 == 0){
        console.log("Hey! este es un número par")
    } else {
        console.log(i)
    }
} */

/* let frutas = ["manzana", "peras", "uvas", "sandia"];

console.log(frutas.indexOf("sandia"))

console.log(frutas[3])
console.log(frutas[2])

for(let elemento of frutas){
    console.log(elemento)
}

for(let indice in frutas){
    console.log(indice)

} */

while(true){  
rol =prompt("¿Cuál es tu rol?")

if(rol == "admin"){
    console.log("Tiene acceso total")
    break
}else if(rol == "editor"){
    console.log("Puede editar")
    break
}else if(rol == "usuario"){
    console.log("Puede ver")
    break
} else {
    console.log("Rol invalido")
}
}

let condicion = true
while(condicion){
    rol = prompt("¿Cuál es tu rol? ")
    switch(rol){
        case "admin":
            console.log("Tiene acceso total");
            condicion = false;
            break;
        case "editor":
            console.log("Puede editar");
            break;
        case "usuario":
            console.log("Puede ver");
            break;
        default:
            console.log("Usuario invalido")    
    }
}


    rol = prompt("¿Cuál es tu rol? ")
    switch(rol){
        case "admin":
            console.log("Tiene acceso total");
            break
        case "editor":
            console.log("Puede editar");
            break
        case "usuario":
            console.log("Puede ver");
            break
        default:
            console.log("Usuario invalido")    
    }
















