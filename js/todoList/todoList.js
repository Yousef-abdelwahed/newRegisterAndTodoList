const inputTask=document.querySelector(".inputTask");
const btnAddTask=document.querySelector(".btnAddTask");
var containTask;
var currentTask=0;
//focuse on load
window.onload=function(){
    inputTask.focus();
    resetDataFromstorage();
    const x =[...window.location.href]
    // console.log(x.slice(60,100).join(""))
    console.log(x.slice(x.indexOf("&")+1).join(""))
}

function resetDataFromstorage(){
    if(localStorage.getItem("tasks") == null){
        containTask=[];
    }else{
        containTask=JSON.parse(localStorage.getItem("tasks"))
        display();
    }
}
//Events checker 
document.body.addEventListener('keyup',(e)=>{e.preventDefault();checkEvent(e);});
btnAddTask.addEventListener("click",(e)=>{e.preventDefault(); checkEvent(e);});
// if black return Alert Else Display todo List 
function checkEvent(e){

    if(e.code=="Enter" || e.pointerType=="mouse"){
        if(inputTask.value.trim()==""){
            alert("you can't set input task");
        }else{
            if(btnAddTask.innerHTML == `<i class="fa-solid fa-wrench text-warning fa-1x "></i>`){
                updateTask()
            }else{
                addNewTaskRow();
                console.log(btnAddTask.innerHTML)
            }
            
            display();  

            clearTodoField();  
        }      
    }
};
//fiel in arry container 
function addNewTaskRow(){
    task={
        todo_task:inputTask.value
    }
    containTask.push(task);
    localStorage.setItem("tasks",JSON.stringify(containTask));
}
//Display todo List 
function display(){
    // addNewTaskRow();
    var rowsContainer="";
    for (let i=0; i<containTask.length;i++){
        rowsContainer+=`
        <tr>
        <th scope="row">${i+1}</th>
                <td scope="col" class="fw-bold p-3 mx-5 " id="textTask">${containTask[i].todo_task}</td>
                <td><button class="btn btn-success "onclick="doneTask(${i})"><i class="fa fa-check fa-xl" aria-hidden="true"></i> </button></td>
                <td scope="col"><button class="btn btn-dark" onclick="getTaskInfo(${i})"><i class="fa-solid fa-wrench text-warning fa-xl "></i></button></i></td>
                <td scope="col"> <button class="btn btn-danger " onclick="deleteTask(${i})" > <i class="fa fa-times fa-xl" aria-hidden="true"></i></button></td>
                </tr>
                `
    }
    document.getElementById('taskList').innerHTML = rowsContainer;
};
//clear input Field when enter a new task
function clearTodoField(){
    inputTask.value="";
}
// delete the pointer task
function deleteTask(index){
    containTask.splice(index,1);
   display();
   localStorage.setItem("tasks",JSON.stringify(containTask))
};
// information for referred row
function  getTaskInfo(index){
        currentTask=index;
        var  task=containTask[index];
        inputTask.value=task.todo_task;
        btnAddTask.innerHTML=`<i class="fa-solid fa-wrench text-warning fa-1x "></i>`;
        btnAddTask.classList.add("bg-dark");
};

function updateTask(){
    var    task={
        todo_task:inputTask.value
    }
    containTask[currentTask].todo_task=task.todo_task;
    console.log(currentTask)
    localStorage.setItem("tasks",JSON.stringify(containTask));
    btnAddTask.innerHTML=`<i class="fa-solid fa-plus"></i>`;
    btnAddTask.classList.remove("bg-dark");
}

//Done Task
function doneTask(index){
    const textTask=document.querySelectorAll("#textTask");
    console.log(textTask[index])
    textTask[index].classList.toggle("complete");
    clearTodoField();
}

