
const process = require ("process");  
const funcionesDeTareas = require("./funcionesDeTareas")

let accion = process.argv[2] && process.argv[2].toLowerCase();

switch(accion){
    case "listar": 
        let listaDeTareas  = funcionesDeTareas.leerJson()
        for (let index= 0; index < listaDeTareas.length; index++){
            console.log(listaDeTareas[index]);
            console.log("----------------------------------")
        }
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción .")
        console.log("----------------------------------")
        break;
/*
    case "agregar":
        let titulo = process.argv[3]
        let estado = process.argv[4]
        funcionesDeTareas.agregarTarea(titulo,estado)
        break

    default: 
        console.log("No entiendo qué quieres hacer .")
        console.log("----------------------------------")
*/
}
