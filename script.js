
// AETHERIA WEBSITE

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    menuBtn.textContent =
        nav.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        menuBtn.textContent = "☰";
    });
});

// ROBLOX GAME LINK
const robloxBtn = document.getElementById("robloxBtn");

robloxBtn.addEventListener("click", (event) => {
    event.preventDefault();

    alert("The Aetheria Roblox game link will be added soon!");
});

// DISCORD LINK
const discordBtn = document.getElementById("discordBtn");

discordBtn.addEventListener("click", (event) => {
    event.preventDefault();

    alert("The Aetheria Discord link will be added soon!");
});

// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll(".section").forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";

    observer.observe(section);
});

console.log("AETHERIA WEBSITE LOADED");
