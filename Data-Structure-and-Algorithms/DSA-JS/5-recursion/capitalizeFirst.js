/*
Question: 
    Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the 
    first letter of each string in the array.

Sample Inputs:
    capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

const capitalizeFirst = arr => {
    const result = [];
    const helper = (inputArr) => {
        if (inputArr.length === 0) return;
        const word = [...inputArr[0]];
        word[0] = word[0].toUpperCase();
        result.push(word.join(''));
        return helper(inputArr.slice(1));
    };
    helper(arr);
    return result;  
};

