//----Estructuras Repetitivas -----/

//While - Mientras

let numero = 0;
let cajaNumero = [];

while (numero <= 100){
    cajaNumero.push(numero);
    numero =numero +10;
    //numero++;
};

//console.log(cajaNumero);

document.getElementById("demo10.0").innerHTML=cajaNumero;

//----DO WHILE -----hAGA mIENTRAS

//let contador =0;
//do{
  //  document.write("Hola");
  //  contador = contador +1;
//}while (contador <3);


// ------FOR -Para----------
//Es como un ciclo mientras con el contador ya incluido

/*let arregloPara = [];
for (let i =0; i< 20; i++){
    if (i ==17){
        break;
    }

    arregloPara.push(i);

};*/

let arregloPara = [];
for (let i =0; i< 20; i++){
    if (i ==17){
        continue;
    }

    arregloPara.push(i);

};
//Permite omitir un valor no deseado, en este caso omite el 17, lo salta y sigue con el siguiente valor de la cadena.

document.getElementById("demo10.1").innerHTML=arregloPara;

//FOR IN vs FOR OF

//FOR IN = Permite traer atributo y valor del objeto

let animales = ["gato", "perro", "elefante", "Dodo"];

let textIn = "";

for (let animal in animales) {
    //textIn = textIn + animales[animal] + "<br>";
    textIn += animal + "<br>";
}

document.getElementById("demo10.2").innerHTML=textIn;

//FOR OF=Permite traer valor del objeto

let textOf = "";

for (let animal of animales) {
    textOf = textOf + animal + "<br>";
    //textIn += animal + "<br>";
}

document.getElementById("demo10.3").innerHTML=textOf;

//Recorrer Objeto->Propiedad-Valor

const usuraioCliente = {
    name: "Federico",
    lastName: "Rueda",
    age: 42
};

let textObj = "";
for (let key in usuraioCliente) {
    
   textObj += usuraioCliente[key] + "<br>"; //Nos imprime clave y valor
    
    //textObj += usuraioCliente+ "<br>"; //Nos solo parentesis con [objeto objeto]
    
    //textObj += key + "<br>"; //Nos imprime solo el nombre de las claves 
    

}

document.getElementById("demo10.4").innerHTML=textObj;

//forEach

let estudiantes = ["Yuli", "Sebastian", "Rafael", "Lina"];
let textEach = "";

estudiantes.forEach(miSalida);

document.getElementById("demo10.5").innerHTML=textEach;

function miSalida(item, index){
    textEach += index + "=" + item + "<br>";
};







