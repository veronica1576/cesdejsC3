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

let arregloPara = [];
for (let i =0; i< 20; i++){
    if (i ==17){
        break;
    }

    arregloPara.push(i);

};

document.getElementById("demo10.1").innerHTML=arregloPara;