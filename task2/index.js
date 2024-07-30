// Find the Largest Element

let number = [3, 7, 1, 9, 2];

let largest = number[0];

for (let i = 1; i < number.length; i++) {
    if (number[i] > largest) {
        largest = number[i];
    }
}
console.log(largest);