import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Counter = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)

  useImperativeHandle(ref, () => {
    return {
      resetCount: () => setCount(0),
    }
  })

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
    </div>
  )
})

export default Counter
