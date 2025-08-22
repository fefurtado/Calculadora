function calcular() {
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    if (operacao === "soma"){
        resultado = numero1 + numero2;
    }
    else if (operacao === "subtracao"){
        resultado = numero1 - numero2;
    }
    else if (operacao === "multiplicacao"){
        resultado = numero1 * numero2;
    }
    else if (operacao === "divisao"){
        resultado = numero1 / numero2;
    }

    else {
        resultado = "Operação inválida!";
    }

    document.addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            calcular();
        }
    })
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
}