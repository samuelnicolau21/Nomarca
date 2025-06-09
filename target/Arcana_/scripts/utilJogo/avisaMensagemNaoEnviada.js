function avisaMensagemNaoEnviada(){
	
	const somMovimentoIlegal= new Audio('./sons/illegal.mp3');
	somMovimentoIlegal.volume = 1;
	somMovimentoIlegal.play();

}
export{avisaMensagemNaoEnviada};