const inboxClick = document.querySelector('.inbox');
const todayClick = document.querySelector('.today');
const thisWeekClick = document.querySelector('.thisWeek');
const addProjClick = document.querySelector('.addProj');
const btnTodosClick = document.querySelector('.btnTodos');
//under here the tasks are going to be added
const addToElement = document.querySelector('.containerTasks');

//under here the projects are going to be added
const addToElementProj = document.querySelector('.containerProjs');


// variables for when adding a task
const title = document.createElement('p');
const description = document.createElement('p');
const dueDate = document.createElement('p');





let  todoes = {
    title:       "",
    description: "" ,
    dueDate:     "" , 

}

// create the input space for adding tasks 

function createElementsForTaskInput(){
    // creating the space to get input from the user; 
    const createForm = document.createElement('form')
    createForm.classList.add('form');
    addToElement.appendChild(createForm);
    const addToForm = document.querySelector('.form');

   
        function addLabel(label){
        const titleLabel = document.createElement('label')
        titleLabel.textContent = `${label} \n`
        titleLabel.classList.add('paraTaskAdded');
        addToForm.appendChild(titleLabel);
       
        }

             addLabel("Title")
            const titleInput = document.createElement('input');
            titleInput.placeholder = "Type task name here..";
            titleInput.type = "text"
            titleInput.required = "true"
            addToForm.appendChild(titleInput);

            addLabel("Description")
            const descriptionInput = document.createElement('input');
            descriptionInput.placeholder = "Type description";
            descriptionInput.type = "text"
            descriptionInput.required = "true"
            addToForm.appendChild(descriptionInput);

            addLabel("dueDate")
            const dueDateInput = document.createElement('input');
            dueDateInput.type = "date"
            dueDateInput.required = "true"
            addToForm.appendChild(dueDateInput);

            
            const addTaskButton = document.createElement('button');
            addTaskButton.classList.add('buttonAddTask');
            addTaskButton.textContent  = "+ Add Task"
            addToForm.appendChild(addTaskButton);




//         <form>
//       <label for="name">Name:</label>
//       <input type="text" id="name" name="name" placeholder="Name"><br/>
//       <label>Email: <input type="email" name="email" placeholder="email"></label><br/>
//       <label for="birth">Birth : </label>
//       <input type="date" id="birth" value="birth"><br/>

//         <input type="submit" value="ClickHere">

//   </form>


  
}
let buttonAddTaskEvent = document.querySelector('.btnTodos').addEventListener('click', buttonAddTask);

function buttonAddTask(){
    createElementsForTaskInput();

}


// create the input space for adding projects


function createElementsForProjInput(){
    // creating the space to get input from the user; 
    const createForm = document.createElement('form')
    createForm.classList.add('formProj');
    addToElementProj.appendChild(createForm);
    const addToForm = document.querySelector('.formProj');

   
        function addLabel(label){
        const titleLabel = document.createElement('label')
        titleLabel.textContent = `${label} \n`
        titleLabel.classList.add('paraTaskAdded');
        addToForm.appendChild(titleLabel);
       
        }

             addLabel("Title")
            const titleInput = document.createElement('input');
            titleInput.placeholder = "Type task name here..";
            titleInput.type = "text"
            titleInput.required = "true"
            addToForm.appendChild(titleInput);

            addLabel("Description")
            const descriptionInput = document.createElement('input');
            descriptionInput.placeholder = "Type description";
            descriptionInput.type = "text"
            descriptionInput.required = "true"
            addToForm.appendChild(descriptionInput);

            addLabel("dueDate")
            const dueDateInput = document.createElement('input');
            dueDateInput.type = "date"
            dueDateInput.required = "true"
            addToForm.appendChild(dueDateInput);

            
            const addTaskButton = document.createElement('button');
            addTaskButton.classList.add('buttonAddTask');
            addTaskButton.textContent  = "+ Add Task"
            addToForm.appendChild(addTaskButton);




//         <form>
//       <label for="name">Name:</label>
//       <input type="text" id="name" name="name" placeholder="Name"><br/>
//       <label>Email: <input type="email" name="email" placeholder="email"></label><br/>
//       <label for="birth">Birth : </label>
//       <input type="date" id="birth" value="birth"><br/>

//         <input type="submit" value="ClickHere">

//   </form>


  
}
let buttonAddProjEvent = document.querySelector('.addProj').addEventListener('click', buttonAddProject);

function buttonAddProject(){
    createElementsForProjInput();

}
