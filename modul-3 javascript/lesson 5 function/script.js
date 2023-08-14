//1
//CALCULATOR FUNCTION
// function calc(num1, num2, operator) {

//     switch (operator) {
//         case '+':
//             console.log(Number(num1) + Number(num2));
//         case '-':
//             console.log(Number(num1) - Number(num2));
//         case '*':
//             console.log(Number(num1) * Number(num2));
//         case '/':
//             console.log(Number(num1) / Number(num2));    
//     }
// }
// calc(16,8,'/')


//2
//REMOVE NEGATIVE FUNCTION
// function removeNegative (...nums) {
//     let answer = [];
//     for (let num of nums) {
//         if (num > 0) {
//             answer.push(num);
//         }
//     }
//     return answer;
// }
// console.log(removeNegative(1,2,3,4,-4,-3))



//3
//REVERSE ARRAY
// function reverseArray (...nums) {
//     let answer = [];
//     for (let i = nums.length; i > 0; i--) {
//         answer.push(i);
//     }
//     return answer;
// }
// console.log(reverseArray(1,2,3,4,5));



//4
//MAX-NUM
// function maxNum (nums) {
//     let max = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] >= max) {
//         max = nums[i];
//         }
//     }
//     return max;
// }
// console.log(maxNum([3,4,101,2,100,4]))



//5
//REMOVESAMETEXT
// function removeSameLetter(string) {
//     let result = ""

//     for (let letter of string) {
//         if (!result.includes(letter)) {
//             result += letter;
//         }
//     }
//     return result;
// }
// const removeSameLetterResult = removeSameLetter("aabbddnnddnn");
// console.log(removeSameLetterResult)



// function removeSameLetter(string) {
//     let result = ""

//     for (let letter of string) {
//         let isLetterThere = false;

//         for (let i = 0; i <= result.length; i++) {
//             if (result[i] === letter) {
//                 isLetterThere = true
//             }
//         }

//         if (!isLetterThere) {
//             result += letter
//         }
//     }
//     return result
// }

// const removeSameLetterResult = removeSameLetter("abbcddhuuab")
// console.log(removeSameLetterResult)



//6 
//REMOVESTRING
function removeString(array) {
    let result = []

    for (let string of array) {
        if (!isNaN(parseInt(string))) {
            result.push(parseInt(string))
        }
    }

    return result
}

const removeStringResult = removeString(["1", "ikki", "3", "4", "besh"])
console.log(removeStringResult)