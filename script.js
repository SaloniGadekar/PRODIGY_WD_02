let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let laps = [];

document.getElementById("start").onclick = () => {
  if (timer !== null) return;
  timer = setInterval(updateTime, 10);
};

document.getElementById("stop").onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById("resume").onclick = () => {
  if (timer === null) {
    timer = setInterval(updateTime, 10);
  }
};

document.getElementById("reset").onclick = () => {
  clearInterval(timer);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  display.innerText = "00:00:00:00";
  timer = null;
};

document.getElementById("mark").onclick = () => {
  const lapTime = display.innerText;
  const lapList = document.getElementById("laps");
  const li = document.createElement("li");
  li.textContent = `Mark ${laps.length + 1}: ${lapTime}`;
  lapList.appendChild(li);
  laps.push(lapTime);
};

document.getElementById("lap-reset").onclick = () => {
  document.getElementById("laps").innerHTML = "";
  laps = [];
};

document.getElementById("toggle-mode").onclick = () => {
  document.body.classList.toggle("dark");
};

function updateTime() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
  }

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(Math.floor(milliseconds / 10)).padStart(2, "0");

  display.innerText = `${h}:${m}:${s}:${ms}`;
}


