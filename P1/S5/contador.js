const parrafo = document.getElementById("display");
const btn = document.getElementById("boton");

let cont=0;

btn.onclick=()=>{
    cont+= 1 ;
    parrafo.innerHTML+= cont;
}