//-------------------------------------------------------------------------
// toLowerCase bu berilgan satrni kichkina harflarga o'giradi
// toUpperCase bu berilgan satrni kotta harflarga o'giradi

// const text = "Hello World"

// console.log(text.toUpperCase())
// console.log(text.toLowerCase())

//-------------------------------------------------------------------------

// .charAt(index) = korsatilgan index harfini qaytaradi

// const text = "Salom"

// console.log(text.charAt(0))
// console.log(text.charAt(1))
// console.log(text.charAt(2))
// console.log(text.charAt(3))
// console.log(text.charAt(4))

//-------------------------------------------------------------------------

// charCodeAt = bu ACII kod jadvalidagi belgilar kodini qaytaradi

// const text = "Salom"

// console.log(text.charCodeAt(0))
// console.log(text.charCodeAt(1))
// console.log(text.charCodeAt(2))
// console.log(text.charCodeAt(3))
// console.log(text.charCodeAt(4))

//-------------------------------------------------------------------------

// concat = ikki satrni bir biriga qoshadi

// const text1 = "Salom"
// const text2 = " Dunyo"

// console.log(text1.concat(text2))
// console.log(text1.concat(" Diyor"))

//-------------------------------------------------------------------------

// length methodi stringning uzunligin beradi

// let text = "Salom"
// console.log(text.length)

// let parol = '*(*&&J'

// if (parol.length < 8) {
//     console.log('Parol juda ham oson')
// }

//-------------------------------------------------------------------------

// padStart - bu korsatilgan elementga satr boshidan korsatilgan belgini koshib beradi

// padEnd - bu korsatilgan elementga satr oxiridan korsatilgan belgini koshib beradi

// const text1 = "a"
// const text2 = "bbb"

// console.log(text1.padStart(5, "-"))
// console.log(text2.padStart(5, "-"))

// console.log(text1.padEnd(5, "-"))
// console.log(text2.padEnd(5, "-"))

//----------------------------------------------------------------------------------------

// replace() = bu berilgan satrni boshqa satrga ozgartirish

// const text = "Salom Dunyo"

// console.log(text.replace("Dunyo", "Diyor"))
// console.log(text.replace("o", "a"))

//-------------------------------------------------------------------------------------

// slice(), substring() methodi ikkita parametr qabul qiladi, birinchi boshlanish indexi ikkinchisi tugash va bizga anashu oralaqdagi stringni qayatardi

// let ism = "Sanjar"

// console.log(ism.slice(2, 5))
// console.log(ism.slice(-2, 5))

//-------------------------------------------------------------------------------------

// split() = berilgan satrni arrayga otkazadi

// const text = "Salom"
// const text2 = "s*a*l*o*m"

// const text3 = "bbbbabbbb"

// console.log(text.split(""))
// console.log(text2.split("*"))
// console.log(text3.split("a"))

//-------------------------------------------------------------------------------------

// trim() = sart boshida yoki oxirida bosh probel bosa ochirvoradi

// const password = "     12334 "

// console.log(password.trim() === "12334")

//----------------------------------------------------------------------------