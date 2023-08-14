let i = 0

const interval = setInterval(log, 2000)

function log() {
    console.log(i)
    i++

    if (i == 5) {
        clearInterval(interval)
    }
}