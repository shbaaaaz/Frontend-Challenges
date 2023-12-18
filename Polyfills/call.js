// Write a polyfill for Function.prototype.call

const person = {
  name: 'Shahbaz',
}

function greet(message) {
  return this.name + ' says ' + message
}

// Simulatng browser incompatibility
Function.prototype.call = null

if (!Function.prototype.call) {
  Function.prototype.call = function (...args) {
    const obj = this
    const params = args.slice(1)
    return obj.apply(args[0], params)
  }
}

const result = greet.call(person, 'Hello')
console.log(result)
