const creature = {
    canWalk: true,
    canEat: true,
}

const person = {
    name: "Alex",
}

const bird = {
    name: "",
}

const cow = {
    name: "",
}

person.__proto__ = creature
bird.__proto__ = creature
cow.__proto__ = creature

console.log(person.__proto__)