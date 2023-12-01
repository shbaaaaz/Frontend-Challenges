/*
Question:
    Write a recursive function called someRecursive which accepts an array and a callback. 
    The function returns true if a single value in the array returns true when passed to the callback. 
    Otherwise it returns false.

Sample Inputs:
    someRecursive([1,2,3,4], val => val % 2 !== 0) // true
    someRecursive([4,6,8,9], val => val % 2 !== 0) // true
    someRecursive([4,6,8], val => val % 2 !== 0) // false
    someRecursive([4,6,8], val => val > 10); // false
*/

const someRecursive = (arr, callbackFn) => {
    if (arr.length === 0) return false;
    if(callbackFn(arr[0])) return true;
    return someRecursive(arr.slice(1), callbackFn);
}