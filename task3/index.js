// Find the Smallest Element
let number = [3, 7, 1, 9, 2];

let smallest = number[0];

for (let i = 1; i < number.length; i++) {
    if (number[i] < smallest) {
        smallest = number[i];
    }
}
console.log(smallest);