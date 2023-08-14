const btn = document.getElementById("change-btn")
// const input_color = document.getElementById("input-box")
const input_text = document.getElementById("input-text")

// btn.addEventListener("click", function () {
//     changePColor(input_text.value)
// })

input_text.addEventListener("keyup", function (e) {
    console.log(e.key)

    if (e.key === "Enter") {
        changePColor(input_text.value)
    }
})

function changePColor(color) {
    const paragraflar = document.getElementsByTagName("p")

    for (let p of paragraflar) {
        p.style.color = color
    }
}