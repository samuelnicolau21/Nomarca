function criaOContadorDeMana(mana){
	const manaDiv = document.createElement('div');
	manaDiv.classList.add('contador-mana');
	manaDiv.textContent = mana;
	return manaDiv;
}
export{criaOContadorDeMana}