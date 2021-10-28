/* 
	Operadores de atribuição
*/

// comparação (=) //

var a = 2
var b = 2

console.log(a + b)

// comparação 

var a = 1;

if (a === 1){
	console.log("a é igual a 1")
} else {
	console.log("a não é igual a 1.")
}


// comparação 

var a = 1;

if (a != 1){
	console.log("a é igual a 1")
} else {
	console.log("a não é igual a 1.")
}

// comparação 

var a = 1;
var b = '1';

if (b != 1){
	console.log("a é igual a 1")
} else {
	console.log("b não é igual a 1.")
	console.log(" b é uma string")
}

// comparação 

var a = 1;
var b = 2;

if (a >= b){
	console.log("a é maior que b")
} else {
	console.log("b é maior que a")
}

if (a <= b){
	console.log("a é maior que b")
} else {
	console.log("b é maior que a")
}

// lógico - variáveis e tipos

/*
&& --> 'e'
|| --> 'ou'
! --> 'não' 
*/

/*
- crie uma função que recebe dois números como parâmetros. 
- verifique se os números são iguais.
- retorne a seguinte string: "Os números n1 e n2 não são iguais. A soma é uma sum Maior/menor que 10 e Maior/menor que 20."
*/

var n1 = 5
var n2 = 35
sum = (n1 + n2)

if(sum >= 10 && sum <= 20) {
	var ma = 'maior que 10'
	var mn = 'menor que 20'
} else if (sum >= 10 || sum >= 20) {
	var ma = 'maior que 10'
	var mn= 'maior que 20'

} else if (sum <= 10){
	var ma = 'menor que 10 e 20'
	var mn = 'menor que 10 e 20'
} 

console.log("Os números "+n1+" e "+n2+" não são iguais. A soma é "+sum+", "+ma+" e "+mn+".")