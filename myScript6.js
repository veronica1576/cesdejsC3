//- - - - - - -  F U N C I O N E S - - - - - - - - - -//

//---------Primera Forma: Funciones por declaración-------

let numero1 = "Pedro";

function HacerSuma(numero1, numero2){
    let suma = numero1 + numero2;

    return suma;
};

document.getElementById("demo6.0").innerHTML=HacerSuma(7,3);

document.getElementById("demo6.1").innerHTML=numero1;

//------------Segunda Forma: Funciones por expresion-------

let HacerResta = function(numero1, numero2){
    let resta = numero1 - numero2;

    return resta;
};

document.getElementById("demo6.2").innerHTML=HacerResta(9, 3);

document.getElementById("demo6.3").innerHTML=HacerResta(-9, -233);


//Formas de nombrar metodos, funciones, variables ....
//1. PascalCase
//2. camelCase
//3. keba-case 
//4. snake_case

//------Tercera Forma: Funcion flecha tambien es por expresion (Arow function)---------

HacerMultiplicacion = (numero1, numero2) => {
    let multiplicar= numero1 * numero2;

    return multiplicar;
}

//los parametros son las variables declaradas, los argumentos son los valores que se le dan a dichos parametros dentro de las funciones. 
 

document.getElementById("demo6.4").innerHTML=HacerMultiplicacion(-9,-233);


//Funciones Anonimas:

//function (){

//};

//()=>{

//};




