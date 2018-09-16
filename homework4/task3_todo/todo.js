var taskDoneCounter = 0;
var taskLeftToDoCounter = 0;
var taskId = 1;
document.getElementById("addTaskBtn").onclick = addTask;
document.getElementById("delSelectedBtn").onclick = deleteSelectedTasks;
document.getElementById("selectAll").addEventListener("change", selectAll);

function addTask() {
    if (getTaskContent().length == 0) {
        alert("Input some task.")
        return;
    }
    var divBlock = document.createElement("div");

    divBlock.className = "taskDiv";
    divBlock.appendChild(createInput("checkbox", "checker", ""));
    divBlock.appendChild(createP("taskContent", getTaskContent()));

    var divChild = document.createElement("div");
    divChild.appendChild(createInput("button", "taskDoneBtn", "done"));
    divChild.appendChild(createInput("button", "delTaskBtn", "delete"));
    divBlock.appendChild(divChild);
    divBlock.id = "taskDiv" + taskId;
    taskId++;
    taskLeftToDoCounter++;
    updateInfo();

    document.getElementById("taskList").appendChild(divBlock);
    document.getElementById("taskInput").value = "";
}

function getTaskContent() {
    return document.getElementById("taskInput").value;
}

function createP(className, content) {
    var element = document.createElement("p");
    element.className = className;
    var contentElement = document.createTextNode(content);
    element.appendChild(contentElement);
    return element;
}

function createInput(type, className, value) {
    var element = document.createElement("input");
    switch (className) {
        case "delTaskBtn":
            element.addEventListener("click", deleteTask);
            break;
        case "taskDoneBtn":
            element.addEventListener("click", doneTask);
            break;
        default:
            break;
    }
    element.type = type;
    element.className = className;
    if (value.length > 0)
        element.value = value;
    return element;
}

function deleteTask() {
    document.getElementById("taskList").removeChild(this.parentNode.parentNode);
    taskLeftToDoCounter--;
    updateInfo();
}

function doneTask() {
    var children = this.parentNode.parentNode.childNodes;
    var doneImgElement = document.createElement("img");
    doneImgElement.src = "done.png";
    this.parentNode.parentNode.replaceChild(doneImgElement, children[0]);
    this.disabled = true;
    this.nextElementSibling.disabled = true;
    taskDoneCounter++;
    taskLeftToDoCounter--;
    updateInfo();
}

function deleteSelectedTasks() {
    var checkboxArr = document.getElementsByClassName("checker");
    for (var i = 0; i < checkboxArr.length; i++) {
        if (checkboxArr[i].checked) {
            document.getElementById("taskList").removeChild(checkboxArr[i].parentNode);
            i--;
            taskLeftToDoCounter--;
        }
    }
    updateInfo();
}

function selectAll() {
    var checkerArr = document.getElementsByClassName("checker");
    var checked = false;
    if (this.checked)
        checked = true
    else
        checked = false;
    for (var i = 0; i < checkerArr.length; i++) {
        checkerArr[i].checked = checked;
    }
}

function updateInfo(){
    document.getElementById("tasksLeftToDoCounter").innerText = taskLeftToDoCounter;
    document.getElementById("taskDoneCounter").innerText = taskDoneCounter;
}