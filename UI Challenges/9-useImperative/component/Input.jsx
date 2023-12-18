import React, { forwardRef, useState, useImperativeHandle } from 'react'

const Input = forwardRef((props, ref) => {
  const [text, setText] = useState('')

  useImperativeHandle(ref, () => {
    return {
      resetInput: () => setText(''),
    }
  })
  return (
    <div>
      <label htmlFor='name'>Employee Name</label>
      <input
        id='name'
        type='text'
        placeholder='Enter the name'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  )
})

export default Input
