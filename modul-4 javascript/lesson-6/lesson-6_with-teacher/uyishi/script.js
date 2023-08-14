let num1;
let operator;
let num2;
let sum;

const calculations = JSON.parse(localStorage.getItem("calculations")) !== null ? JSON.parse(localStorage.getItem("calculations")) : []

function openAlerts() {
    num1 = prompt("N1")
    operator = prompt("Operator")
    num2 = prompt("N2")

    calculations.push({ num1: num1, operator: operator, num2: num2 });
    localStorage.setItem("calculations", JSON.stringify(calculations))
    render()
}


function render() {
    const container = document.querySelector("#container")
    const id = `row-${Math.random()}`
    container.innerHTML = ""

    calculations.forEach(function (calc) {
        container.insertAdjacentHTML("beforeend", `
            <div class="row" id="${id}">
                <button onclick="removeRow('${id}')">o'chirish</button>
                <span>${calc.num1}</span>
                <span>${calc.operator}</span>
                <span>${calc.num2}</span>
                <span>=</span>
                <span>${eval(`${calc.num1} ${calc.operator} ${calc.num2}`)}</span>
            </div>
    `)
    })
}

function removeRow(elId) {
    document.getElementById(elId).remove()
}

render()