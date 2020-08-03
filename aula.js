// // console.log("Gaberel");
// let n = 5;
// //console.log(n);
// let nome = "Gabriel", altura = 160, idade = 14;
// //console.log(nome,altura,idade);

// let pessoa = {
//     nome: "Djonata",
//     altura: 160,
//     idade: 27
// };

// //console.log(pessoa);

// let familia = [true,50,"adjawoid",70];

// //console.log(familia[2], familia.length);





// function calcular(num1, num2) {
//     return num1+num2;
// }

// console.log(calcular(2, 5));
// console.log(calcular(17, 68));

// let pontos = 90;
// let tipo = pontos >= 100 ? "premium" : "comum";
// console.log(tipo);

// console.log(100 > 5 && 5 < 100);

// let valor1 = true;


// console.log(!valor1);

// let a = "vermelho"
// let b = "azul"

// let c = a;

// console.log(a = b);
// console.log(b = c);

// let horas = 10;

// if(horas > 6 && horas < 12 ) {
//     console.log("Bom Dia");
// } 
// else if(horas > 12 && horas < 18) {
//     console.log("Boa Tarde")
// }
// else {
//     console.log("Boa Noite")
// }

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
