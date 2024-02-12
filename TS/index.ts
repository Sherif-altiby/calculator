let myInput: HTMLInputElement = document.getElementsByClassName("input")[0] as HTMLInputElement,
    addBtn: HTMLDivElement = document.getElementsByClassName("add_task_btn")[0] as HTMLDivElement,
    addBtnComplete: HTMLDivElement = document.getElementsByClassName("complete")[0] as HTMLDivElement,
    addBtnNotComplete: HTMLDivElement = document.getElementsByClassName("not_complete")[0] as HTMLDivElement,
    addBtnAll: HTMLDivElement = document.getElementsByClassName("all")[0] as HTMLDivElement,
    tasksContainer: HTMLDivElement = document.getElementsByClassName("tasks_container")[0] as HTMLDivElement,
    btnDone: NodeListOf<Element>;

 
    
type taskObj = {
      id: number,
      taskText: string,
      complete: boolean
    }
    
let myArr: taskObj[] = []


const createTaskObj = (value: string): void => {
      let date = new Date();
        
      let taskObj: taskObj = {
         id: date.getTime(),
         taskText: value,
         complete: false
      }
       myArr.push(taskObj)
       let arrJSON = JSON.stringify(myArr)
       localStorage.setItem("tasks", arrJSON)
    }

addBtn.addEventListener("click", ()=> {
      if(myInput.value.length > 0 && myInput.value !== null){
        tasksContainer.innerHTML = ""
        createTaskObj(myInput.value)
        createTask(myArr)
      } 
    })
    
    
const createTask = (value: {id: number, taskText: string, complete: boolean}[]) => {
      value.map((item) => {
      let task = document.createElement("div");
      task.className = "task";
      task.id = (item.id).toString();
      
      let taskP = document.createElement("p");
      taskP.innerText = item.taskText;
      task.appendChild(taskP);
      if(item.complete === true){
        taskP.style.textDecoration = "line-through"
      }

      let doneBtn = document.createElement("div");
      doneBtn.innerText = "Done";
      doneBtn.className = "make_task_done";
      task.appendChild(doneBtn);

      tasksContainer.appendChild(task);
      btnDone = document.querySelectorAll(".tasks_container .make_task_done")

    })
}


if(localStorage.getItem("tasks")){
      let newArr: taskObj[] = JSON.parse(localStorage.getItem("tasks") as string)
      myArr = newArr
      createTask(myArr)
  }
 



   
