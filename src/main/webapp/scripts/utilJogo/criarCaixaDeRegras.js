function criarCaixaDeRegras(){
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
			<p class="regra1">1.1-O jogador 1 tem (1) ação por turno.[5]</p>
			<p class="regra2">1.2-O jogador 2 tem (1) ação por turno.[5]</p>
			<p class="regra1">2.1-No fim de cada turno do jogador 1 </p>
			<p class="regra1">todas as peças do jogador 1 que não foram usadas no turno ganham (1).[3]</p>
			<p class="regra2">2.2-No fim de cada turno do jogador 2 </p>
			<p class="regra2">todas as peças do jogador 2 que não foram usadas no turno ganham (1).[3]</p>
			<p class="regra1">3.1-Todas as peças do jogador 1 se movem até (1) casa de distância.[2]</p>
			<p class="regra2">3.2-Todas as peças do jogador 2 se movem até (1) casa de distância.[2]</p>
			<p class="regra1">4.1-O jogador 1 pode mover uma moeda-bloco até (0) casas de distância.{1}[1]</p>
			<p class="regra2">4.2-O jogador 2 pode mover uma moeda-bloco até (0) casas de distância.{1}[1]</p>
			<p class="regra1">5.1-O jogador 1 pode ganhar o controle da peça inimiga por (0) turnos se a peça estiver</p>
			<p class="regra1">dentro do alcance da moeda da mente do jogador 1.[3]</p>
			<p class="regra2">5.2-O jogador 2 pode ganhar o controle da peça inimiga por (0) turnos se a peça estiver</p>
			<p class="regra2">dentro do alcance da moeda da mente do jogador 2.[3]</p>		
			<p class="regra1">6.1-O alcance da moeda da mente do jogador 1 é (1) casa.[3]</p>
			<p class="regra2">6.2-O alcance da moeda da mente do jogador 2 é (1) casa.[3]</p>
			<p class="regra1">7.1-O jogador 1 pode permutar a posição de 2 de suas moedas.{2}</p>
			<p class="regra2">7.2-O jogador 2 pode permutar a posição de 2 de suas moedas.{2}</p>
			<p class="regra1">8 - O jogador que manter uma de suas peças no centro do tabuleiro por 3 rodadas</p>
			<p class="regra1">seguidas, vence o jogo.</p>
			<p class="regra2">8 - O jogador que manter uma de suas peças no centro do tabuleiro por 3 rodadas</p>
			<p class="regra2">seguidas, vence o jogo.</p>
		</div>
	`;
	document.body.appendChild(caixaRegras);

	const toggle = caixaRegras.querySelector('#toggleRegras');
	const regras1 = caixaRegras.querySelectorAll('.regra1');
	const regras2 = caixaRegras.querySelectorAll('.regra2');

	function atualizarRegrasVisiveis() {
		if (toggle.checked) {
			regras1.forEach(p => p.style.display = 'none');
			regras2.forEach(p => p.style.display = 'block');
		} else {
			regras1.forEach(p => p.style.display = 'block');
			regras2.forEach(p => p.style.display = 'none');
		}
	}
	toggle.addEventListener('change', atualizarRegrasVisiveis);
	atualizarRegrasVisiveis();

	document.addEventListener('click', (e) => {
		if (!caixaRegras.contains(e.target) && !e.target.closest('.menu-contexto')) {
			caixaRegras.style.display = 'none';
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			caixaRegras.style.display = 'none';
		}
	});

	setTimeout(transformarNumerosEditaveis, 10);
	return caixaRegras;
}

function transformarNumerosEditaveis() {
	const container = document.getElementById("regras-container");
	const regex = /\((\d+)\)/g;
	container.querySelectorAll('p').forEach(p => {
		p.innerHTML = p.innerHTML.replace(regex, (_, num) => {
			return `<span class="numero-editavel" contenteditable="true" data-original="${num}">${num}</span>`;
		});
	});
}

const somEdicao = new Audio('sons/editar.mp3');

document.addEventListener('blur', (e) => {
	if (e.target.classList.contains('numero-editavel')) {
		const novoValor = e.target.textContent.trim();
		if (!/^\d+$/.test(novoValor)) {
			e.target.textContent = e.target.dataset.original;
			return;
		}
		e.target.dataset.original = novoValor;
		somEdicao.play();
	}
}, true);

export { criarCaixaDeRegras };
