//BMI (body mass index) calculation
/*
var myWeight = 60;
var myHeight = 1.75;
var myBmi = myWeight / ( myHeight * myHeight );
console.log (myBmi)

if (myBmi < 14.99) {
    console.log(`${myBmi} = "Underweight"`);
}else if (myBmi >= 15 && myBmi < 25) {
    console.log(`${myBmi} = "Normal"`);
}else {
    console.log(`${myBmi} = "Overweight"`);
}
*/


/*
//VOTING calculation
var studentAge = 19;
var votingAge = 18;

if ( studentAge >= votingAge ) {
    console.log ("You can vote")
}else {
    console.log ("Come back later")
}
*/


/*
//studentSCORE calculation
var studentScore = 57;

if (studentScore >= 90) {
    console.log ("You got A")
}else if (studentScore < 90 && studentScore >= 80) {   
    console.log("You got B");
}else if (studentScore < 80 && studentScore >= 70) {
    console.log("You got C");
}else if (studentScore < 70 && studentScore >= 60) {
    console.log("You got D");
}else {
    console.log("You got F, loser");
}
*/



//DATA TYPES
// string, numvber, boolean, null, undefined, object, array

// const streetName = "President St";
// const houseNumber = 124;
// const isMarried = false;
// const age = null;
// const lName = undefined;

// console.log (typeof streetName)


//STRING
// const streetName = "President St";
// const houseNumber = 334;
// const tenant = "John Doe";

// console.log (`${tenant} lives in ${streetName} at house number ${houseNumber}`)

// console.log (tenant.split(' '))


//ARRAY
// const cars = ["Audi", "Tesla", "BMW"];
// console.log (cars);

// cars.push("Toyota");
// console.log(cars)


//OBJECT
// const person = {
//     name1: "Abdullajon",
//     age: 14,
//     isStudent: true,
//     address: {
//         street: "Main St",
//         houseNumber: 123
//     }
// }
// console.log (person.name1, person.address.street);

// const {name1, age, isStudent, address:{street}} = person;
// console.log(name1, age, isStudent, street )




// const students = [
//     {
//         fName: "John Doe",
//         age: 23,
//         graduated: false
//     },
//     {
//         fName: "Jane Smith",
//         age: 34,
//         graduated: true
//     },
//     {
//         fName: "Bob Mark",
//         age: 40,
//         graduated: true
//     }
// ]
// // console.log(students[2])

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].fName)
// }

// const graduated = students.filter(function(student) {
//     return student.graduated === true;
// }).map (s => {
//     return s.fName  
// })
// console.log(graduated)




//FUNCTION
function addNum (num1, num2) {
    console.log(num1 + num2)
}
addNum(12,24)
addNum(40,60)
addNum(100,40)
//or
const multiplyNums = function(n1,n2) {
    console.log(n1 + n2)
}
multiplyNums(12,32)
