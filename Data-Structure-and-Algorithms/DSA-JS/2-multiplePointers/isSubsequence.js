/*
Question:
    Write a function called isSubsequence which takes in two strings and checks whether the characters 
    in the first string form a subsequence of the characters in the second string. In other words, the function 
    should check whether the characters in the first string appear somewhere in the second string, 
    without their order changing.

Sample Inputs:
    isSubsequence('hello', 'hello world'); // true
    isSubsequence('sing', 'sting'); // true
    isSubsequence('abc', 'abracadabra'); // true
    isSubsequence('abc', 'acb'); // false (order matters)
*/

const isSubsequence = (stringOne, stringTwo) => {
    let i = 0;
    let j = 0;
    if (!stringOne) return true;
    while (j <= stringTwo.length) {
        if (stringOne[i] === stringTwo[j]) i++;
        if (i === stringOne.length) return true;
        j++;
    }
    return false;
}