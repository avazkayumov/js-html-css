//GETTER & SETTER
const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};


// person.fullName = "John Smith";

// console.log(person)


// //ForEach
// const people = [
//     { name: "Jon1", age: 25, budget: 10000},
//     { name: "Jon2", age: 12, budget: 30000},
//     { name: "Jon3", age: 34, budget: 20000},
//     { name: "Jon4", age: 14, budget: 60000},
//     { name: "Jon5", age: 13, budget: 90000},
//     { name: "Jon6", age: 45, budget: 50000},
// ]
// people.forEach (person => console.log(person))



//FILTER
// let array = [12, 5, 6, 44, 55];
// let newArray = array.filter(function (elem){
//     return elem > 15;
// })
// console.log(newArray)

//or
// let array = [12, 5, 6, 44, 55];
// let isBigEnough = (elem) => elem > 15;
// let newArray = array.filter(isBigEnough)
// console.log(newArray)


// MAP
// let nums = [1,3,4,55,54];

// let result = nums.map(function(elem) {
//     return elem * 2;
// })
// console.log(result)

//or
// let nums = [1,3,4,55,54];
// let multiplyByTwo = (elem) => elem * 2;
// let result = nums.map(multiplyByTwo)
// console.log(result)