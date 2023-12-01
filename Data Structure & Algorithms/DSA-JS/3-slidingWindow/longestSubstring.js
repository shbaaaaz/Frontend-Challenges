/*
Question: 
    Write a function called findLongestSubstring, which accepts a string and returns the length of the 
    longest substring with all distinct characters.

Sample Input:
    findLongestSubstring('') // 0
    findLongestSubstring('rithmschool') // 7
    findLongestSubstring('thisisawesome') // 6
    findLongestSubstring('thecatinthehat') // 7
    findLongestSubstring('bbbbbb') // 1
    findLongestSubstring('longestsubstring') // 8
    findLongestSubstring('thisishowwedoit') // 6
*/

// Solution 1: Using string.includes

const findLongestSubstring = inputString => {
    let start = 0;
    let end = 0;
    let longestSubstringLength = 0;
    let tempString = "";

    if (!inputString) return 0;

    while (start < inputString.length) { 
        if (end >= inputString.length) break;
        if (!tempString || (tempString && !tempString.includes(inputString[end]))) {
            tempString += inputString[end];
            longestSubstringLength = Math.max(longestSubstringLength, tempString.length);
            end++;
        } else if (tempString && tempString.includes(inputString[end])) {
            start++;
            tempString = inputString.substring(start, end);
        }  
    }
    return longestSubstringLength;
}

console.log(findLongestSubstring('thisisawesome'))


// Solution 2: Using Object
    
const longestSubstring = inpString => {
    let start = 0;
    let longestSubstringLength = 0;
    let seen = {};

    for (let i = 0; i < inpString.length; i++) {
        let char = inpString[i];
        if (seen[char]) start = Math.max(start, seen[char]);
        longestSubstringLength = Math.max(longestSubstringLength, i - start + 1);
        seen[char] = i + 1;
    }
    return longestSubstringLength;
}