const inputNote = document.getElementById("input-note")
const allNotesList = document.getElementById("all-notes-list")
const radioButtons = document.getElementsByName("web-lang")
console.log(radioButtons)

function saveNote() {
    if(!inputNote.value) return alert("Malumot kiriting!")

    for(radioBtn of radioButtons) {
        if (radioBtn.checked) {
            const list = document.getElementById(radioBtn.value + "-notes-list")

            const li = document.createElement("li")
            li.innerText = inputNote.value
            li.setAttribute('class', 'note-item')
        
            list.appendChild(li)
            inputNote.value = ""
        }   
    }
}
function keyListener(e) {
    if (e.key === "Enter") saveNote()
}


//or-------------------------

// const inputNote = document.getElementById("input-note")
// const allNotesList = document.getElementById("all-notes-list")

// function saveNote() {
//     const checkedCheckbox = document.querySelector('input[name=web-lang]:checked')
//     if(!inputNote.value) return alert("Malumot kiriting!")


//     const list = document.getElementById(checkedCheckbox + "-notes-list")

//     const li = document.createElement("li")
//     li.innerText = inputNote.value
//     li.setAttribute('class', 'note-item')
        
//     list.appendChild(li)
//     inputNote.value = "" 
// }
// function keyListener(e) {
//     if (e.key === "Enter") saveNote()
// }