/*
Question:
    Write a function that takes an array and a callback function as an argument and returns the value that satisfies
    callback function and returns undefined if none of the elements satisfies the callback function.

Sample Inputs:
    console.log(find([2, 4, 6, 8], item => item %2 !== 0)); // undefined
    console.log(find([2, 4, 6, 8, 9], item => item %2 !== 0)); // 9
*/

const find = (arr, callbackFn) => {
    if (arr.length === 0) return;
    for (let i = 0; i < arr.length; i++) {
        if(callbackFn(arr[i])) return arr[i];
    }
    return;
}

