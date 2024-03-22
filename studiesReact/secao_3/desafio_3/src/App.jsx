import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import City from './assets/city.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Avançando no React</h1>
        {{/* Imagem em public */}}
        <div>
          <img src="/img1.jpg" alt="Paisagem" />
        </div>
        {{/* Imagem em assets */}}
        <div>
          <img src={City} alt="Cidade" />
        </div>
      </div>
    </>
  )
}

export default App
