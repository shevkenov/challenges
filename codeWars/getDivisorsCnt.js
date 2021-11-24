// https://www.codewars.com/kata/542c0f198e077084c0000c2e/train/javascript

function getDivisorsCnt(n) {
    let result = 0;
    let x  =  n
    while(x > 0){
        if(n % x === 0) result++
        x--
    }

    return result
}

console.log(getDivisorsCnt(30))