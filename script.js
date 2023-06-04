const menu = document.querySelector(".menu");
const bar = document.querySelector("#menu");

bar.addEventListener("click", () => {
  menu.classList.toggle("active");
});
