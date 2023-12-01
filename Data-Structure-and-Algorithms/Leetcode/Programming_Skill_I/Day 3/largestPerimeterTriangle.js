/*
976. Largest Perimeter Triangle
Link: https://leetcode.com/problems/largest-perimeter-triangle/

Description:
    Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.

Example 1:
    Input: nums = [2,1,2]
    Output: 5

Example 2:
    Input: nums = [1,2,1]
    Output: 0
 
Constraints:
    3 <= nums.length <= 104
    1 <= nums[i] <= 106
*/

const largestPerimeter = nums => {
    const sortedNums = [...nums].sort((a, b) => a - b);
    for (let num = sortedNums.length - 1; num >= 0; num--) {
        const [sideOne, sideTwo, sideThree] = [sortedNums[num], sortedNums[num - 1], sortedNums[num - 2]];
        if (sideOne < sideTwo + sideThree) return sideOne + sideTwo + sideThree;
    }
    return 0;
};