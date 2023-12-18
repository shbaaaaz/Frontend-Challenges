import React from 'react'
import Input from './Input'
import Counter from './Counter'
import { useRef } from 'react'

const Form = () => {
  const inputRef = useRef(null)
  const counterRef = useRef(null)

  const clearForm = (e) => {
    e.preventDefault()
    inputRef.current.resetInput()
    counterRef.current.resetCount()
  }

  return (
    <div>
      <Input ref={inputRef} />
      <Counter ref={counterRef} />
      <button onClick={clearForm}>Clear</button>
    </div>
  )
}

export default Form
