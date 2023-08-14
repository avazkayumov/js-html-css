let num1;
let operator;
let num2;
let sum;

function openAlerts() {
    num1 = prompt("N1")
    operator = prompt("Operator")
    num2 = prompt("N2")
    sum = Number(num1) + Number(num2)

    render()
}


function render() {
    const container = document.querySelector("#container")
    const id = `row-${Math.random()}`

    container.insertAdjacentHTML("beforeend", `
        <div class="row" id="${id}">
            <button onclick="removeRow('${id}')">o'chirish</button>
            <span>${num1}</span>
            <span>${operator}</span>
            <span>${num2}</span>
            <span>=</span>
            <span>${sum}</span>
        </div>
    `)
}

function removeRow(elId) {
    document.getElementById(elId).remove()
}