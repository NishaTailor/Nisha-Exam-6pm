// Rotate Array
function rotateArray(arr, positions) {
    const n = arr.length;

    const effectivePositions = positions % n;
    if (effectivePositions === 0) return arr;

    const endPart = arr.slice(-effectivePositions);
    const startPart = arr.slice(0, -effectivePositions);

    return endPart.concat(startPart);
}

const arr = [1, 2, 3, 4, 5];
const positions = 2;
const rotatedArr = rotateArray(arr, positions);
console.log(rotatedArr);
