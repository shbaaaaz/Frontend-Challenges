let count = 0

const logResize = () => {
  console.log('Resized', count++)
}

function throttle(Fn, delay) {
  let hasTimeExpired = true
  return function (...args) {
    let context = this
    if (hasTimeExpired) {
      Fn.apply(context, args)
      hasTimeExpired = false
      setTimeout(() => {
        hasTimeExpired = true
      }, delay)
    }
  }
}

const logResizeEfficiently = throttle(logResize, 2000)

window.addEventListener('resize', logResizeEfficiently)
