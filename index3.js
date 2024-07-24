// alert("dcfvgfbhn");

let section = document.getElementById("section");
let aside = document.getElementById("aside");
const open = document.getElementById("open");
let back = document.getElementById("Back");

open.addEventListener("click", () => {
  aside.classList.add("show");
  section.classList.add("hide");
});
back.addEventListener("click", () => {
  aside.classList.add("hide");
  section.classList.add("show");
});
