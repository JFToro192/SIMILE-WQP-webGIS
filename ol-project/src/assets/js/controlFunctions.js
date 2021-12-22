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
    const element = $(classItem)
    if (element.hasClass('active')) {
        element.hide();
        element.removeClass('active');}
    else{
        element.show();
        element.addClass('active');
    }   
}

export {
    openList,
    openPanel,
}