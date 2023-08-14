const inputs = document.querySelectorAll('input')
console.log(inputs)

function save() {
    let person = {}

    for (input of inputs) {
        if (input.type === 'checkbox') {
            person[input.name] = input.checked
        }else {
            person[input.name] = input.value
        }
    }
    localStorage.setItem('person', JSON.stringify(person))
}

function renderTable() {
    const person = JSON.parse(localStorage.getItem('person'))

    document.getElementById('tbody').insertAdjacentHTML('beforeend', `
        <tr>
            <td>${person.name}</td>
            <td>${person.surname}</td>
            <td>${person.age}</td>
            <td>${person.roziman}</td>
        </tr>
    `)  
}
