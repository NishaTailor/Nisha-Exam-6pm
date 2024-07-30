function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

const arr = [1, 2, 4, 5, 6];
console.log(findMissingNumber(arr)); 
