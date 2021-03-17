const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = document.querySelector(".js-toDoInput");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text){
    console.log(text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadTodos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init() {
    loadTodos();
    toDoForm.addEventListener("submit", handleSubmit)
}

init();