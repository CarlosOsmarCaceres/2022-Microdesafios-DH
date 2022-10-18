
const express = require ("express");     // requiero libreria express
const app = express() // ejecucion del páquete expres, devuelve umuchas propiedades o metodos
//Guardo en app las propiedades o metodos de la ejecicion express
const path = require("path") // path permite trabajar con rutas

//const PORT = 3030

//app.use(express.static("img")) //aplica milwares a nivel aplicacion
//app.use(express.static("img"));
app.use(express.static('./public'));

/* Routing*/
//res.send("HOMEPAGE")
app.get ("/", function(req, res){ // primer parametro es solicitud y segundo parametro respuesta
    res.sendFile(path.join(__dirname, "/views/index.html")) //dirname trae la ruta completa 
    //sendFile recibe el parametro y busca el archivo
})  
app.get ("/babbage", function(req, res){
    res.sendFile(path.join(__dirname, "/views/babbage.html")) 
})  
app.get ("/berners-lee", function(req, res){
    res.sendFile(path.join(__dirname, "/views/berners-lee.html")) 
})  
app.get ("/clarke", function(req, res){
    res.sendFile(path.join(__dirname, "/views/clarke.html")) 
})  
app.get ("/hamilton", function(req, res){
    res.sendFile(path.join(__dirname, "/views/hamilton.html")) 
})  
app.get ("/hopper", function(req, res){
    res.sendFile(path.join(__dirname, "/views/hopper.html")) 
})  
app.get ("/lovelace", function(req, res){
    res.sendFile(path.join(__dirname, "/views/lovelace.html")) 
})  
app.get ("/turing", function(req, res){
    res.sendFile(path.join(__dirname, "/views/turing.html")) 
})  


app.listen(3030, function(){
    console.log("Servidor escuchando el puerto ${PORT}, http://localhost:3030")
})

                        