//Ejercicio de swith case

let day;

switch (new Date().getDay()){

    case 0:
        day = "Sabado"
        break;
    case 1:
        day = "Lunes"
        break;
    case 2:
        day = "Martes"
        break;
    case 3:
        day = "Miércoles"
        break;
    case 4:
        day = "Jueves"
        break;
    case 5:
        day = "Viernes"
        break;
    case 6:
        day = "Domingo"
        break;

    default:
        break;
}

document.getElementById("demo9.0").innerHTML="Hoy es "+ day;