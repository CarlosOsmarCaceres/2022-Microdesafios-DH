const fs = require("fs");


let funcionesDeTareas = {
    archivo: "./tareas.json", //refactirizar con una propiedad
    leerJson: function (){
        let tareasJson = fs.readFileSync(this.archivo,"utf-8");
        let tareasParse = JSON.parse(tareasJson);
        return tareasParse
    },
    agregarTarea: function(titulo,estado){
        let nuevaTarea = {
            titulo: titulo,
            estado: estado,
        }

        let tareasAnteriores = this.leerJson()  //Aqui se guarda el array que tiene leerJson

        tareasAnteriores.push(nuevaTarea)       //llama a tareasAnteriores y aplica el metodo .push en nueva Tarea

        this.escribirJson(tareasAnteriores)

    },
    escribirJson: function(data){
        let nuevoJson = JSON.stringify(data) 
        fs.writeFileSync(this.archivo, nuevoJson,"utf-8")    //fs.writeFileSync = se utiliza para escribir en este caso dentro de un json
                                                                //utiliza 3 parametros(la ruta del archivo deonde quiere escribir,que es lo que tiene que escribir en ese archivo,"utf-8")
        
    },
    deshacer:function(){
        let tareas = this.leerJson()
        tareas.pop()
        this.escribirJson(tareas)
    },
    filtrarPorEstado:function (estado) {
        let tareas = this.leerJson()
        let tareasFiltradasPorEstado = tareas.filter((tarea) => tarea.estado == estado)
        return tareasFiltradasPorEstado
    }

}

module.exports = funcionesDeTareas

