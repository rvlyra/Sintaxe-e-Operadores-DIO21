let n1 = 5
let n2 = 28

function compNum(n1, n2){
	let fraseUm = mkFrase1(n1, n2);
	let fraseDois = mkFrase2(n1, n2);
}

function mkFrase1(n1, n2){

	let iguais = ''
	if(n1 !== n2) {
		iguais = 'não';
	} 
	 return "Os números ${n1} e ${n2} ${iguais} são iguais."
	// console.log()

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
	return "Sua ${soma}, que é ${comp10} que 10 e ${comp20} que 20."
	// console.log("Sua ${soma}, que é ${comp10} que 10 e ${comp20} que 20.")

}



