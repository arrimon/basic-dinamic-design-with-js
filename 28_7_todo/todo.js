const loadTod = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => {
        //     // console.log(data);
        //     displayTodo(data);
        // })
    const res = await fetch(url);
    const data = await res.json();
    displayTodo(data);
}

// Know abot todos api look like
// {
// "userId": 1,
// "id": 1,
// "title": "delectus aut autem",
// "completed": false
// },

// <li data-content="✓" class="step step-neutral">Step 3</li>
// <li data-content="✕" class="step step-neutral">Step 4</li>

const displayTodo = (todos) => {
    // console.log(todos) // debugging is fetch in console or not
    // 1. get the container
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = ""; // for empty container

    todos.forEach(todos => {
        // console.log(todos)
        const createTodoCard = document.createElement('div');
        createTodoCard.innerHTML = `
            <div class="flex items-center gap-4 bg-slate-300 rounded-lg p-5 mx-8 shadow">
                <span class="text-2xl font-bold ${todos.completed ? 'text-green-500' : 'text-red-500'}">
                    ${todos.completed ? "✓" : "✕"}
                </span>
                <h4 class="text-lg">${todos.title}</h4>
            </div>
        `

        todoContainer.appendChild(createTodoCard)
    });
}

// Function call
loadTod();