import { tryMe } from "./numTheClock.mjs";
const menuIcon = document.getElementById("menuIcon");
const box = document.getElementById("menu");
const numClockSwitcher = document.getElementById("numClockSwitcher");
const wallClockSwitcher = document.getElementById("wallClockSwitcher");
const wallClock = document.getElementById("wallClock");
const numClock = document.getElementById("numClock");

menuIcon.addEventListener("click", (e) => {
  box.classList.toggle("on");
});
numClockSwitcher.addEventListener("click", (e) => {
  wallClock.style.display = 'none'
  numClock.style.display = 'flex'
});
wallClockSwitcher.addEventListener('click', (e) => {
  numClock.style.display = 'none'
  wallClock.style.display = 'flex'
})
