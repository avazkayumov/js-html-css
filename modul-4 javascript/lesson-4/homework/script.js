const btn = document.getElementById('btn')


function btnClick() {
    let num1 = prompt("First number")
    let operator = prompt("Operator")
    let num2 = prompt("Second number")

    const row = document.createElement('div')
    row.setAttribute("id", "row")
    document.body.appendChild(row)

    const box = document.createElement("div")
    box.setAttribute("class", "box")
    box.innerText = num1
    row.appendChild(box)

    const box2 = box.cloneNode(true)
    box2.setAttribute("class", "box green")
    box2.textContent = operator
    row.appendChild(box2)

    const box3 = box.cloneNode(true)
    box3.textContent = num2
    row.appendChild(box3)

    const box4 = box.cloneNode(true)
    box4.setAttribute("class", "box green")
    box4.textContent = '='
    row.appendChild(box4)

    const deleteBtn = box.cloneNode(true)
    deleteBtn.setAttribute("class", "box delete-box")
    row.prepend(deleteBtn)
    deleteBtn.textContent = ""

    let img = document.createElement("img")
    img.setAttribute('src', './Vector.svg',);
    deleteBtn.appendChild(img)
    deleteBtn.addEventListener('click', function() {
        row.remove()
    })
    

    const box5 = box.cloneNode(true)
    switch(operator) {
        case '+':
            box5.textContent = Number(num1) + Number(num2)
            break;
        
        case '-':
            box5.textContent = Number(num1) - Number(num2)
            break;
                
        case '/':
            box5.textContent = Number(num1) / Number(num2)
            break;
        
        case '*':
            box5.textContent = Number(num1) * Number(num2)
            break;
    }
    row.appendChild(box5)
}