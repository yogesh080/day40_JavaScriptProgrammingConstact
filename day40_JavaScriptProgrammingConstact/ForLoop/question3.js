// prime Number

const primeNum = n => {
    if (n < 2)
        return `${n} :is not a prime number`

    for (i = 2; i < n; i++) {
        if (n % i == 0) {
            return `${n} : is not a prime Number`
        }
        else {

            return `${n} : is  a prime Number`
        }
    }
}

console.log(primeNum(4))