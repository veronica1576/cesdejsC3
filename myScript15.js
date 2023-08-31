// HOISTING (Elevación)

/* Elevar es el comportamiento predeterminado de JavaScript de mover declaraciones a la parte superior.

Las variables definidas con let y const se elevar a la parte superior del bloque, pero no se inicializan.

Significado: El bloque de código conoce la variable, pero no se puede usar hasta que se haya declarado.

El uso de una let variable antes de declararla dará como reusltado un archivo ReferenceError.

JavaScript solo levanta declaraciones no inicializaciones.

*/

/*
console.log(nombre);
var nombre = "Esteban";//Le la variable como undefine
console.log(nombre);

console.log(nombre);
let nombre = "Esteban";//Aarchivo de error de referencia, porque la variable solo se puede inicializar si tiene un valor. 

console.log(nombre);
const nombre = "Esteban"; //Da error porque las variables tipo const se deben inicializar arriba del codigo que las va a ejecutar

*/

miNumero = 5;

elemento = document.getElementById("demo15.0");
elemento.innerHTML=miNumero;

var miNumero;


// -------- Hoisting con Functiones --------//
//Función como declaración

saludar("Sergio");

function saludar(name){
    document.getElementById("demo15.1").innerHTML="Hola "+name;
};


//Función como expresión --WARNING--//

saludar("Sergio");

/*
var saludar = funtion (name){
    document.getElementById("demo15.2").innerHTML='Hola '+ name;
};
*/