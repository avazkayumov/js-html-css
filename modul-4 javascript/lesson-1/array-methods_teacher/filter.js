const raqamlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

// 1 - usul
// for (let raqam of raqamlar) {
//     if (raqam % 2 === 0) {
//         console.log(raqam)
//     }
// }

// 2 - usul
// raqamlar.forEach(function (raqam) {
//     if (raqam % 2 === 0) {
//         console.log(raqam)
//     }
// })

// 3 - usul
console.log(raqamlar.filter((raqam) => raqam % 2 === 0))


const students = [
    {
        name: "Alex",
        score: 70
    },
    {
        name: "Jon",
        score: 50
    },
    {
        name: "Diyorbek",
        score: 30
    },
    {
        name: "Alan",
        score: 100
    },
]

// 1. 50 dan tepalari
// 2. 50 dan pastlari
// 3. 30 dan pastlari
// Ismlar chiqsin

console.log(students.filter(student => student.score >= 50))
console.log(students.filter(student => student.score >= 50 && student.score <= 70))

console.log(students.filter((student) => {
    if (student.score >= 50 && student.score <= 70) {
        return student
    }
}))