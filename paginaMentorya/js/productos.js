const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");

})

// const url = 'https://randomuser.me/api/?page=3&results=10&inc=gender,name,email,nat,phone,picture';

// const mostrarProductos = async() => {

//     try {
//         //Capturar una respuesta de un API
//         const respuesta = await fetch(url);

//         console.log(respuesta);

//         //Si la respuesta es correcta
//         if (respuesta.status === 200) {
//             /*Poder acceder a la petición que nos dio respuesta pero en formato JSON, el método es asíncrono y se declara para almacenarlo en algún lado*/
//             const datos = await respuesta.json();
            
//             //Se agrega una variable
//             let personas = '';

//             datos.results.forEach(persona => {
//                 personas = persona + `<h1>${persona.name.first}</h1>`,
//                 `<p>${persona.email}</p>`

                
            

//             });

//             document.querySelector("#contenido").innerHTML = personas;
            
        
//         } else  {
//             console.log("Sucedió un error");
        
//         }
//     //Captura del error
//     } catch (error) {
//         console.log(error);
//     }
// }

// mostrarProductos();

// parte joan

// Trae los datos de un archivo JSON llamado "productos.json"
fetch('../productos.json')
// Convierte la respuesta a datos JSON
  .then(response => response.json())
  .then(data => {
    // Inicializa una cadena vacía para almacenar el HTML generad
    let output = '';
    // Recorre cada elemento del array de datos
    data.forEach(element => {
      // Genera un código de color hexadecimal aleatorio para cada elemento
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      // Construye la estructura HTML para cada producto, usando "template literals"
      output += `
        <div class="contenedor principal" style="background-color: ${randomColor}; margin-bottom: 5px;">
    
          ID: ${element.id} <br> Name: ${element.name} <br> Username: ${element.username} <br> Email: ${element.email} <br> Address: ${element.address.street}, ${element.address.suite}, ${element.address.city}, ${element.address.zipcode} <br> Phone: ${element.phone} <br> Website: ${element.website} <br> Company: ${element.company.name}, ${element.company.catchPhrase}, ${element.company.bs}
          </div>
      `;
    });
    // Selecciona el elemento con la clase "contenedor-principal" en el HTML
    // Actualiza el contenido HTML del contenedor-principal con la salida generada
    document.querySelector('.contenedor-principal').innerHTML = output;
  });