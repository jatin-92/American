const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.add("show");
});

closeMenu.addEventListener("click", () => {
  mobileNav.classList.remove("show");
});

document.querySelectorAll(".mobile-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("show");
  });
});
