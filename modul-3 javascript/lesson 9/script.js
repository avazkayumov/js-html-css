// 1    
// SHOP
// function kassa(pul) {
//     let savatcha = []
//     let qolganMeva =[]
//     let mevalar = {
//         uzum: 900,
//         banan: 1000,
//         olma: 1500
//     }

//     for (let meva in mevalar) {
//         if (pul >= mevalar[meva]) {
//             savatcha.push(meva)
//             pul = pul - mevalar[meva] //value
//         }else {
//              qolganMeva.push(meva) //key
//         }
//     }
//     return {
//         savatcha: savatcha,
//         qaytim: pul + " som",
//         "pul-yetmagan-meva": qolganMeva
//     }
// }
// console.log(kassa(2000))



//2
// FIND SAME LETTER
// function findSameLetter (a,b) {
//     let result = ""
//     let maxLetter;
//     let minLetter;
//     let emptyStr = ""
//     if (a.length > b.length) {
//         maxLetter = a;
//         minLetter = b;
//     }else {
//         minLetter = a;
//         maxLetter = b;
//     }
//     for (let i = 0; i < maxLetter.length; i++) {
//         if (minLetter.includes(maxLetter[i])) {
//             emptyStr += maxLetter[i]
//         }
//     }

//     for (let word of emptyStr) {
//         if (!result.includes(word)) {
//             result += word;
//         }
//     }

//     return result;
// }
// const findSameLetterResult = findSameLetter("Hello","Werlod")
// console.log (findSameLetterResult)



//3 
//SERIESNUMBER
function seriesUp (num) {
    let result = []
    for (let i = 1; i <=num; i++) {
        for (let j = 1; j <= i; j++) {
            result.push(j)
        }
    }
    return result;
}
const seriesUpResult = seriesUp(4);
console.log(seriesUpResult);