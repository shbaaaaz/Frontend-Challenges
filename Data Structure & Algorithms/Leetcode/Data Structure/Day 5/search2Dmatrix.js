/*
74. Search a 2D Matrix
Link: https://leetcode.com/problems/search-a-2d-matrix/

Description:
    Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
    Integers in each row are sorted from left to right.
    The first integer of each row is greater than the last integer of the previous row.
 
Example 1:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
    Output: true

Example 2:
    Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
    Output: false
 
Constraints:
    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104
*/

const searchMatrix = (matrix, target) => {
    let identifiedRow = 0;
    
    for (let row = 0; row < matrix.length; row++) {
        let col = matrix[row].length - 1;
        if (target <= matrix[row][col]) {
            identifiedRow = row;
            break;
        }
    }
    
    const sortedArray = matrix[identifiedRow];
    let min = 0;
    let max = sortedArray.length - 1;
    
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        if (target < sortedArray[middle]) max = middle - 1;
        else if (target > sortedArray[middle]) min = middle + 1;
        else return true;
    }
    return false;
};