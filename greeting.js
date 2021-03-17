const form = document.querySelector(".js-form")
const input = document.querySelector(".js-input")
const greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser"
const SHOWING_ON = "showing"

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);
    greeting.innerText = `안녕하세요 ${text}!`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();