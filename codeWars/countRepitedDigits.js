// https://www.codewars.com/kata/5a057ec846d843c81a0000ad?utm_source=newsletter

function cycle(number) {
    if(coPrime(10, number)){
        const arr = [];
        let cycle = 0;
        const result = String(1 / number);
        const inx = result.indexOf('.')
        const decimalPart = result.slice(inx + 1).split('')
        decimalPart.forEach(digit => {
            if(!arr.includes(digit)){
                arr.push(digit)
            }else(
                cycle++
            )

            
        });

        console.log(arr)
    }

    return -1
}

function coPrime(x, y) {
    let factor = 2;
    let arr = [1];
    const maxValue = Math.min(x,y);

    while(factor <= maxValue) {

        if((factor < x && factor < y) && (x % factor === 0 && y % factor === 0)){
            arr.push(factor)
        }

        factor++
    }

    return arr.length === 1 ? true : false
}

function isOdd(n) {
    return n % 2 === 0 ? false : true
}

cycle(7);
cycle(11);
cycle(13);
cycle(21);


//console.log(5 % 10)
