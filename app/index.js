import { months } from './datetime';
import clock from 'clock';

clock.granularity = "minutes";

clock.addEventListener("tick", (evt) => {
  let date = new Date();
  const dateString = months[date.getMonth()] + ' ' + date.getDate();
  const timeString = evt.date.toTimeString().slice(0, -4);
  updateClockAndDate(timeString, dateString);
});
