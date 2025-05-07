export function tryMe() {}
const numWrapper = document.getElementById("numClock");
const hourNum = document.getElementById("hourNum");
const minNum = document.getElementById("minNum");

setInterval(() => {
  const todaySDate = new Date();
  let seconds = todaySDate.getSeconds();
  let minutes = todaySDate.getMinutes();
  let hours = todaySDate.getHours();
  hourNum.textContent = hours;
  minNum.textContent = minutes;
}, 1000);
