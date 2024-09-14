addButton = document.getElementById("add-task-btn");
listId = document.getElementById("todo-list");
taskInput = document.getElementById("task-input");

const addTask = () => {
  // creating a new li child.
  const newTask = document.createElement("li");

  // adding the task
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskInput.value;
  newTask.appendChild(taskSpan);

  //adding the done button
  const doneBtn = document.createElement("button");
  doneBtn.textContent = "done";
  doneBtn.classList.add("done-btn");
  newTask.appendChild(doneBtn);

  //adding the edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  newTask.appendChild(editBtn);

  //adding the delete button
  const dltBtn = document.createElement("button");
  dltBtn.textContent = "Delete";
  dltBtn.classList.add("delete-btn");
  newTask.appendChild(dltBtn);

  //adding the whole li to the ul
  listId.appendChild(newTask);
  taskInput.value = "";

  doneBtn.addEventListener("click", () => {
    taskSpan.classList.add("overlined");
  });

  dltBtn.addEventListener("click", () => {
    newTask.remove();
  });

  editBtn.addEventListener("click", () => {
    if (editBtn.textContent === "Edit") {
      editBtn.textContent = "Save";
      taskSpan.contentEditable = true;
      taskSpan.focus();
      taskSpan.style.backgroundColor = "#f0f0f0";
    } else {
      editBtn.textContent = "Edit";
      taskSpan.contentEditable = false;
      taskSpan.style.backgroundColor = "";
    }
  });
};

addButton.addEventListener("click", addTask);
