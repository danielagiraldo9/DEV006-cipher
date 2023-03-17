//import cipher from './cipher.js';

//console.log(cipher.encode(70, "DANIELA HOLA"));

const userName = document.getElementById('userName');
const btn1 = document.getElementById('btn1');
const saludo = document.getElementById('saludo');

function captureName() {
  saludo.innerText = 'Hola ' + userName.value + ' que quieres hacer hoy?';
  // const name = document.createElement("h3");
  // const text_name = document.createTextNode('Hola ' + userName.value + ' que quieres hacer hoy?');
  // name.appendChild(text_name);
  // document.body.appendChild(name);
}



// function encodeButton() {

// }

// function decodeButton() {

// }

btn1.addEventListener('click', captureName);
