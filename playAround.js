let taskNameInput = $("#taskNameInput")
let completedTasksDiv = $("#completedTasksDiv")
let pendingTasksDiv = $("#pendingTasksDiv")

$("#submitTaskButton").click(() => {
    let taskItemDiv = $("<div>")
    let checkBox = $('<input type="checkbox" />')

    checkBox.click(() =>  {
        if (checkBox.is(":checked")) { 
            completedTasksDiv.append(checkBox.parent())
        }
        else {
            pendingTasksDiv.append(checkBox.parent())
        }
    })

    let task = taskNameInput.val()
    taskItemDiv.append(task)
    taskItemDiv.append(checkBox) 
    taskItemDiv.append($("<button onclick='this.parentElement.remove()'>Remove</button>"))
    pendingTasksDiv.append(taskItemDiv)
})
