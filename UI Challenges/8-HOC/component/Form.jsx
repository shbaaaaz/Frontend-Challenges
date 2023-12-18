import React from 'react'
import Input from './Input'
import { useRef } from 'react'

const Form = () => {
  const inputRef = useRef(null)

  const logValue = (e) => {
    e.preventDefault()
    console.log(inputRef.current.value)
  }
  return (
    <form onSubmit={logValue}>
      <Input ref={inputRef} />
      <button>Submit</button>
    </form>
  )
}

export default Form
