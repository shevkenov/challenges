function howMuchILoveYou(petalNo) {
    const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    return phrases[(petalNo - 1) % phrases.length] ;
}

console.log(howMuchILoveYou(1))
console.log(howMuchILoveYou(17))
console.log(howMuchILoveYou(18))
console.log(howMuchILoveYou(18))