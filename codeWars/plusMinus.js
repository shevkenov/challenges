function plusMinus(arr) {
    const positiveNum = arr.filter(n => n > 0);
    const negativeNum = arr.filter(n => n < 0);
    const zeros = arr.filter(n => n === 0);

    console.log((positiveNum.length / arr.length).toFixed(6))
    console.log((negativeNum.length / arr.length).toFixed(6))
    console.log((zeros.length / arr.length).toFixed(6))
}

plusMinus([-4, 3, -9, 0, 4, 1])