// Write a polyfill for Array.prototype.find

const arr = [1, 2, 3, 4, 5]

// Simulating the browser incompatibility
Array.prototype.find = null

if (!Array.prototype.find) {
  Array.prototype.find = function (callback) {
    let value
    for (let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this)) {
        value = this[i]
        break
      }
    }
    return value
  }
}

const value = arr.find((val) => val ** 2 === 9)

console.log(value)
