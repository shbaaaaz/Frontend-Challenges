// Write a polyfill for Array.prototype.some

const arr = [1, 2, 3, 4, 5]

// Simulating the browser incompatibility
Array.prototype.some = null

if (!Array.prototype.some) {
  Array.prototype.some = function (callback) {
    let result = false
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        result = true
        break
      }
    }
    return result
  }
}

const isGreaterThanFour = arr.some((val) => val > 4)
const isGreaterThanFive = arr.some((val) => val > 5)
const isPositive = arr.some((val) => val > 0)

console.log(isGreaterThanFour)
console.log(isGreaterThanFive)
console.log(isPositive)
