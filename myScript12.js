//---JS Errores ----//

//try = Es el codico que quiero que haga

//catch = captura el error

//finally = Codigo que hace independiente del resultado

//throw = definición personalizada de mi error

function PruebaUno(){
   // const message = "Has fallado";

    try {

        document.getElementById("demo12.0").innerHTML = "Lo logre hacer";

    } catch (error) {

        document.getElementById("demo12.1").innerHTML="Has fallado";

    }

};

PruebaUno();