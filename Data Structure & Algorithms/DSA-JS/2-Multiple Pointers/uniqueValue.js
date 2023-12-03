/*
Question: 
    Implement a function which accepts a sorted array, and count the unique value in the array.
    There can be negative numbers in the array but it will always be sorted. 

Sample Inputs:
    countUnique[1,1,2,4,4,5] => 4
*/

const countUnique = (arr) => {
  if (arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}

console.log(countUnique([1, 2, 2, 3, 3, 4, 4]))

// Alternate approach without modifying the existing array

const countUnique2 = (arr) => {
  if (arr.length === 0) return 0
  let [i, uniqueCount] = [0, 1]
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      uniqueCount++
      i = j
    }
  }
  return uniqueCount
}
