import {tornarArrastavel} from './tornarArrastavel.js';
import {criarCaixaDeRegras} from './criarCaixaDeRegras.js';
import {esconderMenu} from './esconderMenu.js';

let menuContexto = null; // variável no escopo do módulo
let caixaRegras = criarCaixaDeRegras();
tornarArrastavel(caixaRegras, caixaRegras.querySelector('.barra-drag'));

function criarMenuDeContexto(menuContexto){
	// Cria o menu de contexto e adiciona ao body
	menuContexto = document.createElement('div');
	menuContexto.classList.add('menu-contexto');
	menuContexto.innerHTML = `
	    <button onclick="acaoPermutar()">Permutar</button>
	    <button onclick="acaoControlar()">Controlar</button>
	    <button onclick="acaoEditarRegra()">Editar regra</button>
	`;
	document.body.appendChild(menuContexto);
	
	document.addEventListener('click', (e)=>{
			if (!menuContexto.contains(e.target)) {
						menuContexto.style.display = 'none';
					}
		});
	document.addEventListener('keydown', (e) => {
		    if (e.key === 'Escape') {
		        menuContexto.style.display = 'none';
		    }
		});
		
	// Funções do menu contexto
	window.acaoPermutar = () => { alert('Permutar ainda vai ser implementado'); esconderMenu(); };
	window.acaoControlar = () => { alert('Controlar ainda vai ser implementado'); esconderMenu(); };
	window.acaoEditarRegra = () => {
	    esconderMenu(menuContexto);
		// Define a posição apenas se ainda não estiver posicionada
		  if (!caixaRegras.style.top) {
		      caixaRegras.style.top = '100px';
		      caixaRegras.style.left = '100px';
		  }
		  caixaRegras.style.display = 'block';
	};
	return menuContexto;
	
}

export {criarMenuDeContexto}