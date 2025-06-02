function criaOHtmlDaCaixaDeRegras(){
	let caixaRegras = document.createElement('div');
	caixaRegras.classList.add('caixa-editar-regra');

	caixaRegras.innerHTML = `
		<center>
			<div class="barra-drag">Regras</div>
			<div class="switch-container">
				<span>1</span>
				<label class="switch">
					<input type="checkbox" id="toggleRegras">
					<span class="slider"></span>  
				</label>
				<span>2</span>
			</div>
		</center>

		<div id="regras-container">
			<p class="regra1" id="acao1">1.1-O jogador 1 tem (1) ação por turno.[5]</p>
			<p class="regra2" id="acao2">1.2-O jogador 2 tem (1) ação por turno.[5]</p>
			<p class="regra1" id="mana1">2.1-No fim de cada turno do jogador 1 </p>
			<p class="regra1" id="mana1b">todas as peças do jogador 1 que não foram usadas no turno ganham (1).[3]</p>
			<p class="regra2" id="mana2">2.2-No fim de cada turno do jogador 2 </p>
			<p class="regra2" id="mana2b">todas as peças do jogador 2 que não foram usadas no turno ganham (1).[3]</p>
			<p class="regra1" id="locomocao1">3.1-Todas as peças do jogador 1 se movem até (1) casa de distância.[2]</p>
			<p class="regra2" id="locomocao2">3.2-Todas as peças do jogador 2 se movem até (1) casa de distância.[2]</p>
			<p class="regra1" id="locomocaoBloco1">4.1-O jogador 1 pode mover uma moeda-bloco até (0) casas de distância.{1}[1]</p>
			<p class="regra2" id="locomocaoBloco2">4.2-O jogador 2 pode mover uma moeda-bloco até (0) casas de distância.{1}[1]</p>
			<p class="regra1" id="controle1">5.1-O jogador 1 pode ganhar o controle da peça inimiga por (0) turnos se a peça estiver</p>
			<p class="regra1" id="controle1b">dentro do alcance da moeda da mente do jogador 1.[3]</p>
			<p class="regra2" id="controle2">5.2-O jogador 2 pode ganhar o controle da peça inimiga por (0) turnos se a peça estiver</p>
			<p class="regra2" id="controle2b">dentro do alcance da moeda da mente do jogador 2.[3]</p>		
			<p class="regra1" id="alcance1">6.1-O alcance da moeda da mente do jogador 1 é (1) casa.[3]</p>
			<p class="regra2" id="alcance2">6.2-O alcance da moeda da mente do jogador 2 é (1) casa.[3]</p>
			<p class="regra1" id="permutacao1">7.1-O jogador 1 pode permutar a posição de 2 de suas moedas.{2}</p>
			<p class="regra2" id="permutacao2">7.2-O jogador 2 pode permutar a posição de 2 de suas moedas.{2}</p>
			<p class="regra1">8 - O jogador que manter uma de suas peças no centro do tabuleiro por 3 rodadas</p>
			<p class="regra1">seguidas, vence o jogo.</p>
			<p class="regra2">8 - O jogador que manter uma de suas peças no centro do tabuleiro por 3 rodadas</p>
			<p class="regra2">seguidas, vence o jogo.</p>
		</div>
	`;

	document.body.appendChild(caixaRegras);
	return caixaRegras;
}

export {criaOHtmlDaCaixaDeRegras}