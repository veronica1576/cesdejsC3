//SCOPE (Ámbito)
/*
El alcance determina la accesibilidad (visibilidad) de las variables

JavaScript has 3 type of scope:
 Block scope
 Function scope
 Global scope
 */

 //Function Scope
 
 function comer() {
   let fruta ='manzana';
    document.getElementById("demo14.0").innerHTML='Comiendo '+fruta;
 };

 function lavar(){
    var fruta='banana';
    document.getElementById("demo14.1").innerHTML='Lavando '+fruta;
 };

 comer();
 lavar();

 var frutaGlobal='piña';

 function picar(){
    var otraFruta='pera';
    document.getElementById("demo14.2").innerHTML= 'Picando '+ frutaGlobal;
 };

 picar();

 //document.getElementById("demo14.3").innerHTML='Picando'+otraFruta;



 //BLOCK SCOPE

 function cultivar(){
    var frutaSembrada = "Papaya";
    if (true){
        var frutaCosechada = "Lulo";
    }
    //Si nombramos la variable dentro de bloque "frutaCosechada" con let o cont, entonces no se pueden llamar por fuera de su bloque. En cambio si la variable de bloque se crea con var entonces si se puede acceder a ella por fuera de su bloque.  

    document.getElementById("demo14.4").innerHTML='Sembrando '+ frutaSembrada;

    document.getElementById("demo14.5").innerHTML='Cultivando '+frutaCosechada;
 };

 cultivar();

 /*Un bloque en JS es todo lo que está encerrado entre {}, if, else, while, for Cambiar el var de frutaCosechada por un let o const, me sacaría error*/


 //COMO HACE JS PARA ENCONTRAR UNA VARIABLE

var frutaTraida='Mangostino';

function almacenar(){
    var frutaGuardada ='Granada';

    function sacarFruta(){
        document.getElementById("demo14.6").innerHTML="Sacando "+ frutaTraida;
    };

    sacarFruta();

    document.getElementById("demo14.7").innerHTML='Guardar'+ frutaGuardada;

};

almacenar();


//OCULTAMIENTO DE VARIABLES (Varible Shadowing)

/*
Cuando una variable está en un scope mas reducido tiene el mismo nombre que otra que esta en un scope superior, siguiendo la cadena de scopes
*/

var miFruta = 'Durazno';

if (true){
    var miFruta ='Coco';
}

function buscarMiFruta(){
    var miFruta='Maracuya';

    function encontrarMifruta(){
        document.getElementById("demo14.8").innerHTML='Encontrando '+ miFruta;
    };

    encontrarMifruta();
    document.getElementById("demo14.9").innerHTML='Buscando' + miFruta;

};

buscarMiFruta();

