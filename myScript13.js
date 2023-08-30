//--------- C A L L B A C K -------------//

function Modificar(array, callback){
    //Lo que tengo que hacer
    array.push('Helena');

    //Lo que hago despues de hacer algo...



const names = ["Heriberto", "Valentina", "Marisol"];

Modificar(names, function(array){
    document.getElementById("demo13.0").innerHTML = `He modificado el arreglo y ahora es de ${array}`;
}); //Funcion de expresion 
