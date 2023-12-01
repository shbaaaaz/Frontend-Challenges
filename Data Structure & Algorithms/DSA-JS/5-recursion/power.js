/*
Question:
    Write a function called power which accepts a base and an exponent. 
    The function should return the power of the base to the exponent. This function should mimic the
    functionality of Math.pow()  - do not worry about negative bases and exponents.

Sample Inputs:
    power(2,0) // 1
    power(2,2) // 4
    power(2,4) // 16
*/

const power = (base, exponent) => {
    if (base === 0) return 0;
    if (exponent === 0) return 1;
    else if (exponent > 0) {
        return base * power(base, exponent - 1);
    }   
}