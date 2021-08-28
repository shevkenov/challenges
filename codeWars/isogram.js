function isIsogram(str) {
    return !str || str.toLowerCase().split('').every((v, i, arr) => arr.indexOf(v) == i )
};

function isIsogramRec(str) {
    if(!str.length) return true;
    const letter = str[0].toLowerCase();
    str = str.substring(1).toLowerCase();
    if(letter.match(/[0-9]/g)) return false;
    if(str.includes(letter.toLowerCase())) return false;
    return isIsogramRec(str)
}

console.log(isIsogram("Dermatoglyphics") == true)
console.log(isIsogram("aba") == false)
console.log(isIsogram("moOse") == false)
console.log(isIsogram("") == true)
console.log(isIsogramRec("Dermatoglyphics") == true)
console.log(isIsogramRec("aba") == false)
console.log(isIsogramRec("moOse") == false)
console.log(isIsogramRec("") == true)