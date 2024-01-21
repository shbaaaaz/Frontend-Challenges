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
  if (args.length === 0) return

  const frequencyCounter = {}

  for (let val of args) {
    if (frequencyCounter[val]) return true
    else frequencyCounter[val] = 1
  }
  return false
}
