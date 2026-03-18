const calcularImc = function(altura, peso){
    let valorPeso = Number(peso)
    let valorAltura = Number(altura)
    

    let imc = valorPeso / (valorAltura ** 2)

    
    console.log(imc.toFixed(2))

    if(imc < 18.5){
        console.log("Abaixo do peso")
    }else if (imc >= 18.5 && imc <= 24.9){
        console.log("Peso ideal")
    }else if (imc >= 24.9 && imc <= 29.9){
        console.log("Acima do peso")
    }else if(imc >= 30.0 && imc <= 34.9){
        console.log("Obesidade grau 1")
    }else if(imc > 35 && imc <= 39.9 ){
        console.log("Obesidade grau 2")
    }else{
        console.log("Obesidade grau 3")

        
    }    
    
}

module.exports = {
    calcularImc
}