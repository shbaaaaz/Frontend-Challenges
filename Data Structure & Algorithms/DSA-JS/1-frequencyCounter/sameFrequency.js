/*
Question: 
    Write a function called sameFrequency. Given two positive integers, 
    find out if the two numbers have the same frequency of digits.
    Your solution MUST have the following complexities: Time: O(N)

Sample Input:
    sameFrequency(182,281) // true
    sameFrequency(34,14) // false
    sameFrequency(3589578, 5879385) // true
    sameFrequency(22,222) // false
*/

const objectCreator = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
}

const sameFrequency = (num1, num2) => {
    const [arr1, arr2] = [[...num1.toString()], [...num2.toString()]];
    if (arr1.length !== arr2.length) return false;

    const frequencyCounter1 = objectCreator(arr1);
    const frequencyCounter2 = objectCreator(arr2);
    
    for (let key in frequencyCounter1) {
        if (!(key in frequencyCounter2)) return false;
        else if (frequencyCounter2[key] !== frequencyCounter2[key]) return false;
    }
    return true;
}