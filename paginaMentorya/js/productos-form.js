// const container = document.getElementById('container')

// let Users = JSON.parse(localStorage.getItem('users')) || [];
//   for (i = 0; i<Users.length;i++){
//     let hijo = document.createElement('div')
//     hijo.classList.add('product')
//     hijo.innerHTML = `
//     <div class="contenedor_producto">
//     <div class="contenedor_info">
//       <div class="contenedor_img">
//         <img src="https://svgsilh.com/svg/1633250.svg" alt="pepe" class="pepe">
//       </div>
//       <h5 class="nombre">${Users[i].name}</h5>
//       <p class="pais">${Users[i].profesion}</p>
//       <p class="email">${Users[i].pais}</p>
//     </div>
//     </div>
//     `
//     container.appendChild(hijo)
//   }
//   // Este codigo es el que imprime los mentores registrados - en la pagina de productos.
// Obtén los elementos de entrada del filtro
let selectCategoria = document.querySelector('#selectCategoria');
let selectPais = document.querySelector('#selectPais');
let checkboxDisponible = document.querySelector('#checkboxDisponible');

// Agrega un evento de escucha a los elementos de entrada del filtro
selectCategoria.addEventListener('change', filtrarYMostrarUsuarios);
selectPais.addEventListener('change', filtrarYMostrarUsuarios);
checkboxDisponible.addEventListener('change', filtrarYMostrarUsuarios);

function filtrarYMostrarUsuarios() {
    // Filtra los usuarios basándote en los valores de los elementos de entrada del filtro
    let usuariosFiltrados = Users.filter(usuario => {
        return (usuario.categoria === selectCategoria.value || selectCategoria.value === 'todos')
            && (usuario.pais === selectPais.value || selectPais.value === 'todos')
            && (!checkboxDisponible.checked || usuario.disponible);
    });

    // Muestra los usuarios filtrados
    container.innerHTML = '';
    usuariosFiltrados.forEach(usuario => {
        let hijo = document.createElement('div');
        hijo.classList.add('product');
        hijo.innerHTML = `
            <div class="contenedor_producto">
                <div class="contenedor_info">
                    <div class="contenedor_img">
                        <img src="https://svgsilh.com/svg/1633250.svg" alt="pepe" class="pepe">
                    </div>
                    <h5 class="nombre">${usuario.name}</h5>
                    <p class="pais">${usuario.profesion}</p>
                    <p class="email">${usuario.pais}</p>
                </div>
            </div>
        `;
        container.appendChild(hijo);
    });
}

// Llama a la función para mostrar todos los usuarios al principio
filtrarYMostrarUsuarios();