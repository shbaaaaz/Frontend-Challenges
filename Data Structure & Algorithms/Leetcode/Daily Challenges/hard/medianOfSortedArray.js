/*
4. Median of Two Sorted Arrays
Link: https://leetcode.com/problems/median-of-two-sorted-arrays/

Description:
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
    The overall run time complexity should be O(log (m+n)).

Example 1:
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

Example 2:
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000

Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 
Constraints:
    nums1.length == m
    nums2.length == n
    0 <= m <= 1000
    0 <= n <= 1000
    1 <= m + n <= 2000
    -106 <= nums1[i], nums2[i] <= 106
*/

const findMedianSortedArrays = (nums1, nums2) => {
    nums2.map(num => nums1.push(num));
    nums1.sort((a, b) => a - b);
    let middle = Math.floor(nums1.length / 2);
    if (nums1.length % 2 !== 0) return nums1[middle];
    else return (nums1[middle] + nums1[middle - 1]) / 2;
};

// Can be optimized