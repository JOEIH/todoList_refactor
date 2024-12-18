let timeStamp = document.querySelector('#time-stamp');
let yearStamp = document.querySelector('#year-stamp');

let now: Date = new Date();

const showYear = () => {
  if (!yearStamp) return;

  let year = now.getFullYear();

  yearStamp.textContent += `${year}`
}

const showTime = () => {
  if (!timeStamp) return;

  let hour = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');

  timeStamp.textContent += `${hour} : ${minutes}`;
}

showYear();
showTime();
setInterval(showTime, 60000);

