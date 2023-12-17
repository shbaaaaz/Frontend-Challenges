// Write a polyfill for Array.prototype.flat

const arr = [[1, [2, [3, 4, 5, [[[8]]]]]]]

// Simulating the browser incompatibility
Array.prototype.flat = null

if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth) {
    let temp = depth || 1
    const flattenedArray = []
    const helper = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        if (temp === 0) flattenedArray.push(arr[i])
        else {
          temp--
          if (Array.isArray(arr[i])) helper(arr[i])
          else flattenedArray.push(arr[i])
        }
      }
    }
    helper(this)
    return flattenedArray
  }
}

const result = arr.flat(Infinity)

console.log(result)
