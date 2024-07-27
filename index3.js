// alert("dcfvgfbhn");

let section = document.getElementById("section");
let paysection = document.getElementById("payment-section");
let loansection = document.getElementById("loan-section");
let cardsection = document.getElementById("card-section");
let goalsection = document.getElementById("goal-section");
let viewsection = document.getElementById("view-sect");
let aside = document.getElementById("aside");
const open = document.getElementById("open");
let back = document.getElementById("Back");
let backs = document.getElementById("Backs");
let backss = document.getElementById("Backss");
let feet = document.getElementById("feets");
let view = document.getElementById("view");
let payicon = document.getElementById("pay-icon");
let homeicon = document.getElementById("home-icon");
let loanicon = document.getElementById("loan-icon");
let cardicon = document.getElementById("card-icon");
let goalicon = document.getElementById("goal-icon");
let peracc = document.getElementById("peracc");
let viewopt1 = document.getElementById("viewopt1");
let viewopt2 = document.getElementById("viewopt2");
let back0 = document.getElementById("back0");
let back1 = document.getElementById("back1");

//To open the side bar
open.addEventListener("click", () => {
  aside.classList.add("show");
  section.classList.add("hide");
  feet.classList.add("hide");
});

//To close the side bar
back.addEventListener("click", () => {
  aside.classList.add("hide");
  section.classList.add("show");
});

//To open the view all accounts
view.addEventListener("click", () => {
  viewsection.classList.remove("hide");
  section.classList.add("hide");
  feet.classList.add("hide");
});

//To close the view all accounts
backs.addEventListener("click", () => {
  viewsection.classList.add("hide");
  section.classList.remove("hide");
  feet.classList.remove("hide");
});

//To open personal account
peracc.addEventListener("click", () => {
  viewopt1.classList.add("hide");
  viewopt2.classList.remove("hide");
  back0.classList.add("hide");
  back1.classList.remove("hide");
});

//To close personal accounts
backss.addEventListener("click", () => {
  viewopt2.classList.add("hide");
  viewopt1.classList.remove("hide");
  back1.classList.add("hide");
  back0.classList.remove("hide");
});

//To open payment section
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

//To open home section
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

//To open Loan section
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

//To open Card section
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

//To open Goal section
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
