function firstNonRepeatingLetter(str) {
  if (str.length === 0) return "";
  const allLetters = str.split("").reduce((acc, cur) => {
    if(!acc[cur.toLowerCase()]){
      acc[cur] = 0;
    }
    acc[cur] += 1;

    return acc
  },{})

  const letterFound = Object.keys(allLetters).find(l => allLetters[l] === 1) || '';
  
  return letterFound
}

console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter('stress'));
console.log(firstNonRepeatingLetter('sTtress'));
console.log(firstNonRepeatingLetter("moonmen"));
console.log(firstNonRepeatingLetter("moonmene"));
