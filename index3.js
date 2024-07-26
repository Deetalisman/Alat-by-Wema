// alert("dcfvgfbhn");

let section = document.getElementById("section");
let paysection = document.getElementById("payment-section");
let aside = document.getElementById("aside");
const open = document.getElementById("open");
let back = document.getElementById("Back");
let feet = document.getElementById("feets");
let payicon = document.getElementById("pay-icon");
let homeicon = document.getElementById("home-icon");

open.addEventListener("click", () => {
  aside.classList.add("show");
  section.classList.add("hide");
  feet.classList.add("hide");
});
back.addEventListener("click", () => {
  aside.classList.add("hide");
  section.classList.add("show");
});

payicon.addEventListener("click", () => {
  paysection.classList.remove("hide");
  section.classList.add("hide");
  payicon.classList.add("fpic");
  homeicon.classList.remove("fpic");
});

homeicon.addEventListener("click", () => {
  section.classList.remove("hide");
  paysection.classList.add("hide");
  payicon.classList.remove("fpic");
  homeicon.classList.add("fpic");
});
