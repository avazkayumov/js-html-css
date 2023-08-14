const numbers = [1, 2, 3]

// 1-usul
// let sum = 0

// for (let number of numbers) {
//     sum += number
// }

// console.log(sum)

// 2-usul
let oldingi = 10

console.log(numbers.reduce(function (oldingi, hozirgi) {
    return oldingi + hozirgi
}, 4))

// console.log(numbers.reduce((oldingi, hozirgi) => oldingi + hozirgi))