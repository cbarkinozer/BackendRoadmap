
function newElement() {
  const exit = document.createElement("span");
    exit.innerText="x"
    const li = document.createElement("li")
    const taskValue = document.getElementById("task").value
    const valueTag = document.createElement("span");
    valueTag.innerText =  (taskValue === "" || taskValue === null ) ? null : taskValue
    li.append(valueTag)
    const taskList = document.getElementById("list")
    li.appendChild(exit)
    li.onclick = () => done(li)
    exit.onclick= () => exit.parentElement.remove();

    if(taskValue !== "" && taskValue !== null){
        document.querySelector("#liveToast").className="toast show"
        setTimeout(()=> document.querySelector(
            "#liveToast").className="toast",3000)
        taskList.appendChild(li);
    }else{
        const warning = document.querySelector("#liveToastNull");
        warning.className="toast error show"
        setTimeout(()=> warning.className="toast error hide",2000)
    }

    document.getElementById("task").value=""

}

function deleteElement(exit){
  console.log(exit)
  exit.parentElement.remove()
}
function done(element){
element.lastChild.onclick= () => element.lastChild.parentElement.remove()
}
