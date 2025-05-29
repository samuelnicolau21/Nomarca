let menuContexto = null; // variável no escopo do módulo

function esconderMenu() {
	if(menuContexto){
		menuContexto.style.display = 'none';
	}
    
}
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
	window.acaoPermutar = () => { alert('Permutar selecionado'); esconderMenu(); };
	window.acaoControlar = () => { alert('Controlar selecionado'); esconderMenu(); };
	
	return menuContexto;
	
}

export {criarMenuDeContexto}
export {esconderMenu}	