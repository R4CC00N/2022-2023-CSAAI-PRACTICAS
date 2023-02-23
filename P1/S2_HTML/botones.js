console.log("Ejecutnado JS...");

//-- Obtener el párrafo
const btn1 = document.getElementById('bnt1');
const btn2 = document.getElementById('bnt2');

//-- Funcion de retrollamada de la pulsación del párrafo
btn1.onclick = () => {
    console.log("Click!");

    //-- Cambiar el color del fondo...
    //-- Si no tenía color asignado ponemos amarillo
    if (btn1.style.backgroundColor == "") {
        btn1.style.backgroundColor = "yellow";
    }
    //-- Si ya tiene color se lo quitamos
    else {
        btn1.style.backgroundColor = "";
    }

}
btn2.onclick = () => {
    console.log("Click!");

    //-- Cambiar el color del fondo...
    //-- Si no tenía color asignado ponemos amarillo
    if (btn1.style.backgroundColor == "") {
        btn1.style.backgroundColor = "red";
    }
    //-- Si ya tiene color se lo quitamos
    else {
        btn1.style.backgroundColor = "";
    }

}