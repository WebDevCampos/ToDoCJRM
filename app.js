const todoForm = document.querySelector('.form-add-todo')

const taskContainer = document.querySelector('.todos-container')

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
	const clickedElement = event.target

	if (Array.from(clickedElement.classList).includes('delete')) {
		clickedElement.parentElement.remove()
	}
}

todoForm.addEventListener('submit', sendTask)

taskContainer.addEventListener('click', removeTask)
