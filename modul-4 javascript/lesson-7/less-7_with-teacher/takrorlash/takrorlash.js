const arr = ["a", "b", "c", "d", "y"]

// console.log(arr.at(6)) // .at(index) -> bu arraydagi berilgan indexda turgan elementni qaytaradi
// console.log(arr.findIndex((el) => el == "c")) // .findIndex(funksiya) -> findIndex callback funksiya qabul qiladi va anashu funksiyaga berilgan birinchi parametr arr elementi hisoblanadi va return true bo'lgan elementi qaytaradi
// console.log(arr.lastIndexOf("c"))  // .lastIndexOf()
// console.log(arr.indexOf("c"))  // .indexOf()

// arr.push("salom") // .push() -> array ohiriga berilgan qiymatni qoshadi
// .unshift() -> arrayning boshiga qiymay qoshadi
// .shift() -> arrayning boshidagi elemenyni ochiradi
// .pop() -> arrayning ohiridagi elementni ochiradi

// console.log(arr.copyWithin(0, 1, 2)) // .copyWithIn()

// .concat()
// const newArr = arr.concat([1, 2, 3])
// console.log(newArr)

// console.log([0, 2, 3, 4, 5].every((el) => el > 0))
// .every()

// .splice()
// console.log(arr.splice(1, 3))
// console.log(arr)

// .slice()
// console.log(arr.slice(1, 3))
// console.log(arr)

// .map()
// console.log(arr.map((el) => el + 1))

// arr.forEach(() => {
//     console.log()
// })  // .forEach()

// console.log([1, 2, 3, 4, 5, 6, 7].filter((el) => el % 2 == 0)) // .filter()

// console.log([1, 2, 3, 4].fill(4))
// console.log(new Array(70))
// console.log([70])
// .fill()

// .reverse()
// console.log([5, 3, 7, 1, 11].sort((a, b) => a - b))
// console.log([{ num: 6 }, { num: 0 }, { num: 9 }, { num: 3 }].sort((a, b) => a.num - b.num))

// .sort()

// .length
// console.log(arr.length)

// .toLocaleString()
// console.log(arr.toLocaleString())

// .toString()
// console.log(arr.toString())

// console.log(Number(5).toLocaleString())

// .reduce()
console.log(arr.reduce((prev, cur) => prev + cur))

// .join()