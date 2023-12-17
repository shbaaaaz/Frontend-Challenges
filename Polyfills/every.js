// Write a polyfill for Array.prototype.every

const arr = [1, 2, 3, 4, 5]

// Simulating the browser incompatibility
Array.prototype.every = null

if (!Array.prototype.every) {
  Array.prototype.every = function (callback) {
    let boolSwitch = true
    for (let i = 0; i < this.length; i++) {
      if (!callback(this[i], i, this)) {
        boolSwitch = false
        break
      }
    }
    return boolSwitch
  }
}

const isPositive = arr.every((val) => val > 0)
const isGreaterThanTwo = arr.every((val) => val > 2)

console.log(isPositive)
console.log(isGreaterThanTwo)
