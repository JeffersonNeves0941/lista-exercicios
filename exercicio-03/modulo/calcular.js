function fazerTabuada(tabuada, inicio, fim, progredir) {
    let tabuadaInicio = tabuada
    let multiplicadorIncial = inicio
    let multiplicadorFinal = fim
    let tabuadaFinal = progredir

    let resultado 

    for(contTabuada = tabuadaInicio; contTabuada <= tabuadaFinal; contTabuada++){
        for(contMultiplicador = multiplicadorIncial; contMultiplicador <= multiplicadorFinal; contMultiplicador++){
            resultado = contTabuada * contMultiplicador
            console.log(contTabuada + " X " + contMultiplicador + " = " + resultado)
            
            
        }
    }

    
}

module.exports = {
 fazerTabuada
}

