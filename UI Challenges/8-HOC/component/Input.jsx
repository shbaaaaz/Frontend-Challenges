import React, { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor='name'>Employee Name</label>
      <input ref={ref} id='name' type='text' placeholder='Enter the name' />
    </div>
  )
})

export default Input
