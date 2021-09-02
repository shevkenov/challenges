function toCamelCase(str) {
    if(!str.length) return str
    return str.split(/[-_]/).map((w,i) => {
        if(i === 0) return w;

        return w[0].toUpperCase() + w.substring(1);
    }).join('');
}

console.log(toCamelCase("the-stealth_warrior"))
console.log(toCamelCase("The-Stealth-Warrior"))
console.log(toCamelCase(""))