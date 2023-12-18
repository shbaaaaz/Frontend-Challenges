const person = {
  name: 'Shahbaz',
}

function greet(message, place) {
  return this.name + ' says ' + message + ' from ' + place
}

Function.prototype.apply = null

if (!Function.prototype.apply) {
  Function.prototype.apply = function (ref, params) {
    return this.call(ref, ...params)
  }
}

console.log(greet.apply(person, ['Hello', 'Germany']))
