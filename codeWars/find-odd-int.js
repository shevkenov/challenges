function findOddInt(arr) {
    if(arr.length === 1) return arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        const count = arr.filter(el => el === num).length;
        if(count % 2 === 1) return num;
    }
}

console.log(findOddInt([1,2,2,3,3,3,4,3,3,3,2,2,1]))
console.log(findOddInt([0,1,0,1,0]))
console.log(findOddInt([1,1,2]))
console.log(findOddInt([7]))