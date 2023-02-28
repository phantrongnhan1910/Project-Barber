const toggle = document.querySelector(".Toggle");

const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
