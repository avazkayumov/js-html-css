const vada = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Malumot")
    }, 3000)

    setTimeout(() => {
        reject("Malumot Olib kelish kop vaqt olyati, qaytadan urinib koring!")
    }, 5000)
})

vada.then(val => console.log({ status: "Bajarildi", result: val }))
    .catch(xato => console.log({ status: "Bajarilmadi", message: xato }))