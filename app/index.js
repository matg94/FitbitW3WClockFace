import clock from 'clock';
import { updateClockAndDate, handleStatusChange } from './graphics.js';
import * as messaging from "messaging";

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

clock.granularity = "minutes";

clock.addEventListener("tick", (evt) => {
  let date = new Date();
  const dateString = months[date.getMonth()] + ' ' + date.getDate();
  const timeString = evt.date.toTimeString().slice(0, -4);
  updateClockAndDate(timeString, dateString);
});

messaging.peerSocket.onmessage = handleStatusChange