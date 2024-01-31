const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");

})

document.getElementById("contactForm").addEventListener("submit", function (event) {
    
    mostrarDatos();
    this.reset();
  });
  
  function mostrarDatos() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
  
    Swal.fire({
      title: "Muchas gracias, " + name,
      text: "Pronto estaremos en contacto en su correo: " + email,
      icon: "success"
    });
    
    
  }