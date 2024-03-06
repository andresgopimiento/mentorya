
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
let img = document.querySelectorAll('.img-container');
const btnPrev = document.getElementById('prev-boton');
const btnNext = document.getElementById('next-boton');


let index = 0;
btnNext.addEventListener('click',()=>{
    if (index < img.length -1){
        index++
        let porcentaje = index*-100;
        console.log(porcentaje);
        slider.style.transform = `translateX(${porcentaje}%)`
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
