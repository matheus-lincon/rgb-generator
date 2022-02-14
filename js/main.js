//SELECTORS

const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");

const colorOutput = document.querySelector("#color-output p");
const circle = document.querySelector("#circle");

const dateHour = document.querySelector("#date-hour");

//EVENTS
window.addEventListener("load", updateRGB);
window.addEventListener("load", updateDate);

red.addEventListener("input", updateRGB);
green.addEventListener("input", updateRGB);
blue.addEventListener("input", updateRGB);

//FUNCTIONS
function updateDate() {
  setInterval(() => {
    let date = new Date();
    let day = date.getDate() <= 9 ? "0" + date.getDate() : date.getDate();
    let month =
      date.getMonth() + 1 <= 9
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours() <= 9 ? "0" + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds =
      date.getSeconds() <= 9 ? "0" + date.getSeconds() : date.getSeconds();

    //update
    dateHour.innerText = `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;
  }, 1000);
}

function updateCircle(r, g, b) {
  circle.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function updateRGB() {
  colorOutput.innerText = `RGB(${red.value},${green.value},${blue.value})`;
  updateCircle(red.value, green.value, blue.value);
}
