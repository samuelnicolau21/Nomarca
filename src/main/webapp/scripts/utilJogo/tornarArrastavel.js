function tornarArrastavel(el, handle) {
    let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

    const barra = handle || el;

    barra.onmousedown = arrastar;

    function arrastar(e) {
        e.preventDefault();
        mouseX = e.clientX;
        mouseY = e.clientY;
        document.onmouseup = pararArraste;
        document.onmousemove = moverElemento;
    }

    function moverElemento(e) {
        posX = mouseX - e.clientX;
        posY = mouseY - e.clientY;
        mouseX = e.clientX;
        mouseY = e.clientY;

        el.style.top = (el.offsetTop - posY) + "px";
        el.style.left = (el.offsetLeft - posX) + "px";
        el.style.transform = "none"; // desativa centralização
    }

    function pararArraste() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

export {tornarArrastavel};