Creating a Button That Adds and Deletes Todos  
--HTML--  
```html
<input type="text">
<button>Add Todo</button>

<ul></ul>
```

--Pure JS--
```js
//Getting dom elements from their types
var inputElement = document.querySelector('input');
var buttonElement = document.querySelector('button');
var ulElement = document.querySelector('ul');

var todos =[];

//Event listener runs addTodo when click
buttonElement.addEventListener('click',addTodo);

function addTodo(){
	
  var userInput = inputElement.value; //buttonElement's value
  if(userInput.trim()==''){
  	return
  }
  
  var newTodo = {id:Math.random(),value:userInput};
  todos.push(newTodo);
  var liElement = document.createElement('LI'); //Create li element
  liElement.textContent = userInput; //its text is the user input
  liElement.addEventListener('click',removeTodo);
  todoLi.dataset.id = newTodo.id;
  ulElement.appendChild(liElement); //add li to ul
}

function removeTodo(event){
var clickedLi = event.target;
var itemId = clickedLi.dataset.id;
for(var i = 0;i<todos.length;i++){
if(todos[i].id == item.id){
  todos.splice(i,1);
  break;
}
}
clickedLi.parentNode.removeChild(clickedLi);
}
```
