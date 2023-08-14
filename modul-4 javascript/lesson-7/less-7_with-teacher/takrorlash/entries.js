const arr = ["a", "b", "c", "d", "g"]
console.log(arr.entries())

const arrobj = {
    0: "a",
    1: "b",
    2: "c"
}
console.log(Object.entries(arrobj))

for (let [a, b] of Object.entries(arrobj)) {
    console.log(a, b)
}

const arr2 = [1, 2, 3, 4, 5]

const [a, ...b] = arr2
console.log(a, b)
