const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");

})
const container = document.getElementById('container')

let Users = JSON.parse(localStorage.getItem('users')) || [];
  for (i = 0; i<Users.length;i++){
    let hijo = document.createElement('div')
    hijo.classList.add('product')
    hijo.innerHTML = `
    <div class="contenedor_producto">
    <div class="contenedor_info">
      <div >
        <img src="https://svgsilh.com/svg/1633250.svg" alt="pepe" class="pepe">
      </div>
      <h5 class="nombre">${Users[i].name}</h5>
      <p class="email">${Users[i].email}</p>
      <p class="pais">${Users[i].profesion}</p>
    </div>
    </div>
    `
    container.appendChild(hijo)
  }
  // Este codigo es el que imprime los mentores registrados - en la pagina de productos.