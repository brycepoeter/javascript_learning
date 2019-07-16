let taskList = document.getElementById("taskList")
let tasksToDo = document.getElementById("tasksToDo")
let enterTaskBox = document.getElementById("enterTaskBox")

function removeElement(elementID) {
    let element = document.getElementById("elementID")
    element.parentNode.removeChild(element)
}

submitButton.addEventListener("click", function() {console.log("Button pressed")
    let task = enterTaskBox.value
    console.log(task)
    let taskDiv = document.createElement("div")
    let taskItemSpan = document.createElement("span")
    let taskItemCheckBox = document.createElement("input")
    let removeTaskButton = document.createElement("button")
    removeTaskButton.setAttribute("class", "removeButton")
    taskItemCheckBox.setAttribute("type", "checkbox")
    removeTaskButton.innerHTML = "Remove task"

    taskItemSpan.innerHTML = task 
    taskDiv.appendChild(taskItemCheckBox)
    taskDiv.appendChild(taskItemSpan)
    taskDiv.appendChild(removeTaskButton)
    tasksToDo.appendChild(taskDiv)

 
}



)
