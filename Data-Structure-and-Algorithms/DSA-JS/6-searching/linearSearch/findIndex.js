/*
Question:
    Write a function that takes an array and a callback function as an argument and returns the index of the value that satisfies
    callback function and returns -1 if none of the values satisfies the callback function.

Sample Inputs:
    console.log(findIndex([2, 4, 6, 8], item => item %2 !== 0)); // -1
    console.log(findIndex([2, 4, 6, 8, 9], item => item %2 !== 0)); // 4
*/

const findIndex = (arr, callbackFn) => {
    if (arr.length === 0) return -1;
    for (let i = 0; i < arr.length; i++) {
        if(callbackFn(arr[i])) i;
    }
    return -1;
}

