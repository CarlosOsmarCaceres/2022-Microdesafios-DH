
const process = require ("process");  
const funcionesDeTareas = require("./funcionesDeTareas")

let accion = process.argv[2] && process.argv[2].toLowerCase();

switch(accion){
    case "listar": 
        let listaDeTareas  = funcionesDeTareas.leerJson()
        for (let index= 0; index < listaDeTareas.length; index++){
            console.log("----------------------------------")
            console.log(listaDeTareas[index].titulo);
            console.log("----------------------------------")
        }
        break;

    case "crear":
        let titulo = process.argv[3]
        let estado = process.argv[4]
        funcionesDeTareas.agregarTarea(titulo,estado)
        console.log("----------Agregaste una tarea----------")
        break;
    
    case "filtrar":
        let filtro = process.argv[3]
        let tareasFiltradas = funcionesDeTareas.filtrarPorEstado(filtro)
        tareasFiltradas.forEach((tarea) => {
            console.log(`Tarea: ${tarea.titulo}`)
            console.log(`******************************`)
        })
        break;

    case "deshacer":
        funcionesDeTareas.deshacer()
        console.log("----------Eliminaste una tarea----------")
        break;

    case undefined:
        console.log("----------------------------------")
        console.log("Atención - Tienes que pasar una acción .")
        console.log("----------------------------------")
        break;

    default: 
        console.log("----------------------------------")
        console.log("No entiendo qué quieres hacer .")
        console.log("----------------------------------")
}
