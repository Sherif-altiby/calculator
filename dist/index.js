"use strict";
let myInput = document.getElementsByClassName("input")[0], addBtn = document.getElementsByClassName("add_task_btn")[0], addBtnComplete = document.getElementsByClassName("complete")[0], addBtnNotComplete = document.getElementsByClassName("not_complete")[0], addBtnAll = document.getElementsByClassName("all")[0], tasksContainer = document.getElementsByClassName("tasks_container")[0], btnDone;
let myArr = [];
const createTaskObj = (value) => {
    let date = new Date();
    let taskObj = {
        id: date.getTime(),
        taskText: value,
        complete: false
    };
    myArr.push(taskObj);
    let arrJSON = JSON.stringify(myArr);
    localStorage.setItem("tasks", arrJSON);
};
addBtn.addEventListener("click", () => {
    if (myInput.value.length > 0 && myInput.value !== null) {
        tasksContainer.innerHTML = "";
        createTaskObj(myInput.value);
        createTask(myArr);
    }
});
const createTask = (value) => {
    value.map((item) => {
        let task = document.createElement("div");
        task.className = "task";
        task.id = (item.id).toString();
        let taskP = document.createElement("p");
        taskP.innerText = item.taskText;
        task.appendChild(taskP);
        if (item.complete === true) {
            taskP.style.textDecoration = "line-through";
        }
        let doneBtn = document.createElement("div");
        doneBtn.innerText = "Done";
        doneBtn.className = "make_task_done";
        task.appendChild(doneBtn);
        tasksContainer.appendChild(task);
        btnDone = document.querySelectorAll(".tasks_container .make_task_done");
    });
};
if (localStorage.getItem("tasks")) {
    let newArr = JSON.parse(localStorage.getItem("tasks"));
    myArr = newArr;
    createTask(myArr);
}
