  const container = document.getElementById("container");
  const select = document.getElementById("select-cate");
  const selectP = document.getElementById("select-pais");

  select.addEventListener("change", (e) => {
    const selectedCategory = e.target.value;
    console.log(selectedCategory);
    renderUsers(selectedCategory, "rubro");
  });

  selectP.addEventListener("change", (e) => {
    const selectedCategory = e.target.value;
    renderUsers(selectedCategory, "paisMentor");
  });

  async function renderUsers(filterCategory, propiedad) {
    container.innerHTML = "";
    const url = "http://localhost:8080/api/mentor/findAll";
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let Users = await response.json();
    for (i = 0; i < Users.length; i++) {
      if (filterCategory === "todos") {
        let hijo = document.createElement("div");

        hijo.classList.add("product");
        hijo.innerHTML = `
                  <div class="contenedor_producto">
                  <div class="contenedor_info">
                  <div class="contenedor_img">
                      <img src="${Users[i].imagenMentor}" alt="pepe" class="pepe">
                  </div>
                  <a href="perfil-mentor.html?id=${Users[i].id}"class="nombre">${Users[i].nombreMentor}</a>
                  <p class="pais">${Users[i].profesionMentor}</p>
                  </div>
                  </div>
                  `;
        container.appendChild(hijo);
      } else if (Users[i][propiedad] === filterCategory || Users[i].rubro.rubro === filterCategory) {
        let hijo = document.createElement("div");
        hijo.classList.add("product");
        hijo.innerHTML = `
                  <div class="contenedor_producto contenedor_producto${Users[i].id}">
                  <div class="contenedor_info">
                  <div class="contenedor_img">
                      <img src=${Users[i].imagenMentor? Users[i].imagenMentor : "https://svgsilh.com/svg/1633250.svg"} alt="pepe" class="pepe">
                  </div>
                  <a href="perfil-mentor.html?id=${Users[i].id}"class="nombre">${Users[i].nombreMentor}</a>
                  <p class="pais">${Users[i].profesionMentor}</p>
                  </div>
                  </div>
                  `;
        container.appendChild(hijo);
      }
    }
  }
  renderUsers();
