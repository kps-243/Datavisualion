const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("close");
  menu.classList.toggle("open");
});
