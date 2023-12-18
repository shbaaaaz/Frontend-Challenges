const searchInput = document.getElementById('search')
let count = 0
const getData = () => {
  console.log('fetching data', count++)
}

function debounce(Fn, delay) {
  let timer
  return function (...args) {
    clearTimeout(timer)
    let context = this
    timer = setTimeout(() => {
      Fn.apply(context, args)
    }, delay)
  }
}

const getDataEfficently = debounce(getData, 500)

searchInput.addEventListener('keyup', getDataEfficently)
