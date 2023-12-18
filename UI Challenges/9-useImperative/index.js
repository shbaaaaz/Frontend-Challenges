import React from 'react'
import ReactDOM from 'react-dom/client'
import Form from './component/Form'

const App = () => {
  return (
    <div>
      <Form />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)
