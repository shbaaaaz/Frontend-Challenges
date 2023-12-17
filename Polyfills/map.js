// Write polyfill for Array.prototype.map()

const arr = [1, 2, 3, 4, 5]

// Simulating browser incompatibility
Array.prototype.map = null

if (!Array.prototype.map) {
  Array.prototype.map = function (callbackFunction) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
      newArray.push(callbackFunction(this[i], i, this))
    }
    return newArray
  }
}

const squaredValues = arr.map((val) => val ** 2)

console.log(squaredValues)
