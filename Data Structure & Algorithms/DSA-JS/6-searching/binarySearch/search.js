/*
Question: 
    Write a function that takes a sorted array and a value as an argument and checks 
    whether the value exists in the array or not, return the index of the element if it does else return -1.

Sample Inputs:
    console.log(search([1,2,3,4,5,6,7,8], 9)) // false
    console.log(search([1,2,3,4,5,6,7,8], 7)) // true
*/

const search = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    if (arr.length === 0) return -1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] < value) start = middle + 1;
        else if (arr[middle] > value) end = middle - 1;
        else return middle;
    }
    return -1;
}