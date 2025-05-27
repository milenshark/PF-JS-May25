function rounding(number, rounding) {
    if (rounding > 15) {
        rounding = 15;
    }
    let result = parseFloat(number.toFixed(rounding));
    console.log(result);
}

rounding(3.1415926535897932384626433832795,2);