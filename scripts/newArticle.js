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

})