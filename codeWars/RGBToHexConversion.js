function rgb(r, g, b) {
    return [r,g,b].map(n => ('0' + Math.max(Math.min(255,n),0).toString(16)).slice(-2)).join('').toUpperCase();
}


console.log(rgb(0, 0, 0))
console.log(rgb(0, 0, -20))
console.log(rgb(300, 255, 255))
console.log(rgb(173, 255, 47))
console.log(rgb(7, 59, 224))