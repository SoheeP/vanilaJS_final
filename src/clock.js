const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  let amOrPm = "";
  if (hours >= 12) {
    amOrPm = "P.M";
  } else {
    amOrPm = "A.M";
  }
  clockTitle.innerText = `${amOrPm} ${
    hours < 10 ? `0${hours}` : hours > 12 ? hours - 10 : hours
  }:${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
