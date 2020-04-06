const element = document.getElementById("todo-list")

// let filteredTodos = [];
// let filterCompleteTodos = [];

// var isCompleted = true
// var isNotCompleted = false

// Number(document.getElementById('id-input').value)

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
 }
 
// const filterTodos = () {
//   idNumber = Number(document.getElementById('id-input').value)
//     if (idInput > 0 && idInput < 11) {
//       filteredTodos = arrayOfTodos.filter(array => array.userId == idNumber)
//       correctInput = true
//       isFiltered = true
//     } else { 
//       correctInput = false 
//     }

//     if (isPopulated && correctInput) {
      // const listContent = document
    // }
 
// const filterCompleteTodos = isCompleted => {
//   filterTodos()

//   if (correctInput) {
//     filterCompleteTodos = filteredTodos.filter(
//       array => array.completed == isCompleted
//     )
//     for (let i = 0; i < filterCompleteTodos.length; i++) {
//       if (!isCompleted) {
//         element.style.setProperty('color', 'red')
//       }
//       element.appendChild(document.createTextNode(filterCompleteTodos[i].title))
//       list.append(element)
//     }
//   }
// }
 
  // const populateTodos = () => {
  //    for (let i = 0; i < arrayOfTodos.length; i++) {
  //     let listItem = document.createElement('li');
  //     let textNode = document.createTextNode(arrayOfTodos[i].title);
  //     listItem.appendChild(textNode);
  //     let element = document.getElementById('todo-list');
  //     element.appendChild(listItem);
  //     if (arrayOfTodos[i].completed ==false) {
  //       listItem.classList.add(".redText")
  //       } else {
  //         listItem.classList.add(".greenText")
  //       }
  