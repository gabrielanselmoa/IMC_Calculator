
const calculate = document.getElementById("calcBtn")
const clear = document.getElementById("clearBtn")


function imc(){

    const nome = document.getElementById("nameField").value
    const height = Number(document.getElementById("heightField").value)
    const weight = Number(document.getElementById("weightField").value)
    const result = document.getElementById("textField")
    
    if(nome !== "" && height !== "" && weight !== ""){

        const IMCvalue = (weight/Math.pow(height, 2)).toFixed(1)
        
        let classificacao = ""
        
        if(IMCvalue > 40){
            classificacao = "Obesidade grau III"
        }
        else if(IMCvalue >= 35 && IMCvalue <= 40 ){
            classificacao = "Obesidade grau II"
        }
        else if(IMCvalue >= 30 && IMCvalue <= 34,9 ){
            classificacao = "Obesidade grau I"
        }
        else if(IMCvalue >= 25 && IMCvalue <= 34,9 ){
            classificacao = "Acima do Peso"
        }
        else if(IMCvalue >= 18,5 && IMCvalue <= 24,9 ){
            classificacao = "Peso Normal"
        }
        else if(IMCvalue >= 17 && IMCvalue <= 18,4){
            classificacao = "Abaixo do Peso`"
        }
        else{
            classificacao = "Muito Abaixo do Peso"
        }
        // END OF THE INNER CONDITIONAl
        result.textContent = `${nome}, seu IMC é ${IMCvalue} e você está com ${classificacao}`;
        
    }else{
        alert('Empty')
        result.textContent = "Fill the Fields"
        // result.textContent = ""
    }
}

function clearFields(){
    document.getElementById("nameField").value = ""
    document.getElementById("heightField").value = ""
    document.getElementById("weightField").value = ""
    result.textContent = ""
}

calculate.addEventListener("click", imc)
clear.addEventListener("click", clearFields)
