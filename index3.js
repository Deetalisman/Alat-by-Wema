// alert("dcfvgfbhn");

let section = document.getElementById("section");
let paysection = document.getElementById("payment-section");
let loansection = document.getElementById("loan-section");
let cardsection = document.getElementById("card-section");
let goalsection = document.getElementById("goal-section");
let aside = document.getElementById("aside");
const open = document.getElementById("open");
let back = document.getElementById("Back");
let feet = document.getElementById("feets");
let payicon = document.getElementById("pay-icon");
let homeicon = document.getElementById("home-icon");
let loanicon = document.getElementById("loan-icon");
let cardicon = document.getElementById("card-icon");
let goalicon = document.getElementById("goal-icon");

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
  loansection.classList.add("hide");
  cardsection.classList.add("hide");
  goalsection.classList.add("hide");
  payicon.classList.add("fpic");
  homeicon.classList.remove("fpic");
  loanicon.classList.remove("fpic");
  cardicon.classList.remove("fpic");
  goalicon.classList.remove("fpic");
});

homeicon.addEventListener("click", () => {
  section.classList.remove("hide");
  paysection.classList.add("hide");
  loansection.classList.add("hide");
  cardsection.classList.add("hide");
  goalsection.classList.add("hide");
  payicon.classList.remove("fpic");
  homeicon.classList.add("fpic");
  loanicon.classList.remove("fpic");
  cardicon.classList.remove("fpic");
  goalicon.classList.remove("fpic");
});

loanicon.addEventListener("click", () => {
  section.classList.add("hide");
  loansection.classList.remove("hide");
  paysection.classList.add("hide");
  cardsection.classList.add("hide");
  goalsection.classList.add("hide");
  homeicon.classList.remove("fpic");
  loanicon.classList.add("fpic");
  payicon.classList.remove("fpic");
  cardicon.classList.remove("fpic");
  goalicon.classList.remove("fpic");
});

cardicon.addEventListener("click", () => {
  section.classList.add("hide");
  loansection.classList.add("hide");
  cardsection.classList.remove("hide");
  paysection.classList.add("hide");
  goalsection.classList.add("hide");
  homeicon.classList.remove("fpic");
  cardicon.classList.add("fpic");
  loanicon.classList.remove("fpic");
  payicon.classList.remove("fpic");
  goalicon.classList.remove("fpic");
});

goalicon.addEventListener("click", () => {
  section.classList.add("hide");
  loansection.classList.add("hide");
  cardsection.classList.add("hide");
  paysection.classList.add("hide");
  goalsection.classList.remove("hide");
  homeicon.classList.remove("fpic");
  cardicon.classList.remove("fpic");
  loanicon.classList.remove("fpic");
  payicon.classList.remove("fpic");
  goalicon.classList.add("fpic");
});
