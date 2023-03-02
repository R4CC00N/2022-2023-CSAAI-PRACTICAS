const parrafo = document.getElementById("display");
const btn1 = document.getElementById("boton1");
const btn2 = document.getElementById("boton2");

let cont=0;

btn1.onclick=()=>{
    cont+= 1 ;
    parrafo.innerHTML = cont; // Actualiza el parrafo
}
btn2.onclick=()=>{
    // escribe el numero seguido y no elimina el anterior
    cont+= 1 ;
    parrafo.innerHTML += " " + cont;
}