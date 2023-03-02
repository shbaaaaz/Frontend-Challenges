const btnGroup = document.querySelector('#btn-group')
const badge = document.querySelector('#badge')

btnGroup.addEventListener('click', (event) => {
  badge.style.backgroundColor = event.target.id === 'busy' ? 'red' : 'green'
})
