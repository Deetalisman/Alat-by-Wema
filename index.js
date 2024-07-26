let home1 = document.getElementById("home11");
let home2 = document.getElementById("home2");

function showhome() {
  home1.style.display = "none";
  home2.classList.remove("hide");
}

setTimeout(showhome, 2000);
