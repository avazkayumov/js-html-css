// at() - bu arrayni indexisiga kora element olib beradi

// let arr = [1, 3, 4, 5, 6, 7, 8, 6, 7]
// console.log(arr.at(3))

//-----------------------------------------------------

// concat() - bu bitta arrayni ikkinchi arrayga qoshadi

// const arr = [1, 2, 3, 4]
// const arr2 = [5, 3, 5, 6]

// console.log(arr.concat(5, 6, 7))
// console.log(arr.concat(arr2))

//------------------------------------------------------

// ARRAY - bita arrayni yana array ichiga solib beradi
//Array.isArray - arrayligini tekshirish

// const arr = [1,2,3,4,5]
// console.log(Array(arr))
// console.log(Array.isArray(arr)) 
   
//-------------------------------------------------------

// .copyWithin() - birinchi argumentga berilgan index orniga, ikkinchi argumentga berilgan array indexini nusxasini qoyadi

// const arr = ["a", "b", "c", "e"]
// console.log(arr.copyWithin(2, 3))

//-------------------------------------------------------

// entries - chumadim
         
// const arr = [1,3,45,36,7]
// console.log(arr.entries())

//-------------------------------------------------------

// .fill() - arrayni bir indexdan boshqa indexgacha berilgan belgi bilan toldiradi

// const arr = [1, 34, 5, 6, 78, 5, 67, 8, 9]
// console.log(arr.fill('*', 2, 9))

//---------------------------------------------------------

// .filter(callback) = kiritilgn shartga kora malumotlarni filter qilib oladi, filter javobni array qilib qaytaradi

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(numbers.filter(function(number) {
//     return number % 2 === 0
// }))

//======================================================

// .find(callback) = shartda korsatilgan qiymatni bittasini qaytaradi

// const numbers = [1,4,7,8,9,0]
// console.log(numbers.find(function(number) {
//     return number % 2 === 0
// }))

//========================================================

// .findIndex() = shartga kora index qaytaradi faqat birinchisini oladi 

// const numbers = [1,3,4,88,7,8, 9, 2345]
// console.log(numbers.findIndex(function(number) {
//     return number > 80
// }))

//===========================================================

// indexOf = bu arraydagi korsatilgan elementni indexni qaytaradi

// var array = [2, 5, 5,  'salom' ,5, 9];
// array.indexOf(2);     // 0
// array.indexOf(7);     // -1
// array.indexOf(9, 2);  // 2
// array.indexOf(2, -1); // -1
// array.indexOf(2, -3); // 0
// console.log(array.indexOf('salom'));

//============================================================

// .flat() bu array icida yana array bolsa ularni bitta umumiya array qilib beradigan metod

// var arr1 = [1, 2, [3, 4]];
// arr1.flat();
// // [1, 2, 3, 4]

// var arr2 = [1, 2, [3, 4, [5, 6]]];
// arr2.flat();
// // [1, 2, 3, 4, [5, 6]]

// var arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);
// // [1, 2, 3, 4, 5, 6]

// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// arr4.flat(Infinity);
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//=====================================================

//.forEach(callback) = return qiymat qaytarmidigan shartni bajaruvchi loop methodi

// const numbers = [1,2,4,5,6,8] 
// numbers.forEach(function(number) {
//     if (number % 2 === 0) {
//         console.log(number)
//     }
// })      

//==============================================================

//.join() = array elemenlariga element qoshish

// const num = [1,2,3,4,5,6,7]
// console.log(num.join('a'))

//==============================================================

// keys() = bu arrayni key(name) larini qaytaradi

// const array1 = ['a', 'b', 'c'];
// const iterator = array1.keys();

// for (const key of iterator) {
//   console.log(key);
// }

//============================================================

// lastIndexOf() = arraydagi malum bir elementni oxirgisini topadi 

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Penguin', 'Dodo'];

// console.log(animals.lastIndexOf('Dodo'));

// console.log(animals.lastIndexOf('Penguin'));

//==================================================================

// map(callback) = for ga oxshab elementlarni aylanib chiqsa boladi

// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers.map(function(number) {
//     return number
// }))

//===================================================================

// reduce(callback) = arraydigi xar bitta elementlani ikkta argument bilan aylanib chiqish

// const numbers = [1, 2, 3]  //sum topish

// let oldingi = 0 //default = 0
// console.log(numbers.reduce(function (oldingi, hozirgi) {
//     return oldingi + hozirgi
// }))

//====================================================================

// reverse() = berilgan arrayni teskari qilib beradi

// let num = [1,3,4]
// console.log(num.reverse())

//================================================================

// arrayga malumot qoshish:
// .pop = oxiridan ochirish
// .shift = boshidan ochirish
// .push = oxiridan qoshish
// .unshift = boshidan qoshish

//================================================================

// slice() = bu berilgan birinchi argumentda ikkinchi argumentgacha qoldiradi, qolganini ochirvoradi

// const arr = [1,3,4,5]
// console.log(arr.slice(0,2))

//==================================================================

// some() = arrayni shartiga kora true yoki false qaytaradi, agar bitta true bolsa javob true boladi

// function isBiggerThan10(element, index, array) {
//     return element > 10;
//   }
//   [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
//   [12, 5, 8, 1, 4].some(isBiggerThan10); // true

// .every(callback) - array ichidigi har bitta element berilgan shartga togri ekanligini tekshiradi va true yoki false qaytaradi 

// const numbers = [1,3,4,67,9,6]
// console.log(numbers.every(function(number) {
//     return number > 0
// }))

//--------------------------------------------------------

//=========================================================================

// sort(callback) = bu arrayni osish yoki kamayish boyicha sortirovka qiladi

// const numbers = [7, 4, 65, 12, 45, 87, 3, 5]
// console.log(numbers.sort((a, b) => a - b))
// console.log(numbers.sort((a, b) => b - a))

//============================================================================

// splice() = arraydan malumot ochirish uchun ishlatamiza

// const arr = ["a", "b", "c", "d", "f", "f" , "wsd"]

// // console.log(arr.splice(2, 3))

// arr.splice(2, 1, "gg")
// console.log(arr)

//==============================================================================

// toString = arrayni string ga otkazish

// const arr = [1,2,3,5]
// console.log(arr.toString())

//===================================================================

// toLocaleString = toString bilan bir xil 

// const arr = [1,3,45,6,7]
// console.log(arr.toLocaleString())

//=================================================================