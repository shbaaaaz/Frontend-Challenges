/*
217. Contains Duplicate
Link: https://leetcode.com/problems/contains-duplicate/?envType=study-plan&id=data-structure-i

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:
    Input: nums = [1,2,3,1]
    Output: true

Example 2:
    Input: nums = [1,2,3,4]
    Output: false

Example 3:
    Input: nums = [1,1,1,3,3,4,3,2,4,2]
    Output: true
 
Constraints:
    1 <= nums.length <= 105
    -109 <= nums[i] <= 109
*/

// Approach 1 - Using hashmap

const containsDuplicate = nums => {
    const frequencyCounter = nums.reduce((hashmap, current) => {
        hashmap[current] = (hashmap[current] || 0) + 1;
        return hashmap;
    }, {})
    for (let key in frequencyCounter) {
        if (frequencyCounter[key] > 1) return true;
    }
    return false;
};

// Approach 2 - using Set

const containsDuplicateValues = nums => nums.length !== [...new Set(nums)].length;
