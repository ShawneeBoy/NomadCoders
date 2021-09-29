const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".title");
let username = "";

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";


function onLoginSubmit(e){  
  e.preventDefault();
  username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.innerHTML = `Welcome back, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASS);
}

function resetUsername(e){
  console.log("clicked!");
  loginInput.value = "";
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASS);
  greeting.classList.add(HIDDEN_CLASS);
}

loginForm.addEventListener("submit", onLoginSubmit);
greeting.addEventListener("click", resetUsername);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
  // Do nothing, show input form.

} else {
  loginForm.classList.add(HIDDEN_CLASS);
  greeting.innerHTML = `Welcome back, ${savedUsername}.`;
  greeting.classList.remove(HIDDEN_CLASS);
}
