/*
Question: 
    Write a function that calculates the sum of numbers upto n.

Sample Input:
    sumRange(5) // 15
*/

const sumRange = num => {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
