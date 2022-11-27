const inputTask=document.querySelector(".inputTask");
const btnAddTask=document.querySelector(".btnAddTask")
let contain=[]
//focuse on load
window.onload=function(){
    inputTask.focus();
}

//if click

btnAddTask.addEventListener("click",()=>{

    if(inputTask.value.trim()==""){
        console.log("you can't set input task");
    }else{
        // let tbodyTage=document.createElement("tbody");
        // tbodyTage.add
        contain.push(inputTask.value)
        var cartona="";
        for (let i=0; i<contain.length;i++){
            cartona+=`
                   <tr>
                   <th scope="row">${i+1}</th>
                    <td scope="col" class="fw-bold p-3">${inputTask.value}</td>
                    <td><button class="btn btn-success "><i class="fa fa-check fa-xl" aria-hidden="true"></i> </button></td>
                    <td scope="col"><button class="btn btn-dark"><i class="fa-solid fa-wrench text-warning fa-xl"></i></button></i></td>
                    <td scope="col"> <button class="btn btn-danger"> <i class="fa fa-times fa-xl" aria-hidden="true"></i></button></td>
                    </tr>
                    `
        }
        document.getElementById('taskList').innerHTML = cartona;
    }
})
// user enter Key
// document.body.addEventListener('keyup',(e)=>{
//     e.preventDefault();
//     if(e.code=="Enter"){
//         add()
//        }
// });