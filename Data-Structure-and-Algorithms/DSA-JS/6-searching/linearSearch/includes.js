/*
Question:
    Write a function that takes an array and a value and returns the true if the value is present in the array,
    else return false (This program is similar to the implementation of array/string built-in method includes)

Sample Input:
    includes([10, 15, 20, 25, 30], 15) // true
    includes([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // true
    includes([100], 100) // true
    includes([1,2,3,4,5], 6) // false
    includes([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // false
    includes([100], 200) // false
*/

const includes = (arr, val) => {
    if (arr.length === 0) return false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}