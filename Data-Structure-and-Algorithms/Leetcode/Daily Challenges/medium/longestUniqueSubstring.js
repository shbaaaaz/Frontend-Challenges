/*
3. Longest Substring Without Repeating Characters
Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/

Description:
    Given a string s, find the length of the longest substring without repeating characters.

Example 1:
    Input: s = "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.

Example 2:
    Input: s = "bbbbb"
    Output: 1
    Explanation: The answer is "b", with the length of 1.

Example 3:
    Input: s = "pwwkew"
    Output: 3
    Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.
*/

const lengthOfLongestSubstring = s => {
    let longestLength = 0;
    let start = 0;
    const map = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char]) start = Math.max(start, map[char]);
        longestLength = Math.max(longestLength, i - start + 1);
        map[char] = i + 1;
    }
    return longestLength;
};