const pbtn1 = document.getElementById('mostrar_p1');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

function msg(){
    alert("Los dioses de mi causa me han abandonado :u");
}

btn1.onclick = () => {
    // para mostrar mensaje we msg()
    for (i=1;i<10;i++)
    {
        pbtn1.innerHTML+=i
    }
    console.log("Click! BTN1");
    
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
    

    pbtn1.innerHTML += " 2"
    if (pbtn1.style.backgroundColor == "") {
        pbtn1.style.backgroundColor = "red";
    }
    //-- Si ya tiene color se lo quitamos
    else {
        pbtn1.style.backgroundColor = "";
    }

}
