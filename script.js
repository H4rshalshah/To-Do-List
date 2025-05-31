// script.js
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && taskInput.value.trim() !== "") {
    addTask(taskInput.value.trim());
    taskInput.value = "";
  }
});

function addTask(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete-btn">Delete</button>
  `;
  taskList.appendChild(li);

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.style.animation = "fadeOut 0.3s ease-in-out forwards";
    setTimeout(() => li.remove(), 300);
  });
}
