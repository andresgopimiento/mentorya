const container = document.getElementById("container");
let urlParams = new URLSearchParams(window.location.search);
var mentorId = urlParams.get("id");
async function traerInfo() {
  try {
    const info = await axios.get("http://localhost:8080/api/mentor/findAll");
    return info.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function mentorSeleccionado() {
  const info = await traerInfo();
  let data = info.find((e) => e.id == id);
  return data;
}
  let personas = [
    {
      id: 14,
      info: "Nací el 12 de febrero de 1985 en Barcelona. Desde mi infancia, he sido un apasionado de la programación, comenzando con Locomotive BASIC en un Amstrad CPC 464. A lo largo de los años, he explorado diversas tecnologías y lenguajes de programación, impulsado por mi amor por el aprendizaje. Después de años de autoaprendizaje, cursé la Ingeniería Técnica de Informática de Gestión en la UOC y he continuado trabajando y aprendiendo como desarrollador. Disfruto asistiendo a reuniones de desarrolladores, conferencias, realizando talleres y compartiendo conocimientos, buscando siempre oportunidades para evolucionar en mi carrera.",
      habilidades: "<li>Programación</li><li>Autoaprendizaje</li><li>Enseñanza</li><li>Asistencia a reuniones de desarrolladores</li><li>Asistencia a conferencias</li><li>Realización de talleres</li><li>Compartir conocimientos</li>"
    }
]
document.addEventListener("DOMContentLoaded", async (e) => {
  const mentor = await mentorSeleccionado();
  async function renderUsers() {
    container.innerHTML = "";
    let hijo = document.createElement("div");
    hijo.classList.add("product");
    let persona = personas.find(persona => persona.id == mentorId);
    let info = persona ? persona.info : '';
    let habilidades = persona ? persona.habilidades : '';
    hijo.innerHTML = `<div class="main__container">
  <section class="container__perfil">
    <div class="perfil-img">
      <strong>${mentor.firstName}</strong>
      <img src="${mentor.imagenMentor}" alt="">
    </div>
    <div class="perfil-info">
      <ul>${habilidades}</ul>
    </div>
    <div class="perfil-data">
      <strong>${mentor.profesionMentor}</strong>
    </div>
  </section>
  <section class="container__ventas">
    <div class="ventas-servicios">
      <div class="servicios">
        <p>${info}</p>
      </div>
      <div class="datepicker">
        <div class="datepicker-top">
          <div class="btn-group">
            <button class="tag">Hoy</button>
            <button class="tag">Mañana</button>
            <button class="tag">En 2 dias</button>
          </div>
          <div class="month-selector">
            <button class="arrow"><i class="material-icons"><</i></button>
            <span class="month-name">Febrero 2024</span>
            <button class="arrow"><i class="material-icons">></i></button>
          </div>
        </div>
        <div class="datepicker-calendar">
          <span class="day">Mo</span>
          <span class="day">Tu</span>
          <span class="day">We</span>
          <span class="day">Th</span>
          <span class="day">Fr</span>
          <span class="day">Sa</span>
          <span class="day">Su</span>
          <button class="date faded">30</button>
          <button class="date">1</button>
          <button class="date">2</button>
          <button class="date">3</button>
          <button class="date">4</button>
          <button class="date">5</button>
          <button class="date">6</button>
          <button class="date">7</button>
          <button class="date">8</button>
          <button class="date current-day">9</button>
          <button class="date">10</button>
          <button class="date">11</button>
          <button class="date">12</button>
          <button class="date">13</button>
          <button class="date">14</button>
          <button class="date">15</button>
          <button class="date">16</button>
          <button class="date">17</button>
          <button class="date">18</button>
          <button class="date">19</button>
          <button class="date">20</button>
          <button class="date">21</button>
          <button class="date">22</button>
          <button class="date">23</button>
          <button class="date">24</button>
          <button class="date">25</button>
          <button class="date">26</button>
          <button class="date">27</button>
          <button class="date">28</button>
          <button class="date">29</button>
          <button class="date">30</button>
          <button class="date">31</button>
          <button class="date faded">1</button>
          <button class="date faded">2</button>
          <button class="date faded">3</button>
        </div>
      </div>
    </div>
    <div class="ventas-videos">
      <div class="videos-contenedor">
      <iframe src="/videos/video-5.mp4" frameborder="0"></iframe>
        <div class="video-titulo">
          <strong> Titulo del video</strong>
        </div>
        <div class="video-precio">
          <p>Acceso: <Strong>Gratis</Strong></p>
          <form>
          <p class="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5"><!--
            --><label for="radio1">★</label><!--
            --><input id="radio2" type="radio" name="estrellas" value="4"><!--
            --><label for="radio2">★</label><!--
            --><input id="radio3" type="radio" name="estrellas" value="3"><!--
            --><label for="radio3">★</label><!--
            --><input id="radio4" type="radio" name="estrellas" value="2"><!--
            --><label for="radio4">★</label><!--
            --><input id="radio5" type="radio" name="estrellas" value="1"><!--
            --><label for="radio5">★</label>
          </p>
        </form>
        </div>
      </div>
      <div class="videos-contenedor">
        <iframe src="/videos/video-5.mp4" frameborder="0"></iframe>
        <div class="video-titulo">
          <strong> Titulo del video</strong>
        </div>
        <div class="video-precio">
          <p>Acceso: <Strong>Gratis</Strong></p>
          <form>
          <p class="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5"><!--
            --><label for="radio1">★</label><!--
            --><input id="radio2" type="radio" name="estrellas" value="4"><!--
            --><label for="radio2">★</label><!--
            --><input id="radio3" type="radio" name="estrellas" value="3"><!--
            --><label for="radio3">★</label><!--
            --><input id="radio4" type="radio" name="estrellas" value="2"><!--
            --><label for="radio4">★</label><!--
            --><input id="radio5" type="radio" name="estrellas" value="1"><!--
            --><label for="radio5">★</label>
          </p>
        </form>
        </div>
      </div>
      <div class="videos-contenedor plus">
        <iframe src="/videos/pexels-max-vakhtbovych-6771557 (1080p).mp4" frameborder="0"></iframe>
        <div class="video-titulo">
          <strong> Titulo del video</strong>
        </div>
        <div class="video-precio">
          <p>Acceso: <Strong>MentoryaPlus</Strong></p>
          <div class="block">
            <button class="btn-block" id="btn">Click para adquirir MentoryaPlus</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</main>
<footer>
<section class="logo-footer">
  <h1>Mentorya</h1>
</section>
<section class="sobre-nosotros">
  <h2>Bienvenidos</h2>
  <li><a class="a" href="/index.html">Inicio</a></li>
  <li><a class="a" href="/pages/contacto.html">Contacto</a></li>
  <li><a class="a" href="/pages/nosotros.html">Nosotros</a></li>
  <li>
    <a class="a" href="/pages/formulario-Registro.html">Mentores</a>
  </li>
</section>
<section class="redes">
  <h2>siguenos en nuestras redes sociales</h2>
  <article class="icon-footer">
    <a class="a" href="#"><i class="bi bi-facebook"></i></a>
    <a class="a" href="#"><i class="bi bi-instagram"></i></a>
    <a class="a" href="#"><i class="bi bi-threads"></i></a>
    <a class="a" href="#"><i class="bi bi-github"></i></a>
    <a class="a" href="#"><i class="bi bi-twitter-x"></i></a>
  </article>
</section>`;
    container.appendChild(hijo);
  }
  renderUsers();
});

