const URL = 'http://localhost:4000/articulos';
const form = document.getElementById('form');

let nombre = document.getElementById('nombre');
let descripcion= document.getElementById('descripcion');
let categoria = document.getElementById('categoria');
const registrar = document.getElementById('registrar');

form.addEventListener('submit', (e)=>{
e.preventDefault();
let nombre = document.getElementById('nombre').value;
let descripcion= document.getElementById('descripcion').value;
let categoria = document.getElementById('categoria').value;
console.log(nombre, descripcion, categoria);

})