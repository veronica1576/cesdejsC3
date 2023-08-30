//------------------ M A P ------------------//

//CREAR UN MAP CON NEW

const celulares = new Map([
    ["Sumsang", 500],
    ["PineApple", 300],
    ["Hawai", 250]
]);
 //MÉTODO GET CON MAP, en este caso nos trae el valor de la clave Hawai
document.getElementById("demo11.0").innerHTML = celulares.get("Hawai");


//Crear un Mp con set()

const taladros = new Map();

taladros.set("Bauker", 450);
taladros.set("Uberman", 150);
taladros.set("Delwalt", 350);
taladros.set("Hilti", 650);

document.getElementById("demo11.1").innerHTML=taladros.get("Hilti");

document.getElementById("demo11.2").innerHTML=taladros.delete("Delwalt");

document.getElementById("demo11.3").innerHTML=taladros.size;

document.getElementById("demo11.4").innerHTML=taladros.get("Delwalt");

for (let [key, value] of taladros){
    console.log(key + "=" + value);

};












