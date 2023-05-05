"use strict";
let persona = prompt("ingrese su nombre");
let edad = prompt("ingrese su edad");
let nCarrera = prompt("ingrese el nombre de la carrera que esta siguiendo");
let nivel = prompt("ingrese su nivel");
function saludar(persona, edad, nCarrera, nivel) {
    document.write(`Hola ${persona}<br> Con edad: ${edad}<br> Que estudia ${nCarrera}<br> Que esta en: ${nivel}<br>`);
}
if (persona !== null && edad !== null && nCarrera !== null && nivel !== null) {
    saludar(persona, edad, nCarrera, nivel);
}
else {
    console.log("Error: se ingresó un valor inválido.");
}
console.log("hola clase de de programacion visual");
document.write("hola clase de programacion desde la ventana<br>");
console.log("Alexander Ortiz");
document.write("Alexander Ortiz<br>");
class Cliente {
    constructor(nombre, telefono, id) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
    }
    ;
}
;
var Cliente1 = new Cliente("Juan", "0925456564556", 56);
function saludarAjuan(Cliente1) {
    return ("Hola Cliente: ") + Cliente1.nombre;
}
let saludo = saludarAjuan(Cliente1);
document.write("id Cliente: " + Cliente1.id + "<br>", "Nombre del cliente: " + Cliente1.nombre + "<br>", Cliente1.telefono + "<br>");
document.write(saludo);
console.log(Cliente1);
console.log(persona);
console.log(edad);
console.log(nCarrera);
console.log(nivel);
