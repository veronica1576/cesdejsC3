//Estructuras de desición lógica

/*
Hacer un algoritmo que, dados dos valore snuméricos A y B, escriba un mensaje diciendo si A es mayor, menor o igual a B.
*/

function CompararNumeros(a, b){

    if (a > b) {
        document.getElementById("demo8.0").innerHTML = "A es MAYOR que B";
        
    } else {
        if (a < b){

            document.getElementById("demo8.0").innerHTML = `${a} es MENOR que ${b}`;
        } 
        else {
             if (a == b){
                document.getElementById2("demo8.0").innerHTML = "A es IGUAL que B";
            } 
            
            else {
                document.getElementById("demo8.0").innerHTML= "Error en la validación, ingrese números enteros.";

        }
        }
    }
}
    

