const secArrow = document.getElementById("secArrow");
const minArrow = document.getElementById("minArrow");
const hourArrow = document.getElementById("hourArrow");



setInterval(() => {
  const todaySDate = new Date();
  const seconds = todaySDate.getSeconds();
  const minutes = todaySDate.getMinutes();
  const hours = todaySDate.getHours();
  secArrow.style.transform = `rotate(${seconds * 6}deg)`;
  minArrow.style.transform = `rotate(${minutes * 6}deg)`;
  hourArrow.style.transform = `rotate(${hours * 30}deg)`;
  secArrow.style.transform = `rotate(${seconds * 6}deg)`;
  minArrow.style.transform = `rotate(${minutes * 6}deg)`;
  hourArrow.style.transform = `rotate(${hours * 30}deg)`;
  // if (seconds % 60 == 0) {
  //   minutes++;
  // }
  // if (minutes % 60 == 0) {
  //   hours++;
  // }
  // seconds++;
}, 1000);
// setInterval(() => {
//   minArrow.style.transform = `rotate(${minutes * 6}deg)`;
//   minutes++;
// }, 60000);
// setInterval(() => {
//   hourArrow.style.transform = `rotate(${hours * 30}deg)`;
//   hours++;
// }, 3600000);
