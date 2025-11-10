const menu = document.getElementById("menu1");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  
  // Change icon dynamically
  const icon = menu.querySelector("i");
  if (navLinks.classList.contains("active")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});


// DOM - text changing to style

let logo = document.getElementById("logo2")
logo.textContent = "< Sanghaar >"

let home= document.getElementById("home")
home.textContent = "< Home >"

let about = document.getElementById("about")
about.textContent = "< About >"

let skills= document.getElementById("skills")
skills.textContent = "< Skills >"

let services= document.getElementById("services")
services.textContent = "< Services >"

let contact= document.getElementById("contact")
contact.textContent = "< Contact >"

// hero section text changing

let hello = document.getElementById("h3")
hello.textContent = "- Hello -";  

