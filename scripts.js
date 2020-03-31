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
  }
]
console.log(arrayOfTodos[0].userId) 
console.log(arrayOfTodos[1].userId)
console.log(arrayOfTodos[0].id)
console.log(arrayOfTodos[1].id)
console.log(arrayOfTodos[0].title)
console.log(arrayOfTodos[1].title)
console.log(arrayOfTodos[0].completed)
console.log(arrayOfTodos[1].completed)

}

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

const list = document.getElementById("todo-list")

  // function myFunction() {
  //   var para =document.createElement("P");
  //   para.innerHTML ="This is a paragraph.";
  //   document.getElementById("myDIV").appendChild(para);
  // }


//   const element = () =>{
//      document.createElement("list") }
  
//   function myFunction() {
//   var ol =document.createElement("li");
//   ol.innerHTML ="This is a list.";
//   document.getElementById("todo-list").appendChild(ol);
// }

// arrayOfTodos iterate i . title
element.innerhtml = arrayOfTodos[i].title
++ i < arrayOfTodos.length

  const populateTodos = () => {
     
  }