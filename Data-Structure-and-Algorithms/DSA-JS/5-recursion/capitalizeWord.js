/*
Question:
    Write a recursive function called capitalizeWords. Given an array of words, 
    return a new array containing each word capitalized.

Sample Input:
    let words = ['i', 'am', 'learning', 'recursion'];
    capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

const capitalizeWords = arr => {
    const result = [];
    const helper = inputArray => {
        if (inputArray.length === 0) return;
        result.push(inputArray[0].toUpperCase());
        helper(inputArray.slice(1));
    }
    helper(arr);
    return result;
}