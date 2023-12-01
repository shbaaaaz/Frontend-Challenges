/* 
Question:
    Write a function that accepts an array and a number as arguments and returns the 
    index of that number in the array, if the number is not present in the array, return false. 

Sample Input:
    searchNumberInArray([1,2,3,4,5,6,7,8,9,10,11,12], 5)
*/

const searchNumberInArray = (arr, num) => {
    if (arr.length === 0) return false;
    const sortedArr = arr.sort((a, b) => a-b);
    let [min, max] = [0, sortedArr.length-1];
    if (num > sortedArr[max]) return false;
    while (min <= max) {
        let middle = Math.floor((min+max) / 2);
        let value = sortedArr[middle];
        if (value < num) min = middle + 1;
        else if (value > num) max = middle - 1;
        else return middle;
    }
    return false;   
}