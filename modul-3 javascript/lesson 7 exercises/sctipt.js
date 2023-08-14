//index of MinNum
// function minIndex(nums) {
//     let minNum = Infinity;
//     for (let num of nums) {
//         if (num < minNum) {
//             minNum = num;
//         }
//     }
//     return nums.indexOf(minNum);
// }
// const minIndexResult = minIndex([20,34,67,1,7,8]);
// console.log(minIndexResult)


//SINGLE NUM (not true)
// function singlNum(nums) {
//     let result = [];
//     for (let i = 0; i < nums.length; i++) {

//     }
//     return result;
// }
// const signlNumResult = singlNum([13,4,6,4,6])
// console.log(signlNumResult)


function changeStr (strs) {
    let result = ""
    for (let str of strs) {
        if (str.toLowerCase() === "a") {
            result += '*'
        }else {
            result += str
        }
    }
    return result;
}
const changeStrResult = changeStr("Hello, how are you doing today")
console.log(changeStrResult)