Creating a Button That Adds Todo  
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

//Event listener runs addTodo when click
buttonElement.addEventListener('click',addTodo);

function addTodo(){
	
  var userInput = inputElement.value; //buttonElement's value
  if(userInput.trim()==''){
  	return
  }
  var liElement = document.createElement('LI'); //Create li element
  liElement.textContent = userInput; //its text is the user input
  ulElement.appendChild(liElement); //add li to ul

}
```
