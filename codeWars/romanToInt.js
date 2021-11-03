const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
}

function romanToInt(r) { 
    let sum = 0;
    for (let i = 0; i < r.length; i++) {
        if(r.length - 1 === i){
            sum += map[r[i]];
        }else{
            const first = map[r[i]];
            const second = map[r[i+1]];
            if(first >= second) sum += first;
            if(first < second) sum -= first;
        }
    }
    return sum;
}

function romanToIntRecur(r) {  
    if(r.length === 1) return map[r];
    const first = map[r[0]];
    const second = map[r[1]];

    return first >= second ? first + romanToIntRecur(r.slice(1)) : Math.abs(first - romanToIntRecur(r.slice(1))) 
}

// console.log(romanToInt('XVII'));
// console.log(romanToInt('VII'));
// console.log(romanToInt('IV'));
// console.log(romanToInt('CXXXXIV'));

console.log(romanToIntRecur('I'))
console.log(romanToIntRecur('II'))
console.log(romanToIntRecur('III'))
console.log(romanToIntRecur('IV'))
console.log(romanToIntRecur('VI'))
console.log(romanToIntRecur('XVI'))
console.log(romanToIntRecur('XXXXVI'))