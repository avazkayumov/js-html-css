async function timout() {
    let vada = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("1")
        }, 3000)
    })

    try {
        await vada
        console.log(vada)
        console.log(2)
    } catch (xato) {
        console.log(xato)
    }
}

timout()