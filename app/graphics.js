import document from "document";

let background = document.getElementById("background");
let circle = document.getElementById("background-circle");
let heart = document.getElementById("hearticon");
let centraldot = document.getElementById("centraldot");

let time = document.getElementById("time");
let date = document.getElementById("date");
let hr = document.getElementById("heart");
let threewords = document.getElementById("threewords");


export function updateClockAndDate(timeString, dateString) {
  time.text = timeString;
  date.text = dateString;
}

export function updateHeartRate(heartRate) {
  hr.text = heartRate;
}

export const handleStatusChange = (evt) => {
  switch (evt.data.key) {
    case "background-color":
      background.style.fill = JSON.parse(evt.data.newValue);
      break;
    case "circle-color":
      circle.style.fill = JSON.parse(evt.data.newValue);
      break;
    case "centraldot-color":
      centraldot.style.fill = JSON.parse(evt.data.newValue);
      break;
    case "heartRed":
      if (JSON.parse(evt.data.newValue) == true) {
        heart.href = "heart_red.png";
      } else {
        heart.href = "heart_black.png"
      }
      break;
    case "text-color":
      time.style.fill = JSON.parse(evt.data.newValue);
      date.style.fill = JSON.parse(evt.data.newValue);
      hr.style.fill = JSON.parse(evt.data.newValue);
      threewords.style.fill = JSON.parse(evt.data.newValue);
      break;
    case "threewords":
      if (JSON.parse(evt.data.newValue) == true) {
        threewords.style.display = "inline";
      } else {
        threewords.style.display = "none";
      }
      break;
    case "threewordsdata":
      threewords.text = evt.data.newValue;
      break;
  }
}