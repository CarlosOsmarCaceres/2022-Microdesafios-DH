//alert("holaaa")
let main = document.querySelector("main")
let h2 = document.querySelector("h2")/* .style.textTransform = "upperCase"; */
let a = document.querySelector("h2 a")
let p = document.querySelectorAll("p")

let ingresarNombre = prompt("Ingrese su nombre")
console.log(ingresarNombre);

if(ingresarNombre==null||undefined){
    h2.innerText += " Invitado";
} else {
    h2.innerText += " " + ingresarNombre;
}

h2.style.textTransform = "uppercase";
a.style.color = "#E51B3E";

let fondoPantalla = confirm("¿Desea colocar un fondo de pantalla?");

if(fondoPantalla!==false){
    let fondo = document.querySelector("body").classList.add("fondo");
}

//main.style.display = "none";

