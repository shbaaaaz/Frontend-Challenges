/*
412. Fizz Buzz
Link: https://leetcode.com/problems/fizz-buzz/

Descrption:
    Given an integer n, return a string array answer (1-indexed) where:
    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.

Example 1:
    Input: n = 3
    Output: ["1","2","Fizz"]

Example 2:
    Input: n = 5
    Output: ["1","2","Fizz","4","Buzz"]

Example 3:
    Input: n = 15
    Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

Constraints:
    1 <= n <= 104
*/

const fizzBuzz = n => {
    const result = [];
    for (let item = 1; item <= n; item++) {
        if (item % 3 === 0 && item % 5 === 0) result.push("FizzBuzz")
        else if (item % 3 === 0) result.push("Fizz");
        else if (item % 5 === 0) result.push("Buzz");
        else result.push(item.toString());
    }
    return result;
};