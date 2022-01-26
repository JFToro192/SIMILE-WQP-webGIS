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

export {
    openList,
    openPanel,
}