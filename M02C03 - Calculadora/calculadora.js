const sumar=require("./sumar")
const restar=require("./restar")
const multiplicar=require("./multiplicar")
const dividir=require("./dividir")

console.log(sumar(5,5))
console.log(restar(5,5))
console.log(multiplicar(5,5))
console.log(multiplicar(5,0))
console.log(dividir(5,5))
console.log(dividir(5,0))

//a. ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
//matemática, hubiésemos programado todo en un mismo archivo?
//el programa funcionaria igual, pero en el caso de que tengamos un error seria mas dificil identificarlo.
//b. ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?
//para no tener un bloque de codigo tan extenso y asi poder identificar de y corregir los errores por modulos, se hace mas sencillo y prolijo.
//c. ¿Será esta metodología de trabajo una constante de aquí en adelante?
