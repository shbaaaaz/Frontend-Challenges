/*
118. Pascal's Triangle
Link: https://leetcode.com/problems/pascals-triangle/

Description:
    Given an integer numRows, return the first numRows of Pascal's triangle.
    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
    Input: numRows = 1
    Output: [[1]]

Constraints:
    1 <= numRows <= 30
*/

const generate = numRows => {
    const result = [];
    
    for (let row = 0; row < numRows; row++) {
        let newRow = [];
        for (let column = 0; column <= row;column++) {
            if (column === 0 || column === row) newRow.push(1);
            else newRow.push(result[row - 1][column - 1] + result[row - 1][column]);
        }
        result.push(newRow);
    }
    return result;
};