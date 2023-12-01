/*
Question: 
    Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
    and checks whether there are any duplicates among the arguments passed in.  

Sample Inputs:
    areThereDuplicates(1, 2, 3) // false
    areThereDuplicates(1, 2, 2) // true 
    areThereDuplicates('a', 'b', 'c', 'a') // true
*/

const areThereDuplicates = (...args) => {
    const sortedArray = args.sort((a, b) => a > b);
    if (sortedArray.length === 0) return false;
    let i = 0;
    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[i] === sortedArray[j]) return true;
        i++;
    } 
    return false;
}