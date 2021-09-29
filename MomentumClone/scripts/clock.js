const clock = document.querySelector(".clock");

function updateClock(e){
  date = new Date();
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const second = date.getSeconds().toString().padStart(2, "0");
  clock.innerHTML = `${hour}:${minute}:${second}`
}

updateClock();
setInterval(updateClock, 1000);