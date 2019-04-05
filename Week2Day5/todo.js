var newTask = document.querySelector('#yourTask')
var dueDate = document.querySelector('#dateDue')
var addTaskButon = document.querySelector('#taskSubmit');
var toDoList = document.querySelector('.toDo');
var completeList = document.querySelector('.complete');
function createNewTask(task){
 console.log("Creating the task")
 var listItem = document.createElement('li');
 var checkbox = document.createElement('input');
 var label = document.createElement('label');
 label.innerText = task;
 checkbox.type = 'checkbox';
 listItem.append(checkbox);
 listItem.append(label)
 return listItem;
};
var taskSubmit = document.querySelector('#taskSubmit');
taskSubmit.addEventListener('click', addTask() );
function addTask(){
  var myForm = document.getElementById("myForm").submit(val);
  console.log(myForm);
 console.log("adding to To Do List");
 var listItem = createNewTask(newTask.value);
 toDoList.append(listItem);
 // newTask.value = "";
 //bindIncompleteItems(listItem, completeTask);
}
function completeTask(){
 var listItem = this.parentNode;
 var deleteButton = document.createElement('button');
 deleteButton.innerText = 'Delete';
 deleteButton.className = 'delete';
 listItem.append(deleteButton);
 var checkbox = listItem.querySelector('input[type=checkbox');
 checkbox.remove();
 toDoList.append(listItem);
 //bindCompleteItems(listItem, deleteTask);
}
function deleteTask(){
 console.log('deleteing task');
 var listItem = this.parentNode;
 var ul = listItem.parentNode;
 ul.remove('listItem');
}
//var bindIncompleteItems = function(taskItem, checkBoxClick){
//  console.log('binding incomplete list')
//  var checkbox = taskItem.querySelector('input[type=checkbox]');
//  checkbox.onchange = checkBoxClick;
//}
//var bindCompleteItems = function(taskItem, deleteButtonPress){
//  console.log("")
//}
