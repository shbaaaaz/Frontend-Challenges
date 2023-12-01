/*
Question:
    Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
    The range will be an array of two numbers that will not necessarily be in numerical order.
    For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
*/

function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
      upperBound *= i;
    }
    for (let multiple = max; multiple <= upperBound; multiple += max) {
      let divisorCount = 0;
      for (let i = min; i <= max; i++) {
        if (multiple % i === 0) {
          divisorCount += 1;
        }
      }
      if (divisorCount === numberDivisors) {
        return multiple;
      }
    }
  }
  
  smallestCommons([1, 5]);