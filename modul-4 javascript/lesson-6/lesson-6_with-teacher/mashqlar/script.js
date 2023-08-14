document.addEventListener("DOMContentLoaded", renderTable)

const inputs = document.querySelectorAll("input")

function save() {
    let person = {}

    for (let input of inputs) {
        person[input.name] = input.type == "checkbox" ? input.checked : input.value
    }

    localStorage.setItem("person", JSON.stringify(person))
}

function renderTable() {
    const person = JSON.parse(localStorage.getItem("person"))

    document.getElementById("tbody").insertAdjacentHTML("beforeend", `
        <tr>
            <td>${person.name}</td>
            <td>${person.surname}</td>
            <td>${person.age}</td>
            <td>${person.roziman}</td>
        </tr>
    `)
}
