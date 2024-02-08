const form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const password = document.getElementById('password').value;

    const Users = JSON.parse(localStorage.getItem('comusers'))||[];
    const isComUserRegistered = Users.find(comusers => comusers.email === email);

    if(isComUserRegistered){
        return alert ('El usuario se encuentra registrado');
    } else {
        Users.push({
            name:name,
            email:email,
            password:password,
            tel:tel
        });
        localStorage.setItem('comusers',JSON.stringify(Users));
        alert('El usuario fue registrado');
        window.location.href = 'productos.html';
    }
})


