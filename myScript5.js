//EJERCICIO OBJETOS

var carro = {
    //Atributos o propiedades
    tipo: "Ferrari",
    modelo: "F40",
    color: "Rosso Corsa",

    //Métodos
    nombreCompleto: function(){
        return this.tipo + " " + this.modelo;
    },
    nombreColor: function(){
        return carro.tipo + " - " + this.color;
    }
};


document.getElementById("demo5.0").innerHTML="El carro es un " + carro.tipo;

document.getElementById("demo5.1").innerHTML="Es de color " + carro["color"];

document.getElementById("demo5.2").innerHTML = carro.nombreCompleto();

document.getElementById("demo5.3").innerHTML = carro.nombreColor();