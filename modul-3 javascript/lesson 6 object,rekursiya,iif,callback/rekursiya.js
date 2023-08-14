let i = 10
function log() {
    console.log(i);
    if (i <= 10) {
        i--
    }    
    log()
}
log()



// function pow(base, exponent) {    // base = 5, exponent = 2
//     if (exponent == 0)            // nope, exponent != 0
//         return 1;
//     else
//         return base * pow(base, exponent - 1);  // return 5 * pow(5, 1)
// }
// pow(2, 4)

 
// function numbers() {
     
// }