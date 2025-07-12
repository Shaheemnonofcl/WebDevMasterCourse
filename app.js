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

    loadFromStorage();
 }  

 

 function addTask(event) {
   event.preventDefault();
   const li = document.createElement('li');
    li.textContent=pageItems.taskInput.value;

   //  li.classList = "list-item";
    pageItems.taskList.appendChild(li);

    pageItems.taskInput.value='';
    pageItems.taskInput.focus();
  saveToStorage()

 }

function completedTask(event){
   event.preventDefault();

   const li = event.target;
   if(li.classList.contains('completed-task')){
      
      li.classList.remove('completed-task');
      pageItems.taskList.appendChild(li)
   }
   else{

      li.classList.add('completed-task');
      pageItems.strikenList.appendChild(li);
      
   }
   
   saveToStorage();
}

function clearCompletedTasks(event){
   event.preventDefault();


   const tasks = document.querySelectorAll('.completed-task')
   tasks.forEach((el)=>{
      el.remove();
   })

   saveToStorage();
}

function saveToStorage(){

   const taskList = Array.from(pageItems.taskList.children);
  const taskText= taskList.map(el=>{
       return el.innerText;
   })
   
   const strikenList = Array.from(pageItems.strikenList.children);
   const strikenText = strikenList.map(el=>{
      return el.innerText;
   })

   localStorage.setItem('tasklist',JSON.stringify(taskText));
   localStorage.setItem('strikenlist',JSON.stringify(strikenText));
}

function loadFromStorage(){
 const taskListString =  localStorage.getItem('tasklist');
 const strikenListString =  localStorage.getItem('strikenlist');

const taskList = JSON.parse(taskListString);
const strikenList = JSON.parse(strikenListString);
   
   taskList.forEach(el=>{
      const li = document.createElement('li');
      li.innerText = el;
      pageItems.taskList.appendChild(li);

   })  
   
   strikenList.forEach(el=>{
      const li = document.createElement('li');
      li.innerText = el;
      li.classList.add('completed-task');
      pageItems.strikenList.appendChild(li);

   })


}


})(window.app = window.app || {});

