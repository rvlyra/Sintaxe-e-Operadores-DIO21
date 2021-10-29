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
Exercício proposto e resolvido em duas formas.

Forma 01 - sem função

- crie uma função que recebe dois números como parâmetros. 
- verifique se os números são iguais.
- retorne a seguinte string: "Os números n1 e n2 não são iguais. A soma é uma sum Maior/menor que 10 e Maior/menor que 20."
*/

// var n1 = 5
// var n2 = 35
// sum = (n1 + n2)



// Forma 02 - com função


function compNum(n1, n2){
	let fraseUm = mkFrase1(n1, n2);
	let fraseDois = mkFrase2(n1, n2);
}

function mkFrase1(n1, n2){

	let iguais = ''
	if(n1 !== n2) {
		iguais = 'não';
	} 
	return 'Os números ${n1} e ${n2} ${iguais} são iguais.'

}

function mkFrase2(n1, n2){
	let soma = n1 + n2
	
	let result10 = 'menor'
	let result20 = 'menor'
	
	let comp10 = soma > 10
	let comp20 =  soma > 20
	
	if(comp10) {
		result10 = 'maior';
	} 
	if(comp20) {
		result20 = 'maior';
	} 
	//return 
	console.log('Sua ${soma}, que é ${comp10} que 10 e ${comp20} que 20.')

}




/*

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



function comparaNum (n1, n2) {
	let nIgual = n1 === n2;
	let soma = n1 + n2;
	
	
	if(nIgual){
		return "são iguais";
	}
		return "não são iguais";
		
	// operadores ternários:

	return nIgual ?  "são iguais" : "não são iguais";

}
*/




