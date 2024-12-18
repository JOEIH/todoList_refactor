let timeStamp = document.querySelector('#time-stamp');
let yearStamp = document.querySelector('#year-stamp');

// 시간 출력
const showTime = () => {
  if (!timeStamp || !yearStamp) return;
  let now: Date = new Date();

  let year = now.getFullYear();
  let hour = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let second = now.getSeconds().toString().padStart(2, '0');

  timeStamp.textContent = `${hour} : ${minutes} : ${second}`;
  yearStamp.textContent = `${year}`;
}

showTime();
setInterval(showTime, 1000)


