function dragElement(dress){
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    dress.onpointerdown = pointerDrag;

    function pointerDrag(e){
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY; 
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e){
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        dress.style.top = (dress.offsetTop - pos2) + 'px';
        dress.style.left = (dress.offsetLeft - pos1) + 'px';
    }

    function stopElementDrag(){
        document.onpointerup = null;
        document.onpointermove = null;
    }
}

dragElement(document.getElementById('blueJeans'));
dragElement(document.getElementById('grayTshirt'));
