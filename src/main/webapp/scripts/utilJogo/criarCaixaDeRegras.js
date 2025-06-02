import {transformarNumerosEditaveis} from './transformarNumerosEditaveis.js';
import {enviarEdicao} from './enviarEdicao.js';
import {criaOHtmlDaCaixaDeRegras} from './criaOHtmlDaCaixaDeRegras.js';
import {atualizarRegrasVisiveis} from './atualizarRegrasVisiveis.js';


function criarCaixaDeRegras(){
		
	let caixaRegras = criaOHtmlDaCaixaDeRegras();

	const toggle = caixaRegras.querySelector('#toggleRegras');
	const regras1 = caixaRegras.querySelectorAll('.regra1');
	const regras2 = caixaRegras.querySelectorAll('.regra2');
	
	toggle.addEventListener('change',  () => atualizarRegrasVisiveis(toggle, regras1, regras2));
	
	atualizarRegrasVisiveis(toggle, regras1, regras2);

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

document.addEventListener('keydown', (e) => enviarEdicao(e));

export { criarCaixaDeRegras };