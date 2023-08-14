const tbody = document.querySelector('.tbody')

fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
    .then (res => res.json())
    .then (data => renderTable(data))

function renderTable(animals) {
    const fragment = document.createDocumentFragment()


    animals.forEach(animal => {
        const tr = document.createElement('tr')
        tr.insertAdjacentHTML('afterbegin', `
            <tr>
                <td>${animal.id}</td>
                <td>${animal.name}</td>
                <td>${animal.animal_type}</td>
                <td>${animal.diet}</td>
                <td>${animal.habitat}</td>
            </tr>
        `)
        fragment.appendChild(tr)
    });   
    tbody.appendChild(fragment)
}
renderTable()