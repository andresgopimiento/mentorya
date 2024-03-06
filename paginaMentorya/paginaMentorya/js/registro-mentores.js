const form = document.getElementById('contactForm');
form.addEventListener('submit', (e)=>{
  e.preventDefault()

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const categoria = document.getElementById('cate').value;
  const pais = document.getElementById('pais').value;
  // const ciudad = document.getElementById('ciudad').value;
  const profesion = document.getElementById('profesion').value;

  const Users = JSON.parse(localStorage.getItem('users')) || [];

  const isUserRegistered = Users.find(user => user.email === email);

  if (isUserRegistered){
    return alert ('El usuario se encuentra registrado')
  } else {
    Users.push({
      name: name,
      email: email,
      categoria: categoria,
      pais: pais,
      profesion: profesion,
    });
    localStorage.setItem('users', JSON.stringify(Users))
    alert('el usuario fue registrado')
    window.location.href = 'productos.html'
  }
})
// Este codigo es el que agrega al localStorage y verifica si los mentores fueron registrados, y re dirige la pagina a la pagina de productos 
// Esta pagina toca importarla a la pagina del formulario de los mentores 

