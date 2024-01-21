import "./styles.css";
import setup from "./setup.js";
import menuSetup from "./menuTab.js";
import generateContact from "./contactTab.js";

// setup();

const content = document.getElementById("content");
content.innerHTML = "";

const homeTab = document.getElementById("home");
homeTab.addEventListener("click", e => {
  e.preventDefault();
  setup();
});
const menuTab = document.getElementById("menu");
menuTab.addEventListener("click", e => {
  e.preventDefault();
  menuSetup();
});

const contactTab = document.getElementById("contact");
contactTab.addEventListener("click", e => {
  e.preventDefault();
  generateContact();
});
