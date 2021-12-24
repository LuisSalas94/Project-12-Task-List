//UI variables
/* #task-form, #task,  .collection, .clear-tasks, #filter*/
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

loadEventListers();

function loadEventListers() {
	//add task event
	form.addEventListener("submit", addTask);

	//Remove task
	taskList.addEventListener("click", removeTask);

	//CLear task event
	clearBtn.addEventListener("click", clearTasks);

	//Filter tasks
	filter.addEventListener("keyup", filterTasks);
}

//Add task
function addTask(e) {
	e.preventDefault();

	if (taskInput.value) {
		const li = document.createElement("li");
		li.classList.add("collection-item");
		const taskContent = document.createTextNode(taskInput.value);
		li.appendChild(taskContent);

		const link = document.createElement("a");
		link.classList = "delete-item secondary-content";
		link.innerHTML = '<i class="fa fa-remove"></i>';
		li.appendChild(link);
		taskList.appendChild(li);
		//clear input
		taskInput.value = "";
	} else {
		alert("Add a task");
	}
}

//Remove task
function removeTask(e) {
	if (e.target.parentElement.classList.contains("delete-item")) {
		if (confirm("Are you sure")) {
			e.target.parentElement.parentElement.remove();
		}
	}
}

//Clear tasks
function clearTasks() {
	/* 	taskList.innerHTML = ""; */

	//Faster way
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

//Filter Tasks
function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	const li = document.querySelectorAll("li");
	li.forEach((task) => {
		const content = task.firstChild.textContent;
		content.toLowerCase().indexOf(text) !== -1
			? (task.style.display = "block")
			: (task.style.display = "none");
	});
}
