/* 
Question:
    Write a function that accepts two strings and checks if the second string is a valid anagram of the 
    first string. (An anagram is a word, phrase or name formed by rearranging the letters of another) 

Sample Input:
    console.log(validAnagram("Shahbaz", "hsahabz"));
    console.log(validAnagram("Shahbaz", "Shahzad"));

*/

const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return false;
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let char of str1.toLowerCase()) {
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }
    for (let char of str2.toLowerCase()) {
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }
    for (let key in frequencyCounter1){
        if (!(key in frequencyCounter2)) return false;
        else if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
    } 
    return true;
}