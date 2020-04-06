const element = document.getElementById("todo-list")

let filteredTodos = [];

var isPopulated = false;

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

 const populateTodos = () => {
   for (let i = 0; i < arrayOfTodos.length; i++) {
     let list = document.createElement('li');
     let text = document.createTextNode(arrayOfTodos[i].title)
     list.appendChild(text);
     if (!arrayOfTodos[i].completed) {
      list.classList.add("redText");
       } else {
         list.classList.add("greenText");
       }
     element.appendChild(list);
    }
    isPopulated = true;
 }

 const filterTodos = () => {
   if (isPopulated) {
     const lists = document.querySelectorAll('li')
     for (let i = 0; i < filteredTodos.length; i++) {
      element.removeChild(lists[i])
     }
   }
 }
 