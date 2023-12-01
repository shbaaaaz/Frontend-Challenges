/*
136. Single Number
Link: https://leetcode.com/problems/single-number/

Description:
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
    Input: nums = [2,2,1]
    Output: 1

Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

Example 3:
    Input: nums = [1]
    Output: 1
 
Constraints:
    1 <= nums.length <= 3 * 104
    -3 * 104 <= nums[i] <= 3 * 104
    Each element in the array appears twice except for one element which appears only once.
*/

const singleNumber = nums => {
    const hashmap = nums.reduce((map, current) => {
        map[current] = (map[current] || 0) + 1;
        return map;
    }, {})
    for (let key in hashmap) {
        if (hashmap[key] === 1) return Number(key);
    } 
    return;
};