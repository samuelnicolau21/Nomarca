function mostrarMenuDeContexto(e,idCelula,menuContexto){
    e.preventDefault();
    menuContexto.style.top = `${e.pageY}px`;
    menuContexto.style.left = `${e.pageX}px`;
    menuContexto.style.display = 'block';
    menuContexto.dataset.celulaId = idCelula;
}
export{mostrarMenuDeContexto};