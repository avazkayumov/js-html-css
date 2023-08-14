const sum = (a, b) => a + b
const pow = (a, b) => a ** b

const multiply = (a, b, callback) => callback(a, b) * 5

console.log(multiply(2, 3, sum))
console.log(multiply(2, 3, pow))