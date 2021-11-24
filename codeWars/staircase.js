function staircase(num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += ' '.repeat(num - i) + '*'.repeat(i) + '\n';
    }

    return result;
}


console.log(staircase(6))
