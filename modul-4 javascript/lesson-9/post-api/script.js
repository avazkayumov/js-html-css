async function fetchTodos() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts")
        const result = await res.json() 
        renderTodos(result)
    }
    catch(err) {
        console.log(err)
    }
}
fetchTodos()

function renderTodos(result) {
    const container = document.querySelector(".todos-container")
    const fragment = document.createDocumentFragment()
    result.forEach(todo => {
        const li = document.createElement("li")
        li.innerHTML = `<a  href= "detail.html?id=${todo.id}">${todo.title}</a>`
        fragment.append(li)
    });
    container.appendChild(fragment)
}