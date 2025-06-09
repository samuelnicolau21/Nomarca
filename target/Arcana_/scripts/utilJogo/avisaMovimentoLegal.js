function avisaMovimentoLegal(){
	const somMovimento= new Audio('./sons/move-check.mp3');
	somMovimento.volume = 1;
	somMovimento.play();
}
export{avisaMovimentoLegal}