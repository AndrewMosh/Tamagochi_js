const about = document.getElementById("about");
const clean = document.getElementById("clean");
const bio = document.querySelector(".bio");
const close = document.querySelector(".close");
const age = document.querySelector(".age");
const time = document.querySelector(".time");
const poop = document.querySelector(".poop");
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
const energy = document.getElementById("energy");
const happy = document.getElementById("happy");
const toilet = document.getElementById("toilet");
const hunger = document.getElementById("hunger");

about.addEventListener("click", showBio);
let birthday = new Date("November 3, 2021 03:24:00");
let now = new Date();
age.textContent = `Мне ${now.getFullYear() - birthday.getFullYear()} год`;
var myVar = setInterval(function () {
  clock();
}, 1000);
var myCount = setInterval(function () {
  count();
}, 5000);
var countProgress = 1;
function count() {
  if (countProgress > 10) {
    energy.value -= 1;
    happy.value -= 1.5;
    toilet.value -= 2.5;
    hunger.value -= 2;
  }
  if (toilet.value == 0) {
    pic.setAttribute("src", "./assets/pooped.gif");
    poop.style.display = "block";
    toilet.value = 100;
  }
  if (energy.value === 0 && happy.value === 0 && hunger.value === 0) {
    pic.setAttribute("src", "./assets/cry.gif");
  }
  countProgress++;
}
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
  elem.textContent = "Счастье";
  move(40, "green");
  pic.setAttribute("src", "./assets/cuddle.gif");
  happy.value += 20;
}
play.addEventListener("click", playWithMe);
function playWithMe() {
  elem.textContent = "Счастье";
  move(40, "green");
  pic.setAttribute("src", "./assets/play.gif");
  happy.value += 20;
}
sleep.addEventListener("click", goToBed);
function goToBed() {
  elem.textContent = "Энергия";
  move(100, "green");
  pic.setAttribute("src", "./assets/gotobed.gif");
  energy.value = 100;
}
scold.addEventListener("click", scareMe);
function scareMe() {
  elem.textContent = "Счастье";
  move(20, "red");
  pic.setAttribute("src", "./assets/scared.gif");
  happy.value -= 20;
}
eat.addEventListener("click", feedMe);

function food() {
  burger.classList.remove("burgerTrue");
}
function feedMe() {
  elem.textContent = "Сытость";
  move(30, "green");
  burger.classList.add("burgerTrue");
  pic.setAttribute("src", "./assets/happy to see.gif");
  setTimeout(food, 5000);
  setTimeout(() => pic.setAttribute("src", "./assets/kisses.gif"), 6000);
  hunger.value += 50;
}

walk.addEventListener("click", goForWalk);
function goForWalk() {
  elem.textContent = "Туалет";
  move(30, "green");
  pic.setAttribute("src", "./assets/shocked.gif");
  document.body.classList.toggle("beach");
  toilet.value = 100;
}
clean.addEventListener("click", cleanPoops);
function cleanPoops() {
  poop.style.display = "none";
  pic.setAttribute("src", "./assets/laugh with tears.gif");
}

function move(interval, color) {
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
        elem.style.backgroundColor = color;
        if (width === 98) {
          cont.style.display = "none";
        }
      }
    }
  }
}
