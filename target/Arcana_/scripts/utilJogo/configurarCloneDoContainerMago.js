
function configurarCloneDoContainerMago(container){
	
	container.cloneNode(true);
    visualClone.style.position = 'absolute';
    visualClone.style.top = '-9999px';
    visualClone.style.left = '-9999px';
    visualClone.style.width = container.offsetWidth + 'px';
    visualClone.style.height = container.offsetHeight + 'px';
    visualClone.style.opacity = '1'; 
    visualClone.style.zIndex = '1000';
	
	return container;	
}

export {configurarCloneDoContainerMago}