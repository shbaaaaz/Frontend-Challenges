// Write a polyfill for Array.prototype.filter

const arr = [1, 2, 3, 4, 5]

// Mocking the browser compatibility issue
Array.prototype.filter = null

if (!Array.prototype.filter) {
  Array.prototype.filter = function (callbackFunction) {
    const filteredArray = []
    for (let i = 0; i < this.length; i++) {
      if (callbackFunction(this[i], i, this)) {
        filteredArray.push(this[i])
      }
    }
    return filteredArray
  }
}

const evenValues = arr.filter((value) => value % 2 === 0)

console.log(evenValues)
