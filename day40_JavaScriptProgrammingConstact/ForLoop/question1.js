function PowerOfNumber(b, e) {

    let i, pow = 1;

    //loop exponent times
    for (i = 0; i < e; i++) {
        //multiple the base value
        pow = pow * b;
    }

    return pow;
}

console.log(PowerOfNumber(2, 3))