
import logo from "./assets/logo_1.png";
import "./styles.css";

const img = document.createElement("img")
img.src = logo;
document.getElementById("imgContainer").appendChild(img)


const userName = 'Cris';
console.log(`Hello ${userName} !!`)