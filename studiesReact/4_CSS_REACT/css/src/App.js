import "./App.css";
import MyComponent from './components/MyComponent';
import { useState } from "react";
function App() {
  const n = 15
  const [name] = useState("A")
  const redTitle = true
  return (
    <div classeName="App">
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>Este paragrafo é do App.js</p>
      {/* Inline CSS */}
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma 
      </p>
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizado de forma 
      </p>
      {/* CSS inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinâmico
      </h2>
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS dinâmico
      </h2>
      <h2 style={name === "Gutto" ? ({color: "green", backgroundColor: "#000"}) : null}>
        TESTE NOME
      </h2>
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título vai ter classe dinâmica
      </h2>
    </div>
  )
}

export default App;
