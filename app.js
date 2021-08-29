const todoForm = document.querySelector('.form-add-todo')
const taskContainer = document.querySelector('.todos-container')
const searchTaskForm = document.querySelector('.form-search')

const sendTask = (event) => {
	event.preventDefault()
	const inputTask = event.target.add.value.trim()
	const thereIsATask = inputTask.length

	if (thereIsATask) {
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
		const trashBinIsClicked = task == clickedElement
		const taskRemove = task.parentElement

		if (trashBinIsClicked) {
			taskRemove.remove()
		}
	})
}
const searchTask = (event) => {
	Array.from(taskContainer.children).forEach((item) => {
		const thereIsAMatch = !item.textContent
			.toLowerCase()
			.includes(event.target.value.trim().toLowerCase())

		const thereIsNotAValue = !event.target.length
		const classList = item.classList

		if (thereIsAMatch) {
			classList.remove('d-flex')
			classList.add('d-none')
		} else if (thereIsNotAValue) {
			classList.remove('d-none')
			classList.add('d-flex')
		}
	})
}

todoForm.addEventListener('submit', sendTask)
taskContainer.addEventListener('click', removeTask)
searchTaskForm.addEventListener('input', searchTask)
