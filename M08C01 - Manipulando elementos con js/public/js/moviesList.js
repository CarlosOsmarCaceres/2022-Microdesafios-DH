//alert("prueba")

body = document.querySelector("body");
h1 = document.querySelector("h1");


let modoOscuro = prompt("¿Desea modo oscuro?")

if(modoOscuro !== null||undefined){

    body.style.backgroundColor = "#7f7f7f";
    let fondo = document.querySelector("body").classList.add("fondoMoviesList");
}
h1.innerHTML = "LISTADO DE PELÍCULAS";
h1.style.color = "white";
h1.style.backgroundColor = "teal";
h1.style.margin = "20px";
