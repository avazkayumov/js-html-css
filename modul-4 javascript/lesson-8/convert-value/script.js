let currUSD = 11032.68

let toInput = document.querySelector('input[name=uzs]')
let fromInput = document.querySelector('input[name=usd]')

function convertValue(event) {
    if (!isNaN(Number(event.target.value))) {
        toInput.value = (event.target.value * currUSD).toFixed(2) 
    }
}