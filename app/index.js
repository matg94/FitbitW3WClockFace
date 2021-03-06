import clock from 'clock';
import { updateClockAndDate, handleStatusChange, updateHeartRate } from './graphics.js';
import * as messaging from "messaging";
import { HeartRateSensor } from "heart-rate";

const months = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec'
}

console.log(HeartRateSensor);

const heartRateMonitor = new HeartRateSensor();

heartRateMonitor.addEventListener("reading", () => {
  updateHeartRate(heartRateMonitor.heartRate);
})

heartRateMonitor.start();

clock.granularity = "minutes";

clock.addEventListener("tick", (evt) => {
  let date = evt.date;
  let offset = evt.date.getTimezoneOffset() * 60 * 1000;
  date = date.setTime(date - offset);
  const dateString = months[date.getMonth()] + ' ' + date.getDate();
  const timeString = date.toTimeString();
  updateClockAndDate(timeString, dateString);
});


messaging.peerSocket.onclose = function() {
  console.log("SOCKER IS CLOSED");
}

messaging.peerSocket.onopen = function() {
  console.log("SOCKET IS OPEN");
}

// Listen for the onmessage event
messaging.peerSocket.onmessage = function(evt) {
  handleStatusChange(evt);
}

// Listen for the onerror event
messaging.peerSocket.onerror = function(err) {
  // Handle any errors
  console.log(err);
}