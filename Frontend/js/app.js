// Mobile Menu Toggle

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector("nav");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

// Welcome Message

console.log("Welcome to CareerConnect Portal");

// Current Year in Footer

const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}