function avisaMovimentoIlegal(){ 
	const somMovimentoIlegal= new Audio('./sons/illegal2.mp3');
	somMovimentoIlegal.volume = 1;
	somMovimentoIlegal.play();
}

export{avisaMovimentoIlegal};