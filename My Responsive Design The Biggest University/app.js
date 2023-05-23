const navLinks = document.getElementById("navLinks");

const xMarkIcon = document.querySelector(".fa-xmark");
const barsIcon = document.querySelector(".fa-bars");

xMarkIcon.addEventListener("click", () => {
    navLinks.classList.remove("active");
});

barsIcon.addEventListener("click", () => {
    navLinks.classList.add("active");
});