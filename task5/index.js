// Count Occurrences of an Element
let arr= [1, 2, 2, 3, 2, 4, 5];
let n = arr.length;
let count = 0;
for (let i=0;i<n;i++) {
    if (arr[i] === 2)
        count++;
}
console.log(count);

