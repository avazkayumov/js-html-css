(function log(a, b) {
    console.log("Started!!!", a + b);

    (function log2() {
        console.log("Finish")
    })()
})(5, 6)