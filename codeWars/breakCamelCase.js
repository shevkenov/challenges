function breakCamelCase(str) {
    if(str === "") return str;

    if(str[0].match(/[A-Z]/)) return ' ' + str[0] + breakCamelCase(str.substring(1));
    return str[0]+breakCamelCase(str.substring(1))
};

function solution(str) {
    return str.replace(/([A-Z])/g, ' $1')
}

console.log(breakCamelCase(''));
console.log(breakCamelCase('identifier'));
console.log(breakCamelCase('camelCasing'));
console.log(solution(''))
console.log(solution('identifier'))
console.log(solution('camelCasing'))