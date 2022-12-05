const about = document.getElementById("about");
const bio = document.querySelector(".bio");
const close = document.querySelector(".close");
const age = document.querySelector(".age");
const petMe = document.querySelector("#petMe");
const play = document.querySelector("#play");
const sleep = document.querySelector("#sleep");
const scold = document.querySelector("#scold");
const eat = document.querySelector("#eat");
const walk = document.querySelector("#walk");
const pic = document.querySelector("#shiba");
const burger = document.querySelector(".burger");

about.addEventListener("click", showBio);

function showBio() {
  let birthday = new Date("November 3, 2021 03:24:00");
  let now = new Date();
  age.textContent = `Мне ${now.getFullYear() - birthday.getFullYear()} год`;
  bio.classList.toggle("bioOn");
}
close.addEventListener("click", () => bio.classList.toggle("bioOn"));
petMe.addEventListener("click", petTheDog);
function petTheDog() {
  pic.setAttribute("src", "./assets/cuddle.gif");
}
play.addEventListener("click", playWithMe);
function playWithMe() {
  pic.setAttribute("src", "./assets/play.gif");
}
sleep.addEventListener("click", goToBed);
function goToBed() {
  pic.setAttribute("src", "./assets/gotobed.gif");
}
scold.addEventListener("click", scareMe);
function scareMe() {
  pic.setAttribute("src", "./assets/scared.gif");
}
eat.addEventListener("click", feedMe);

function food() {
  burger.classList.remove("burgerTrue");
}
function feedMe() {
  burger.classList.add("burgerTrue");
  pic.setAttribute("src", "./assets/happy to see.gif");
  setTimeout(food, 5000);
  setTimeout(() => pic.setAttribute("src", "./assets/kisses.gif"), 6000);
}

walk.addEventListener("click", goForWalk);
function goForWalk() {
  pic.setAttribute("src", "./assets/shocked.gif");
  document.body.classList.toggle("beach");
}
