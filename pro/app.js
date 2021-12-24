//UI variables
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");

//Load all event listeners
loadEventListers();

//Load all event listeners
function loadEventListers() {
	//Add task event
	form.addEventListener("submit", addTask);

	//remove task event
	taskList.addEventListener("click", removeTask);

	//Clear task event
	clearBtn.addEventListener("click", clearTasks);

	//Filter tasks
	filter.addEventListener("keyup", filterTasks);
}

//Add task
function addTask(e) {
	e.preventDefault();
	if (taskInput.value === "") {
		alert("Add a task");
	}

	const li = document.createElement("li");
	li.className = "collection-item";
	li.appendChild(document.createTextNode(taskInput.value));

	const link = document.createElement("a");
	link.className = "delete-item secondary-content";
	link.innerHTML = '<i class="fa fa-remove"></i>';
	li.appendChild(link);
	taskList.appendChild(li);

	//Clear input
	taskInput.value = "";
}

//Remove task
function removeTask(e) {
	if (e.target.parentElement.classList.contains("delete-item")) {
		if (confirm("Are you sure")) {
			e.target.parentElement.parentElement.remove();
		}
	}
}

//Clear Tasks
function clearTasks() {
	/* taskList.innerHTML = ""; */

	//Faster
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

//Filer Tasks
function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	document.querySelectorAll("li").forEach((task) => {
		const item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = "block";
		} else {
			task.style.display = "none";
		}
	});
}
