const form = document.getElementById('formulario');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    const Users = JSON.parse(localStorage.getItem('comusers'))||[];
    const isUserRegistered = Users.find(comusers => comusers.password == password && comusers.name == name);
    const usuario = JSON.parse(localStorage.getItem('comusers.name'))
    if (isUserRegistered) {
        alert (`Bienvenido ${isUserRegistered.name}`);
        window.location.href = 'productos.html';
    } else {
        alert("El usuario no se encuentra registrado o el usuario no coincide con la contraseña");
    }
})