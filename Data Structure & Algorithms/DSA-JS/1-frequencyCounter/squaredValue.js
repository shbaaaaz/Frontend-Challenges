/* 
Question:
    Write a function, which accepts two arrays. The function should return true if every value in the array has
    it’s corresponding value squared in the second array. (Frequency should be same and the order doesn’t matter)

Sample Inputs:
    console.log(square([2,3,4], [9,4,16])) // true
    console.log(square([2,3,4], [9,5,16])) // false
    console.log(square([2,3,4], [9,4])) // false
*/

const square = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    const numberObj = {}
    const squareObj = {}
    for (let item of arr1) {
        numberObj[item] = (numberObj[item] || 0) + 1; 
    }
    for (let item of arr2) {
        squareObj[item] = (squareObj[item] || 0) + 1;
    }
    for (let key in numberObj) {
        if (!(key**2 in squareObj)) return false
        else if (numberObj[key] !== squareObj[key**2]) return false;
    }
    return true;
}

