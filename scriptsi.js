document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Function to Add Task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        // Create List Item
        const listItem = document.createElement("li");
        listItem.classList.add("task-item");

        // Create Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // Create Task Text
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Append Elements
        listItem.appendChild(checkbox);
        listItem.appendChild(taskSpan);
        taskList.appendChild(listItem);

        // Clear Input
        taskInput.value = "";

        // Mark Task as Completed
        checkbox.addEventListener("change", function () {
            if (this.checked) {
                listItem.classList.add("completed");
            } else {
                listItem.classList.remove("completed");
            }
        });
    }

    // Add Task Button Event
    addTaskBtn.addEventListener("click", addTask);

    // Allow Enter Key to Add Task
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
