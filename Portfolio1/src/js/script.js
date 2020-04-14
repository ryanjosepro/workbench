let myDivs = document.getElementsByClassName('my-div');

for (let div of myDivs) {
    div.style.backgroundColor = `rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`;
    
    let element = document.createElement();
    let text = document.createTextNode(div.attributes.id);
    element.appendChild(text);
    div.appendChild(element);
}