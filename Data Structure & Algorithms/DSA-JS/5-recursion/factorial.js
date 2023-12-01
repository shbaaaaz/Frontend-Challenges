/*
Question: 
    Write a function that returns the factorial of a number.

Sample Input:
    factorial(5) // 120
    factorial(4) // 24
    factorial(3) // 6
*/

const factorial = num => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}