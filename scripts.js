const list = document.getElementById("todo-list")

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
     let element = document.createElement('li')
     let text = document.createTextNode(arrayOfTodos[i].title)
     list.appendChild(element)
     element.appendChild(text)
     console.log(element)
   }
   if (arrayOfTodos[i].completed==false) {
    text.element.add(".redText")
     } else {
       text.element.add(".greenText")
     }
 }
 
const filterTodos = () {
  
}
 
 
 
  // const populateTodos = () => {
  //    for (let i = 0; i < arrayOfTodos.length; i++) {
  //     let listItem = document.createElement('li');
  //     let textNode = document.createTextNode(arrayOfTodos[i].title);
  //     listItem.appendChild(textNode);
  //     let element = document.getElementById("todo-list");
  //     element.appendChild(listItem);
  //     if (arrayOfTodos[i].completed ==false) {
  //       listItem.classList.add(".redText")
  //       } else {
  //         listItem.classList.add(".greenText")
  //       }
  