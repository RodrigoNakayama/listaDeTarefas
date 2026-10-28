let arrTasks = []

const itemInput = document.getElementById("item-input")
const addItemInput = document.getElementById("add-item")
const todoList = document.getElementById("todo-list")
const todoItems = todoList.querySelectorAll("li")

addItemInput.addEventListener("click", function(event){
    event.preventDefault()
    if (itemInput.value) {
        addTask(itemInput.value)
        itemInput.value = ""
        itemInput.focus()
    }
})

todoList.addEventListener("click", function(event) {
    let task = event.target
    let action = event.target.getAttribute("action")
    while(task.nodeName !== "LI") {
        task = task.parentElement
    }
    let taskIndex = [...todoItems].indexOf(task)
    let editContainer = task.querySelector(".editContainer")
    let containerEditInput = editContainer.querySelector(".editInput")
    let containerEditButton = editContainer.querySelector(".editButton")
    const actions = {
        checkButton: function() {

        },
        editButton: function() {

        },
        deleteButton: function() {

        },
        containerEditButton: function() {

        },
        containerCancelButton: function() {

        },
    }
})



function addTask(taskName) {

}