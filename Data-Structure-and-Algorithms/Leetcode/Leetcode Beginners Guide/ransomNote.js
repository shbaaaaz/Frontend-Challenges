/*
383. Ransom Note
Link: https://leetcode.com/problems/ransom-note/

Description:
    Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.
    Each letter in magazine can only be used once in ransomNote.

Example 1:
    Input: ransomNote = "a", magazine = "b"
    Output: false

Example 2:
    Input: ransomNote = "aa", magazine = "ab"
    Output: false

Example 3:
    Input: ransomNote = "aa", magazine = "aab"
    Output: true
 
Constraints:
    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.
*/

const convertToObj = arr => {
    return arr.reduce((accumulator, current) => {
        accumulator[current] = (accumulator[current] || 0 ) + 1;
        return accumulator;
    }, {})
}

const canConstruct = (ransomNote, magazine) => {
    const ransomNoteObj = convertToObj([...ransomNote]);
    const magazineObj = convertToObj([...magazine]);
    for (let key in ransomNoteObj) {
        if (!(key in magazineObj)) return false
        else if (ransomNoteObj[key] > magazineObj[key]) return false;
    }
    return true;      
};