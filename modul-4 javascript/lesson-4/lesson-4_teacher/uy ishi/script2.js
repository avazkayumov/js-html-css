const inputNote = document.getElementById("input-note")
const allNotesList = document.getElementById("all-notes-list")

function saveNote() {
    const checkedCheckbox = document.querySelector('input[name=web-lang]:checked');

    if (!inputNote.value) return alert("Saqlashdan olding malumot kiriting!");
    const list = document.getElementById(checkedCheckbox.value + "-notes-list")
    const li = document.createElement("li")
    li.innerText = inputNote.value
    li.setAttribute('class', 'note-item')
    list.appendChild(li)
    inputNote.value = ""
}

function keyListener(e) {
    if (e.key === "Enter") saveNote()
}