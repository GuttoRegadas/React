
import './App.css';
import logo from './filha.jpg';
import City from './assets/city.jpg'
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <h1>Te amo hoje amanhã e sempre!</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Emmelly</h2>
      <div>
        <img src="./img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ConditionalRender/>
    </div>
    
  );
}

export default App;
