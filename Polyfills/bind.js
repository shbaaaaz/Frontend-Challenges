// Write polyfill for bind

let name = {
  firstName: 'Shahbaz',
  lastName: 'Khan',
}

// Simulating browser incompatibility
Function.prototype.bind = null

if (!Function.prototype.bind) {
  Function.prototype.bind = function (...args) {
    let obj = this
    const params = args.slice(1)
    return function (...args2) {
      obj.apply(args[0], [...params, ...args2])
    }
  }
}

function printName(message, place) {
  console.log(
    this.firstName + ' ' + this.lastName + ' says ' + message + ' from ' + place
  )
}

let printMyname = printName.bind(name, 'hello')
printMyname('Germany')
