//import cipher from './cipher.js';

//console.log(cipher.encode(70, "DANIELA HOLA"));

const userName = document.getElementById('userName');
const btn1 = document.getElementById('btn1');
const saludo = document.getElementById('saludo');

function captureName() {
    saludo.innerText = 'Hola ' + userName.value + ' que quieres hacer hoy?';
}

function showOptions() {
    document.getElementById("btnCifrar").style.display = 'block';
    document.getElementById("btnDescifrar").style.display = 'block';
}

function cifrar() {
    document.getElementById("root").style.display = 'none';
    document.getElementById("cifrar").style.display = 'block';
}

function descifrar() {
    document.getElementById("root").style.display = 'none';
    document.getElementById("descifrar").style.display = 'block';
}

btn1.addEventListener('click', captureName);
