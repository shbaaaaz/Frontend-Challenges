// Write a polyfill for Array.isArray()

const arr = [1, 2, 3, 4, 5]
const str = ''

// Simulating browser incompatibility
Array.isArray = null

if (!Array.isArray) {
  Array.isArray = function (value) {
    return Array.prototype.isPrototypeOf(value)
  }
}

console.log(Array.isArray(arr)) // true
console.log(Array.isArray(str)) // false
