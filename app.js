const todoForm = document.querySelector('.form-add-todo')
const taskContainer = document.querySelector('.todos-container')
const searchTaskForm = document.querySelector('.form-search')

const sendTask = (event) => {
	event.preventDefault()
	const inputTask = event.target.add.value.trim()

	if (inputTask.length) {
		taskContainer.innerHTML += ` 
		<li class="list-group-item d-flex justify-content-between align-items-center">
			<span>${inputTask}</span>
			<i class="far fa-trash-alt delete"></i>
		</li>`
	}
	todoForm.reset()
}
const removeTask = (event) => {
	const trashBin = document.querySelectorAll('.delete')
	const clickedElement = event.target

	trashBin.forEach((task) => {
		if (task == clickedElement) {
			task.parentElement.remove()
		}
	})
}
const searchTask = (event) => {
	event.preventDefault()

	Array.from(taskContainer.children).forEach((item) => {
		if (!item.textContent.includes(event.target.value.trim().toLowerCase())) {
			item.classList.remove('d-flex')
			item.classList.add('d-none')
		} else if (!event.target.length) {
			item.classList.remove('d-none')
			item.classList.add('d-flex')
		}
	})
}

todoForm.addEventListener('submit', sendTask)
taskContainer.addEventListener('click', removeTask)
searchTaskForm.addEventListener('input', searchTask)
