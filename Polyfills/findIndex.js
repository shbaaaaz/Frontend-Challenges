//  Write polyfill for Array.prototype.findIndex

const arr = [8, 6, 2, 3, 5]

// Simulating browser incompatibility
Array.prototype.findIndex = null

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function (callbackFn) {
    let result = -1
    for (let i = 0; i < this.length; i++) {
      if (callbackFn(this[i])) {
        result = i
        break
      }
    }
    return result
  }
}

const result = arr.findIndex((val) => val < 7)
console.log(result)

const result2 = arr.findIndex((val) => val < 0)
console.log(result2)
