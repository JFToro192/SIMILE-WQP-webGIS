function openList()
{
    const className = '.'+this.element.classList[0];
    const classItem = '.'+className.split("-")[1] + '-item';
    const element = $(className)
    if (element.hasClass('active')) {
        $(`${classItem}`).slice(0).hide();
        element.removeClass('active');}
    else{
        $(`${classItem}`).slice(0).show();
        element.addClass('active');
    }   
}

function openPanel() {
    const className = '.'+this.element.classList[0];
    const classItem = '.'+className.split("-")[1] + '-panel';
    const elementButton = $(className)
    const elementPanel = $(classItem)
    if (elementPanel.hasClass('active')) {
        elementPanel.hide();
        elementButton.removeClass('active');
        elementPanel.removeClass('active');
    }
    else{
        elementPanel.show();
        elementButton.addClass('active');
        elementPanel.addClass('active');
    }   
}

// Make the DIV element draggable:
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

export {
    openList,
    openPanel,
    dragElement,
}