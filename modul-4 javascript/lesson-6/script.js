const name1 = document.getElementById('name') 
const surname = document.getElementById('surname') 
const age = document.getElementById('age') 
const checkbox = document.getElementById('checkbox')
const btn = document.getElementById('btn')


const tableBtn = document.getElementById('table-btn')
const tbody = document.getElementById('tbody')


btn.addEventListener('click', saveInfo)

function saveInfo() {    
    const result = {
        name: name1.value,
        surname: surname.value,
        age: age.value,
        checkbox: checkbox.checked
    }

    localStorage.setItem('person', JSON.stringify(result))
}

tableBtn.addEventListener('click', tableLog)

function tableLog() {
    let tr = document.createElement('tr')
    // tr.innerText = 'Ism'
    
    tbody.appendChild(tr)
    let td = document.createElement('td')
    tr.appendChild(td)
    td.innerText = 'Hello'
}
