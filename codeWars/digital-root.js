const number = 16;

function sumDigits(num) {
    if(num > 9) return sumDigits(num.toString().split('').reduce((acc, v) => acc += parseInt(v), 0));

    return parseInt(num);
}

console.log(sumDigits(number))