/*
Question:
    Collect all the odd values in an array

Sample Input:
    console.log(oddValuesInArray([1,2,3,4,5,6])) // [1, 3, 5]
*/

// Approach 1: Using helper method recursion 
const oddValuesInArray = arr => {
    const result = [];
    const helper = helperInput => {
        if (helperInput.length === 0) return;
        let value = helperInput[0];
        if (value % 2 !== 0) {
            result.push(value);
        }
        helper(helperInput.slice(1));
    }
    helper(arr);
    return result;
}

// Approach 2: Using pure recursion
const oddValuesArray = arr => {
    let result = [];
    if (arr.length === 0) return result;
    if (arr[0] % 2 !== 0) result.push(arr[0]);
    result = result.concat(oddValuesArray(arr.slice(1)));
    return result;
} 