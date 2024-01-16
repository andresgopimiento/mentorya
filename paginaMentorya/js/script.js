
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");

})


// ------------------------------Script del slider del equipo---------------------------------------------
let slider = document.querySelector('.contenedor-galeria');
let img = document.querySelectorAll('img');
const btnPrev = document.getElementById('prev-boton');
const btnNext = document.getElementById('next-boton');


let index = 1;
btnNext.addEventListener('click',()=>{
    let porcentaje = index*-100;
    console.log(porcentaje);
    slider.style.transform = `translateX(${porcentaje}%)`
    if (index < img.length -1){
        index++
    }
    })
    btnPrev.addEventListener('click',()=>{

    if (index > 0) {
        index--;
        let porcentaje = index * -100;
        console.log(porcentaje);
        slider.style.transform = `translateX(${porcentaje}%)`;
    }
})