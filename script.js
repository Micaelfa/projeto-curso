function toggleMode() {
const html= document.documentElement
html.classList.toggle("ligth")

const img= document.querySelector("#micael img")

 if (html.classList.contains("ligth")){
img.setAttribute("src", "./assets/FEnnQ4EXIAgUtNA.jpg")
}
else {
    img.setAttribute("src","./assets/foto de perfil.jpeg")
}
}