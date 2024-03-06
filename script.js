
const side = document.querySelector(".sidebar");
var bxMenu = document.getElementById("bx-menu");
var bxClose = document.getElementById("bx-close");

bxMenu.addEventListener("click", () => {
  side.style.display = "flex";
});
bxClose.addEventListener("click", () => {
  side.style.display = "none";
});
