/*

Suppose there is a pyramid of infinite numbers like below; write a function that takes a number as input and returns two numbers below the input number.

Example:

Input: 2
Output: 4, 5

Input: 8
Output: 12, 13

Input: 14
Output: 19, 20

Input:18
Output: 24, 25

                        1
                    2       3
                4       5       6
            7       8       9       10
        11      12      13      14      15
    16      17      18      19      20      21
22      23      24      25      26      27      28


*/

const getPyramidNumbers = (inputNum) => {
  if (!inputNum) return

  let [row, temp] = [1, 0]

  while (true) {
    temp = temp + row
    if (inputNum <= temp) break
    row++
  }
  return [inputNum + row, inputNum + row + 1]
}

console.log(getPyramidNumbers(2))
console.log(getPyramidNumbers(8))
console.log(getPyramidNumbers(14))
console.log(getPyramidNumbers(18))
