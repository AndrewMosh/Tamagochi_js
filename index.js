const about = document.getElementById("about");
const bio = document.querySelector(".bio");
const close = document.querySelector(".close");
const age = document.querySelector(".age");
const time = document.querySelector(".time");
const petMe = document.querySelector("#petMe");
const play = document.querySelector("#play");
const sleep = document.querySelector("#sleep");
const scold = document.querySelector("#scold");
const eat = document.querySelector("#eat");
const walk = document.querySelector("#walk");
const pic = document.querySelector("#shiba");
const burger = document.querySelector(".burger");
var cont = document.getElementById("myProgress");
var elem = document.getElementById("myBar");

about.addEventListener("click", showBio);
let birthday = new Date("November 3, 2021 03:24:00");
let now = new Date();
age.textContent = `Мне ${now.getFullYear() - birthday.getFullYear()} год`;
var myVar = setInterval(function () {
  clock();
}, 1000);
function clock() {
  let bitch = new Date();
  time.textContent = bitch.getHours() + ":" + bitch.getMinutes();
}
function showBio() {
  bio.classList.toggle("bioOn");
}
close.addEventListener("click", () => bio.classList.toggle("bioOn"));
petMe.addEventListener("click", petTheDog);
function petTheDog() {
  move(40);
  pic.setAttribute("src", "./assets/cuddle.gif");
}
play.addEventListener("click", playWithMe);
function playWithMe() {
  move(40);
  pic.setAttribute("src", "./assets/play.gif");
}
sleep.addEventListener("click", goToBed);
function goToBed() {
  move(100);
  pic.setAttribute("src", "./assets/gotobed.gif");
}
scold.addEventListener("click", scareMe);
function scareMe() {
  move(20);
  pic.setAttribute("src", "./assets/scared.gif");
}
eat.addEventListener("click", feedMe);

function food() {
  burger.classList.remove("burgerTrue");
}
function feedMe() {
  move(30);
  burger.classList.add("burgerTrue");
  pic.setAttribute("src", "./assets/happy to see.gif");
  setTimeout(food, 5000);
  setTimeout(() => pic.setAttribute("src", "./assets/kisses.gif"), 6000);
}

walk.addEventListener("click", goForWalk);
function goForWalk() {
  move(30);
  pic.setAttribute("src", "./assets/shocked.gif");
  document.body.classList.toggle("beach");
}

function move(interval) {
  cont.style.display = "block";
  var i = 0;
  if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, interval);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        if (width === 100) {
          cont.style.display = "none";
        }
      }
    }
  }
}
