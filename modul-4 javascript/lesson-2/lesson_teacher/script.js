// DOM -> Document Object Model

const hujjat = {
    html: {
        head: {
            title: "Document",
            meta: "",
        },
        body: {
            children: {
                h2: {
                    style: "color: red",
                    innerText: "Sarlavha"
                },
                p: "Paragraf",
                div: {
                    b: "Bu qalin matn"
                }
            }
        }
    }
}

// Eski holat
// document.body.children[3].addEventListener("click", textChange)

// function textChange() {
//     document.body.children[2].children[0].innerText = "Ozgartirdim"
// }

// Yangisi

const btn = document.querySelector("#change-button")
btn.addEventListener("click", textChane)

function textChane() {
    const qalinShriftElement = document.querySelector("#qalin-shrift")
    qalinShriftElement.innerText = "Ozgartirdim"
}

// getElementById()



const paragraf1 = document.body.children[1]
const paragraf2 = document.getElementById("paragraf-1")

console.log(paragraf1)
console.log(paragraf2)

// getElementByClassName() -> array qaytaradi

const sarlavha1 = document.body.children[0]
const sarlavha2 = document.getElementsByClassName("sarlavha-h2")

console.log(sarlavha1)
console.log(sarlavha2)

// getElementByTagName() -> array qaytaradi

const qalinShrift1 = document.body.children[2].children[0]
const qalinShrift2 = document.getElementsByTagName("b")

console.log(qalinShrift1)
console.log(qalinShrift2)

// querySelector()

const paragraf3 = document.querySelector("#paragraf-1")
const sarlavha3 = document.querySelector(".sarlavha-h2")

console.log(paragraf3)
console.log(sarlavha3)

// querySelectorAll() -> array qaytaradi

// innerText // innerHTML

const sarlavhah3 = document.querySelector(".sarlavha-h3")
sarlavhah3.innerHTML = "Bu <mark>sarlavha</mark>"
