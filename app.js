const addToDo = document.querySelector('.form-add-todo')
const ul = document.querySelector('.todos-container')

const sendToDo = (event) => {
	event.preventDefault()

	const task = event.target.add.value.trim()

	// Se o imput não estiver vazio, envia o valor do input
	if (task.length) {
		ul.innerHTML += ` 
	<li class="list-group-item d-flex justify-content-between align-items-center">
		<span> ${task} </span>  
		<i class="far fa-trash-alt delete">	</i>
	</li>`
	}
	event.target.reset()
} //Envio de afazeres / Send to-do list

addToDo.addEventListener('submit', sendToDo)
