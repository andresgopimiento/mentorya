
// const container = document.getElementById('container');
// const select = document.getElementById('select-cate');
// const producto = document.getElementsByClassName('contenedor_producto');

// select.addEventListener('click', (e)=>{
//     console.log(e.target.value);
//     for (let i = 0; i < Users.length; i++) {
//         if (e.target.value == Users[i].categoria) {
//             producto.classList.add('filtro');
//         }
        
//     }
// })
// let Users = JSON.parse(localStorage.getItem('users')) || [];
//     for (i = 0; i<Users.length;i++){
//         let hijo = document.createElement('div')
//         hijo.classList.add('product')
//         hijo.innerHTML = `
//         <div class="contenedor_producto">
//         <div class="contenedor_info">
//         <div class="contenedor_img">
//             <img src="https://svgsilh.com/svg/1633250.svg" alt="pepe" class="pepe">
//         </div>
//         <h5 class="nombre">${Users[i].name}</h5>
//         <p class="pais">${Users[i].profesion}</p>
//         <p class="email">${Users[i].categoria}</p>
//         </div>
//         </div>
//         `
//         container.appendChild(hijo)
//     }
//   // Este codigo es el que imprime los mentores registrados - en la pagina de productos.
// // Obtén los elementos de entrada del filtro


    const container = document.getElementById('container');
    const select = document.getElementById('select-cate');
    const selectP = document.getElementById('select-pais');
    
    select.addEventListener('change', (e)=>{
        const selectedCategory = e.target.value;
        renderUsers(selectedCategory,'categoria');
    });
    selectP.addEventListener('change', (e)=>{
        const selectedCategory = e.target.value;
        renderUsers(selectedCategory,'pais');
    });
    function renderUsers(filterCategory,propiedad) {
        container.innerHTML = ''; // Limpiar el contenedor antes de renderizar los usuarios
        let Users = JSON.parse(localStorage.getItem('users')) || [];
        for (i = 0; i<Users.length;i++){
            if (!filterCategory || Users[i][propiedad] === filterCategory) { // Filtrar por categoría si se proporciona una
                let hijo = document.createElement('div')
                hijo.classList.add('product')
                hijo.innerHTML = `
                <div class="contenedor_producto" id="contenedor-producto${Users[i]}">
                <div class="contenedor_info">
                <div class="contenedor_img">
                    <img src="https://svgsilh.com/svg/1633250.svg" alt="pepe" class="pepe">
                </div>
                <h5 class="nombre">${Users[i].name}</h5>
                <p class="pais">${Users[i].profesion}</p>
                <p class="email">${Users[i].categoria}</p>
                </div>
                </div>
                `
                container.appendChild(hijo)
                // const producto = document.
            } else if(filterCategory === "todos"){
                let hijo = document.createElement('div')
                hijo.classList.add('product')
                hijo.innerHTML = `
                <div class="contenedor_producto">
                <div class="contenedor_info">
                <div class="contenedor_img">
                    <img src="https://svgsilh.com/svg/1633250.svg" alt="pepe" class="pepe">
                </div>
                <h5 class="nombre">${Users[i].name}</h5>
                <p class="pais">${Users[i].profesion}</p>
                <p class="email">${Users[i].categoria}</p>
                </div>
                </div>
                `
                container.appendChild(hijo)
            }
        }
    }

    renderUsers(); // Renderizar todos los usuarios al cargar la página

