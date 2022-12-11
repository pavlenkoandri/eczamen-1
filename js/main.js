const burger = document.querySelector(".js-burger-btn");
const nav = document.querySelector(".nav");
burger.addEventListener("click", () => {
  nav.classList.toggle("active");
});
