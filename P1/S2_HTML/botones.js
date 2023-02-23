console.log("Ejecutnado JS...");

//-- conseguir parrafo
const pbtn1 = document.getElementById('mostrar_p1');
const pbtn2 = document.getElementById('mostrar_p2');

//-- Obtener el párrafo
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

//-- Funcion de retrollamada de la pulsación del párrafo
btn1.onclick = () => {
    console.log("Click! BTN1");
    pbtn1.innerHTML+=" 1"
    if (pbtn1.style.backgroundColor == "") {
        pbtn1.style.backgroundColor = "yellow";
    }
    //-- Si ya tiene color se lo quitamos
    else {
        pbtn1.style.backgroundColor = "";
    }

}
btn2.onclick = () => {
    console.log("Click! BTN2");
    

    const guardo = pbtn2.innerHTML;
    pbtn2.innerHTML += " 2"

    pbtn1.innerHTML += " 2"
    if (pbtn2.style.backgroundColor == "") {
        pbtn2.style.backgroundColor = "red";
    }
    //-- Si ya tiene color se lo quitamos
    else {
        pbtn2.style.backgroundColor = "";
    }
    if (pbtn1.style.backgroundColor == "") {
        pbtn1.style.backgroundColor = "yellow";
    }
    //-- Si ya tiene color se lo quitamos
    else {
        pbtn1.style.backgroundColor = "";
    }

}