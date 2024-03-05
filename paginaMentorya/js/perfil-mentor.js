let urlParams = new URLSearchParams(window.location.search);
var mentorId = urlParams.get("id");
async function traerInfo() {
  try {
    const info = await axios.get("http://localhost:8080/api/v1/mentores");
    return info.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
async function mentorSeleccionado() {
  const info = await traerInfo();
  console.log(info);
  let data = info.find((e) => e.id == mentorId);
  return data;
}
document.addEventListener('DOMContentLoaded', (e)=>{
  const mentor = mentorSeleccionado()
  
})