function dividir (n1, n2) {
    if(n1 === 0 || n2 === 0){
       return "No se puede dividir por 0"
    }
    return n1 / n2
}
//console.log(dividir(5,0))
module.exports = dividir