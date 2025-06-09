import {criarMenuDeContexto} from './criarMenuDeContexto.js';
import {criaAImagemDaPeca} from './criaAImagemDaPeca.js';
import {criaOContadorDeMana} from './criaOContadorDeMana.js';
import {arrastarDaPeca} from './arrastarDaPeca.js';
import {mostrarMenuDeContexto} from './mostrarMenuDeContexto.js';
import {mostrarAlcanceMovimento, limparAlcance} from './mostrarAlcanceMovimento.js';


let menuContexto=criarMenuDeContexto();

function anexarImagemMagoNaCelula(idCelula, urlImagem, mana) {
    const celula = document.getElementById(idCelula);
    celula.innerHTML = '';

    if (celula) {
        const container = document.createElement('div');
        container.classList.add('container-peca');
		let img = criaAImagemDaPeca(urlImagem);
		let manaDiv= criaOContadorDeMana(mana);
		
        container.appendChild(img);
        container.appendChild(manaDiv);
        celula.appendChild(container);
		
		img.addEventListener('dragstart', function (e) {arrastarDaPeca(e, container, idCelula);});
		img.addEventListener('contextmenu', function (e) {mostrarMenuDeContexto(e,idCelula,menuContexto)});
		img.addEventListener('mouseenter', () => mostrarAlcanceMovimento(idCelula));
		img.addEventListener('mouseleave', () => limparAlcance());
		
    } else {
        console.log(`Célula ${idCelula} não encontrada`);
    }
}

export { anexarImagemMagoNaCelula};
