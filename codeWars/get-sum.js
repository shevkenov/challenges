function getSum(a, b) {
    if (a === b) return a;
    if(a > b) {
        [a, b] = [b, a]
    }
    if (a === b * -1) return 0;

    const arr = []
    while(a <= b){
        arr.push(a);
        a++
    }

    return(arr.reduce((acc, v) => acc += v))
}

function getSumRecur(a, b) {
    if (a === b) return a;
    if(a > b) {
        [a, b] = [b, a]
    }

    return a + getSum(++a, b)
}


console.log(getSum(2,1))
console.log(getSum(1,2))
console.log(getSum(1,1))
console.log(getSum(-1,0))
console.log(getSum(-3,3))
console.log(getSum(127,356))
console.log(getSum(0, -1))