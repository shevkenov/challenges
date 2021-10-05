function generateHashtag (str) {
    if(str.trim().length === 0) return false;
    
    str = '#' + str.split(/\s+/).map(v => v[0].toUpperCase() + v.slice(1)).join("")
    return str.length > 140 ? false : str
}

console.log(generateHashtag(""))
console.log(generateHashtag(" "))
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Code wars"))
console.log(generateHashtag("Codewars Is Nice"))
console.log(generateHashtag("code" + " ".repeat(140) + "wars"))
console.log(generateHashtag("a".repeat(139)))
console.log(generateHashtag("a".repeat(140)))