
//const bodyElement = document.body;

//const firstChildNode = bodyElement.firstChild;
//const lastChildNode = bodyElement.lastChild;

//console.log(firstChildNode);
//console.log(lastChildNode);

const body = document.body;

console.log(body);

const header = document.body.childNodes[3];

console.log(header);

let div = document.createElement('div');
div.className = "alert";
div.innerHTML = "Я щось створив, <strong> а ти?</strong>";

document.body.prepend(div);


