let todocounter =0
function onReady() {
  console.log('Javascript still works! What a gosh darn relief.');
}

function handleSubmit(event) {
  //stop the form from taking over, refreshing
  event.preventDefault();
  
  console.log(`did this work?`);

  let todoText = document.getElementById(`todo-text`).value;
  let todoAuthor = document.getElementById(`todo-author`).value;

  //set the value to be an empty string
  document.getElementById(`todo-text`).value = "";
  document.getElementById(`todo-author`).value = "";

  console.log(todoAuthor, todoText);

  let todoList = document.getElementById('todoList');

  todoList.innerHTML += `
  <li>
    <button onclick="deleteTodo(event)">❌</button>
    ${todoText} ${todoAuthor}
    </li>
    `
  todocounter++;
  
  document.getElementById(`todocounter`).textContent = todocounter;
  console.log(todocounter);
}
function deleteTodo(event) {
  event.target.parentElement.remove();
  todocounter--;
  console.log(todocounter);

  document.getElementById(`todocounter`).textContent = todocounter;
}
onReady();