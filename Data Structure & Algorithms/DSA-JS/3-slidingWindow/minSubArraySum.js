/* 
Question:
    Write a function which accepts an array of integers and a number called n. 
    The function should calculate the minnimum sum of n consecutive elements in the array. 

Sample Input:
    minSubArraySum([1,2,5,2,8,1,5],2)  ==> 3
    minSubArraySum([1,2,5,2,8,1,5],4) ==> 10
    minSubArraySum([4,2,1,6],1) ==> 3
    minSubArraySum([4,2,1,6,2],4) ==> 11
    minSubArraySum([],4) ==> null

*/

const minSubArraySum = (arr, num) => {
    if (arr.length === 0) return null;
    let minSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        minSum += arr[i];
    }
    tempSum = minSum;
    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum + arr[j] - arr[j - num];
        minSum = Math.min(minSum, tempSum);
    }
    return minSum;
}