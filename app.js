(function shaheem(app){
  'use strict';
  const pageItems = {};

 app.todoStartup = function() {
    pageItems.form = document.querySelector('#taskForm');
    pageItems.taskInput = pageItems.form.querySelector('#taskInput');
    pageItems.submitButton = pageItems.form.querySelector('#submitButton');
    pageItems.taskList = document.querySelector('#taskList')
    pageItems.clearTasks = pageItems.form.querySelector('#clearTaskList');
    pageItems.strikenList = document.querySelector('#striken');

    pageItems.submitButton.addEventListener('click',addTask)
    pageItems.taskList.addEventListener('click',completedTask)
    pageItems.strikenList.addEventListener('click',completedTask)
    pageItems.clearTasks.addEventListener('click',clearCompletedTasks)
 }  
 
 function addTask(event) {
   event.preventDefault();
   const li = document.createElement('li');
    li.textContent=pageItems.taskInput.value;

   //  li.classList = "list-item";
    pageItems.taskList.appendChild(li);

    pageItems.taskInput.value='';
    pageItems.taskInput.focus();
 }

function completedTask(event){
   event.preventDefault();

   const li = event.target;
   if(li.classList.contains('completed-task')){

      li.classList.remove('completed-task');
   }
   else{

      li.classList.add('completed-task');
      pageItems.strikenList.appendChild(li);
      
   }
   

}

function clearCompletedTasks(event){
   event.preventDefault();


   const tasks = document.querySelectorAll('.completed-task')
   tasks.forEach((el)=>{
      el.remove();
   })
}


})(window.app = window.app || {});

