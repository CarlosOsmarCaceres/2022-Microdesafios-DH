const fs = require("fs"); //Requiere tareas.json


let funcionesDeTareas = {
    leerJson: function (){
        let tareasJson = fs.readFileSync("./tareas.json","utf-8"); //Lee el archivo json y lo utiliza
        let tareasParse = JSON.parse(tareasJson);
        return tareasParse
    }
    /*
    agregarTarea: function(titulo,estado){
        let nuevaTarea = {
            titulo: titulo,
            estado: estado,
        }
        let tareasAnteriores = this.leerJson()  //Aqui se guarda el array que tiene leerJson
        tareasAnteriores.push(nuevaTarea)       //llama a tareasAnteriores y aplica el metodo .push en nueva Tarea
        let nuevoJson = JSON.stringify(tareasAnteriores) 
        fs.writeFileSync("./tareas.json", nuevoJson,"utf-8")    //fs.writeFileSync = se utiliza para escribir en este caso dentro de un json
                                                                //utiliza 3 parametros(la ruta del archivo deonde quiere escribir,que es lo que tiene que escribir en ese archivo,"utf-8")
    
    }
    */
}

module.exports = funcionesDeTareas

