const URL = 'http://localhost:4004/producto';
const form = document.getElementById('form');

let nombre = document.getElementById('nombre');
let Descripcion= document.getElementById('descripcion');
let categoria = document.getElementById('categoria');
const registrar = document.getElementById('registrar');

form.addEventListener('submit', async(e)=>{
e.preventDefault();
let nombre = document.getElementById('nombre').value;
let Descripcion= document.getElementById('descripcion').value;
let categoria = document.getElementById('categoria').value;
let nuevo =  document.getElementById('new');
await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(
        {
        nombre,
        Descripcion, 
        categoria,   
        }
    ),
    headers: {"Content-Type": "application/json; charset=UTF-8"}
});
nuevo.innerHTML="";
nuevo.innerHTML += `<p>Se crea con exito <span>${nombre}</span></p>`



})