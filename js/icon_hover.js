const contenedor1 = document.getElementById("contenedor1")
const contenedor2 = document.getElementById("contenedor2")
const contenedor3 = document.getElementById("contenedor3")
const icon1 = document.getElementById("icon1")
const icon2 = document.getElementById("icon2")
const icon3 = document.getElementById("icon3")


contenedor1.addEventListener("mouseover", () => {
  icon1.classList.add("icon_img_container_animate")
}, false)

contenedor1.addEventListener("mouseout", () => {
  icon1.classList.remove("icon_img_container_animate")
}, false)