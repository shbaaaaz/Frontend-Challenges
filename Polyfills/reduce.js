// Write a polyfill for Array.prototype.reduce

const arr = [1, 2, 3, 4, 5, 6]

// Simulating browser incompatibility
Array.prototype.reduce = null

if (!Array.prototype.reduce) {
  Array.prototype.reduce = function (callback, initialValue = null) {
    let acc = initialValue
    for (let i = 0; i < this.length; i++) {
      acc = callback(acc, this[i], i, this)
    }
    return acc
  }
}

const sum = arr.reduce((acc, curr) => {
  return acc + curr
})

console.log(sum)
