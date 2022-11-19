const inboxClick = document.querySelector('.inbox');
const todayClick = document.querySelector('.today');
const thisWeekClick = document.querySelector('.thisWeek');
const addProjClick = document.querySelector('.addProj');
const btnTodosClick = document.querySelector('.btnTodos');
//under here the tasks are going to be added
const addToElement = document.querySelector('.containerTasks');
const title = document.createElement('p');
const description = document.createElement('p');

const dueDate = document.createElement('p');



let  todoes = {
    title:       "",
    description: "" ,
    dueDate:     "" , 
}

function addTasks(){
 todoes.title = "mow the lawn"   
 todoes.description = "First by gas"   
 todoes.dueDate = "this Saturday"   
 title.innerText = `Title: ${todoes.title}`;
 title.classList.add('paraTaskAdded');
 addToElement.appendChild(title);

 description.innerText = `Description: ${todoes.description}`;
 description.classList.add('paraTaskAdded');
 addToElement.appendChild(description);

 dueDate.innerText = `dueDate: ${todoes.dueDate}`;
 dueDate.classList.add('paraTaskAdded');
 addToElement.appendChild(dueDate);
}


let buttonAddTaskEvent = document.querySelector('.btnTodos').addEventListener('click', buttonAddTask);

function buttonAddTask(e){
    addTasks();

}

