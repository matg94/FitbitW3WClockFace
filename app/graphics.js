import document from "document";
import "datetime";

let background = document.getElementById("background");
let circle = document.getElementById("background-circle");
let heart = document.getElementById("hearticon");
let centraldot = document.getElementById("centraldot");

let time = document.getElementById("time");
let date = document.getElementById("date");
let hr = document.getElementById("heart");
let threewords = document.getElementById("threewords");


function updateClockAndDate(timeString, dateString) {
  time.text = timeString;
  date.text = dateString;
}

const handleStatusChange = (evt) => {
  if (!evt.data.newValue) {
    return
  }
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
    case "textWhite":
      if (JSON.parse(evt.data.newValue) == true) {
        time.style.fill = "white";
        date.style.fill = "white";
        hr.style.fill = "white";
        threewords.style.fill = "white";
      } else {
        time.style.fill = "black";
        date.style.fill = "black";
        hr.style.fill = "black";
        threewords.style.fill = "black";
      }
      break;
    case "threewords":
      if (JSON.parse(evt.data.newValue) == true) {
        threewords.style.display = "inline";
      } else {
        threewords.style.display = "none";
      }
      break;
    case "threewordsdata":
      threewords.text = JSON.parse(evt.data.newValue);
      break;
  }
}


messaging.peerSocket.onmessage = handleStatusChange