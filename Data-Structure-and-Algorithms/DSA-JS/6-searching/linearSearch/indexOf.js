/*
Question:
    Write a function that takes an array and a value and returns the index of the array if the value is present in the array,
    else just return -1 (This program is similar to the implementation of array/string built-in method indexOf)

Sample Input:
    indexOf([10, 15, 20, 25, 30], 15) // 1
    indexOf([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
    indexOf([100], 100) // 0
    indexOf([1,2,3,4,5], 6) // -1
    indexOf([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
    indexOf([100], 200) // -1
*/

const indexOf = (arr, value) => {
    if (arr.length === 0) return -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) return i;
    }
    return -1;
}