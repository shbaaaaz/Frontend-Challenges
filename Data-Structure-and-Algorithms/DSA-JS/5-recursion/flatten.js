/*
Question:
    Write a recursive function called flatten which accepts an array of arrays and returns 
    a new array with all values flattened.

Sample Inputs:
    flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    flatten([[1],[2],[3]]) // [1,2,3]
    flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

const flatten = arr => {
    const result = [];
    const helper = (inputArray) => {
        for (let i = 0; i < inputArray.length; i++) {
            if (Array.isArray(inputArray[i])) {   
                helper(inputArray[i]); 
            } else {
                result.push(inputArray[i]);
            }
        }
    }
    helper(arr)
    return result;
}
