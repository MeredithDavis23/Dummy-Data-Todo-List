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
// element.innerhtml = arrayOfTodos[i].title
// ++ i < arrayOfTodos.length

  const populateTodos = () => {
     for (let i = 0; i < arrayOfTodos.length; i++) {
      let element = document.createElement('li')
      let text = document.createTextNode(arrayOfTodos[i].title)
      element.appendChild(text)
      console.log(element)
      list.appendChild(element)
       }
    }

  