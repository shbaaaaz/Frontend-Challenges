/*
Question:
    Implement bubbleSort function that takes an array and sorts it in ascending order.

Sample Input:
    bubbleSort([2,4,1,12, 8]) // [1, 2, 4, 8, 12]

*/

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const bubbleSort = (arr) => {
    if (arr.length === 0) return arr;
    let noSwaps;
    for (let i = arr.length - 1; i >= 0; i--) {
        noSwaps = true;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}