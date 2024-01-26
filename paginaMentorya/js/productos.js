const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");

})

const url = 'https://randomuser.me/api/?page=3&results=10&inc=gender,name,email,nat,phone,picture';

const mostrarProductos = async() => {

    try {
        //Capturar una respuesta de un API
        const respuesta = await fetch(url);

        console.log(respuesta);

        //Si la respuesta es correcta
        if (respuesta.status === 200) {
            /*Poder acceder a la petición que nos dio respuesta pero en formato JSON, el método es asíncrono y se declara para almacenarlo en algún lado*/
            const datos = await respuesta.json();
            
            //Se agrega una variable
            let personas = '';

            datos.results.forEach(persona => {
                personas = persona + `<h1>${persona.name.first}</h1>`,
                `<p>${persona.email}</p>`

                
            

            });

            document.querySelector("#contenido").innerHTML = personas;
            
        
        } else  {
            console.log("Sucedió un error");
        
        }
    //Captura del error
    } catch (error) {
        console.log(error);
    }
}

mostrarProductos();