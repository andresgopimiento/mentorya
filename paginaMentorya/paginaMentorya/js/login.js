const form = document.getElementById('formulario');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    const Users = JSON.parse(localStorage.getItem('comusers'))||[];
    const isUserRegistered = Users.find(comusers => comusers.password == password && comusers.name == name);
    console.log(isUserRegistered);
    if (isUserRegistered) {
        window.location.href = 'productos.html';
    } else {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "El usuario o la contraseña no coinciden"
        });
    }
})