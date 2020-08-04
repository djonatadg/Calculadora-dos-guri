let num1
let num2 
let operador
let resultado1;


function definindoOValorDoNum1(num) {
 num1 = parseInt (num.value);
 
}

function definindoOValorDoNum2(num) {
 num2 = parseInt (num.value);
}

function definindoOValorDoOperador(operador1) {
    operador = operador1.value;
}

function calcular() {

        if(operador === "+") {
        resultado1 = num1 + num2;
       if(isNaN(resultado1)) { alert("Insira um numero")}
        else { document.getElementById("resultado").innerHTML = resultado1 } 
    } else if(operador === "-") {
        resultado1 = num1 - num2;
       if(isNaN(resultado1)) { alert("Insira um numero")}
       else { document.getElementById("resultado").innerHTML = resultado1 }
    } else if(operador === "*") {
        resultado1 = num1 * num2;
        if(isNaN(resultado1)) { alert("Insira um numero")}
       else { document.getElementById("resultado").innerHTML = resultado1 }
    } else if(operador === "/") {
        resultado1 = num1 / num2;
        if(isNaN(resultado1)) { alert("Insira um numero")}
        else {document.getElementById("resultado").innerHTML = resultado1 }
    } 
    else {
        alert("Operador Invalido <br> Bocaberta") 
    }     
}
