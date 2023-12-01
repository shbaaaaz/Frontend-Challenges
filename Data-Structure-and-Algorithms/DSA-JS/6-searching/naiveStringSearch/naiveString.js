/*
Question:
    Write a function that takes two strings and returns the count of the number of times the second string appears
    in the first one. 

Sample Inputs:
    naiveString("sacbjomgbkjasdbcojnsa omg", "pop") // 0
    naiveString("sacbjomgbkjasdbcojnsa omg", "omg") // 2
*/

const naiveString = (longStr, shortStr) => {
    let count = 0;
    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < shortStr.length; j++) {
            if (longStr[i] !== shortStr[j]) break;
            else i++;
            if (j === shortStr.length - 1) count++;
        }
    }
    return count;
}