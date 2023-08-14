let mevalarArr = [100, 345, 678, 47, 456, 67]

let mevalarObj = {
    toshkent: 100,
    andijon: 300,
    namangan: 500,
    samarqand: 1000
}

let person = {
    name: "Jon",
    age: 25,
    number: 9876543,
    eyeColor: "blue",
    car: {
        brand: "Tesla",
        price: 1234567890,
        color: "white"
    },
    get length() {
        return Object.keys(person).length - 1
    },
    set changeName(name) { person.name = name }
}

delete person.number

person["isMarried"] = false
person.hasCar = true

// console.log(person['eyeColor'])
// console.log(person['age'])
// console.log(person.name)
// console.log(person)

// for (let key in person) {
//     console.log(person[key])
// }

console.log(person.car)
console.log(Object.entries(person))
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(person.length)

// console.log(person.name)
// person.changeName = "Alex"
// console.log(person.name)