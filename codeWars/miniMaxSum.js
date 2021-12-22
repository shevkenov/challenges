function miniMaxSum(arr) {
    const orderedArr = arr.sort((a,b) => a - b)
    console.log(orderedArr.slice(0, arr.length - 1).reduce((acc,cur) => acc+=cur, 0) + ' ' + orderedArr.slice(1).reduce((acc,cur) => acc+=cur, 0))
}

miniMaxSum([1,3,5,7,9])
miniMaxSum([1,2,3,4,5])