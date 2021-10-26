
let btnCamisetas = document.getElementById('btnCamisetas');
let btnJeans = document.getElementById('btnJeans');
let url = 'http://localhost:4000/articulos'

btnCamisetas.addEventListener('click', async() =>{
    //if articulos.categoria=btnCamisetas.value{
// http://localhost:4000/articulos
const resp = await fetch(url);
const data  = await resp.json();
let mostrarArticulos = document.querySelector('.grid-articulos');


}) ;
   
  








btnJeans.addEventListener('click', () =>{
    obtenerArticulos('http://localhost:4000/articulos');
    // obtenerArticulos('');

});


/*btnarticulos.addEventListener('click' ,() =>{
    
    obtenerArticulos('')
    });*/

    const obtenerArticulos = async(url) => {
        //querySelector() selecciona por varios metodos no solo por id.
        let mostrarArticulos = document.querySelector('.grid-articulos');
        mostrarArticulos.innerHTML ='';
        const resp = await fetch(url);
        const data = await resp.json();

        data.forEach(articulos => {
            const {nombre, Descripcion, categoria, talla, imagen} = articulos;
            mostrarArticulos.innerHTML +=
            `    <div class="col articulos">
            <a href="#" class="enlace-detalle-articulos">
                <div class="card bg-dark text-white gradiente">                
                    <img src="${imagen}" class="card-img" alt="...">
                    <div class="card-img-overlay">
                            <h5 class="card-title body2Bold">${categoria}</h5>
                            <p class="card-text body2Regular">${Descripcion}</p>
                    </div>
                </div>
            </a>
        </div>
            `
        })
        
    }

    obtenerArticulos('http://localhost:4000/articulos');