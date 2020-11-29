const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");

function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// Light and Dark Mode

function mode(type) {
  if (type === "dark") {
    nav.style.backgroundColor = "rgb(0 0 0 / 50%)";
    textBox.style.backgroundColor = "rgb(255,255,255)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove("fa-sun");
    toggleIcon.children[1].classList.add("fa-moon");
    imageMode("dark");
  } else {
    nav.style.backgroundColor = "rgb(255 255 255 / 50%)";
    textBox.style.backgroundColor = "rgb(0,0,0)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
    imageMode("light");
  }
}

// Switch Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    mode("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    mode();
  }
}

//  Event Listener
toggleSwitch.addEventListener("change", switchTheme);
