const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  greetingName = greeting.querySelector(".js-username");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
  // greeting.classList.remove(SHOWING_CN)
}
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greetingName.innerText = `${text}`;
}
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}
function init() {
  loadName();
  input.addEventListener("focus", function() {
    const desc = document.createElement("span");
    desc.classList.add("desc");
    desc.innerText = `Please press enter key.`;
    form.appendChild(desc);
  });
  input.addEventListener("blur", function() {
    form.removeChild(document.querySelector(".desc"));
  });
}

init();
