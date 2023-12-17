// Write a pollyfill for Array.prototype.forEach()

const arr = [1, 2, 3, 4, 5]

// Simulating browser incompatibility
Array.prototype.forEach = null

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callbackFunction) {
    for (let i = 0; i < this.length; i++) {
      callbackFunction(this[i])
    }
  }
}

arr.forEach((value) => {
  console.log(value * 2)
})
