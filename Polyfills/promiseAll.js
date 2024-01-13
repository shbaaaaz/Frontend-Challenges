// Write a polyfill for Promise.all

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved 1')
  }, 1000)
})

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved 2')
  }, 1000)
})

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('resolved 3')
  }, 1000)
})

// Simulating browser incompatibility
Promise.all = null

Promise.all = function (args) {
  // This array will store the resolved promise responses in the same order as they are passed
  const result = []

  // All the promises will run inside a bigger promise that will either resolve if all the promises are resolved or reject if any of the promise is rejected
  return new Promise((resolve, reject) => {
    for (let i = 0; i < args.length; i++) {
      args[i]
        .then((val) => {
          result[i] = val
          if (i === args.length - 1) resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    }
  })
}

Promise.all([promiseOne, promiseTwo, promiseThree])
  .then((val) => console.log(val))
  .catch((err) => console.log(err))
