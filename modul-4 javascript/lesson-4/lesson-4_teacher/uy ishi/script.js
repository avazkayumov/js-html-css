const inputNote = document.getElementById("input-note")
const allNotesList = document.getElementById("all-notes-list")
const radioButtons = document.getElementsByName("web-lang")

function saveNote() {
    if (!inputNote.value) return alert("Saqlashdan olding malumot kiriting!");

    for (let radioBtn of radioButtons) {
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