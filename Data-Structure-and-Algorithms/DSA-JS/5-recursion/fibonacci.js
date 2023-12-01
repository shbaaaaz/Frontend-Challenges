/*
Question:
    Write a recursive function called fib which accepts a number and returns the nth number in the 
    Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 
    1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal 
    to the sum of the previous two numbers.

Sample Inputs:
    fib(4) // 3
    fib(10) // 55
    fib(28) // 317811
    fib(35) // 9227465
*/

// Approach 1: Pure Recursion

const fib_1 = n => {
    if (n <= 2) return 1;
    return fib_1(n-1) + fib_1(n-2);
}

// Approach 2: Helper Method Recursion

const fib_2 = num => {
    const fibonacci = [];
    const helper = (maxLength) => {
        if (fibonacci.length < maxLength) {
            if (fibonacci.length <= 1) fibonacci.push(1);
            else fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
            return helper(maxLength)
        } 
    } 
    helper(num);
    return fibonacci[fibonacci.length - 1];
}