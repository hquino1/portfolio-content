import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <a
        href={`${import.meta.env.BASE_URL}HQ_Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </a>
    </>
  )
}

export default App
