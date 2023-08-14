// 1. Soat oladigan va uni minut va soniyalarga aylantiruvchi funksiyani yozing.
// function calcTime(a) {
//     let minut = 60 * a;
//     let secund = minut * 60;

//     let result = `Soat: ${a}, Minut ${minut}, Secund: ${secund}`
//     return result
// }
// const calcTimeResult = calcTime(5)
// console.log(calcTimeResult)


// 2. String oladigan va barcha unlilar olib tashlangan yangi qatorni qaytaruvchi funksiya yarating.
// function ochirishUnli (string) {
//     let result = "";
//     let lowerString = string.toLowerCase()
//     for (str of lowerString) {
//         if (str !== 'a' && str !== 'i' && str !== 'u' && str !== 'o' && str !== 'e'){
//             result += str
//         }
//     }
//     return result;
// }
// const ochirishUnliResult = ochirishUnli("salom")
// console.log(ochirishUnliResult)


// 3. Berilgan raqamning ikki yarmini o'z ichiga olgan massivni qaytaring. Agar raqam toq bo'lsa, eng o'ngdagi raqamni balandroq qilib qo'ying.
// function raqamAjrat(num) {
//     let birinchiYarm;
//     let ikkinchiYarm;
//     if (num % 2 == 0) {
//         return [num / 2, num / 2 ]
//     }
// }
// const raqamAjratResult = raqamAjrat(40)
// console.log(raqamAjratResult)