/*
Question:
    Implement selectionSort function that takes an array and sorts it in ascending order.

Sample Input:
    selectionSort([2,4,1,12, 8]) // [1, 2, 4, 8, 12]

*/

const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

const selectionSort = arr => {
    if (arr.length === 0) return arr;
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }
        if (min !== i) swap(arr, i, min);
    }
    return arr;
}