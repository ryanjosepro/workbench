let describeElements = document.querySelectorAll('[describe]');

for (let element of describeElements) {
    let container = document.createElement('div');
    container.style.display = 'inline';
    container.style.height = '5%';
    container.style.fontSize = '18pt';
    container.style.fontFamily = 'Montserrat';
    container.style.backgroundColor = 'white';
    container.style.border = '2px solid';
    container.style.borderTopRightRadius = '10px';
    container.style.borderBottomRightRadius = '10px';

    let text = document.createTextNode(element.id);
    container.appendChild(text);

    element.style.backgroundColor = 'red' //randomColor();
    element.appendChild(container);
}