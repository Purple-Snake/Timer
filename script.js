let id;
let slider = document.getElementsByClassName("slider")[0];
let sliderResult = document.getElementsByClassName("time")[0];
let paused = false;
let timeleft;
let theTime;

window.addEventListener("load", () => {
  toTime(timeleft)
});

sliderResult.innerHTML = slider.value;
slider.oninput = function () {
  sliderResult.innerHTML = this.value;
  timeleft = Number(this.value);
  stopTimer()
  toTime(timeleft)
};

timeleft = parseInt(sliderResult.innerHTML);

function addHour() {
  slider.value = parseInt(slider.value) + 3600;
  timeleft + 3600;
  timeleft = parseInt(slider.value);
  document.querySelector(".time").innerHTML = toTime(slider.value)
  stopTimer()
};

function addMinute() {
  slider.value = parseInt(slider.value) + 60;
  timeleft + 60;
  timeleft = parseInt(slider.value);
  document.querySelector(".time").innerHTML = toTime(slider.value)
};

function addSeconds() {
  slider.value = parseInt(slider.value) + 1;
  timeleft + 1
  timeleft = parseInt(slider.value);
  document.querySelector(".time").innerHTML = toTime(slider.value)
};

function subtractHour() {
  slider.value = parseInt(slider.value) - 3600;
  timeleft - 3600;
  timeleft = parseInt(slider.value);
  document.querySelector(".time").innerHTML = toTime(slider.value)
};

function subtractMinute() {
  slider.value = parseInt(slider.value) - 60;
  timeleft - 60;
  timeleft = parseInt(slider.value);
  document.querySelector(".time").innerHTML = toTime(slider.value)
};

function subtractSeconds() {
  slider.value = parseInt(slider.value) - 1;
  timeleft - 1;
  timeleft = parseInt(slider.value);
  document.querySelector(".time").innerHTML = toTime(slider.value)
};

function toTime(timeleft) {
  let totalMinutes = Math.floor(timeleft / 60);
  let seconds = timeleft % 60;
  let minutes = totalMinutes % 60;
  let hours = Math.floor(totalMinutes / 60);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  theTime = `${hours}:${minutes}:${seconds}`;

  return document.querySelector(".time").innerHTML = theTime;
};

function startTimer() {
  if (paused) {
    paused = false;
    return;
  } else if (id) return;

  id = setInterval(() => {
    if (paused) return;
    --timeleft;
    if (timeleft === 0) {
      stopTimer()
      console.log("0 time left");
    }
    document.getElementsByClassName("time")[0].innerHTML = toTime(timeleft);
  }, 1000);
};

const reset = () => {
  timeleft = slider.value;
  document.getElementsByClassName("time")[0].innerHTML = toTime(timeleft);
  stopTimer()
};

const stopTimer = () => (paused = true);

function toggleConfigMenu() {
  let plusButtons = document.querySelector(".plus-buttons");
  let minusButtons = document.querySelector(".minus-buttons")
  let configMenu = document.querySelector(".configmenu");
  plusButtons.classList.toggle("hidden");
  minusButtons.classList.toggle("hidden")
  configMenu.classList.toggle("hidden");
}