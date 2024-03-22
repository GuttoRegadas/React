import FirstComponent from './components/FirstComponents';
import TemplateExpressions from './components/TemplateExpresions';
import MyComponents from './components/MyComponents';
import Events from './components/Events';
import Challenge from './components/Challenge';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import './App.css';
/* import { MangeData } from './components/ManageData' */
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from "react";
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import PersonDetails from './components/PersonDetails';




function App() {
  //const name = "Joaquim"
  const [userName] = useState("Maria")

  const person = [
    {id: 1, name: "Luciano", age: 40, profession: "Programador"},
    {id: 2, name: "Gutto", age: 30, profession: "Desenvolvedor"},
    {id: 3, name: "Carol", age: 17, profession: "Tester"}
  ];

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "Branco", newCar: false, km: 34000},
    {id: 3, brand: "Renaut", color: "Azul", newCar: false, km: 110000}
  ];

  function showMessage() {
    console.log("Evento do compenente pai!")
  }
  
  const [message, setMessage] = useState("");
  
  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <h2>Meu h2 pra mostar</h2>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponents/>
      <Events/>
      <Challenge/>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name = {userName}/>
      {/* Destruturing */}
      <CarDetails brand="Audi" km={100000} color="Preto" newCar={false}/>
      {/* Reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelha"newCar={true}/>
      <CarDetails brand="Fiat" km={7500} color="Branca"newCar={false}/>
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color} 
          km={car.km} 
          newCar={car.newCar}
        />
      ))}
      {/* Frangment */}
      <Fragments propFragment="TESTE"/>
      {/* Children */}
      <Container myValue="Testing">
         <p>Este é o conteúdo do container</p>
      </Container>
      <Container myValue="Testing 2">
         <h5>Testando o container</h5>
      </Container>
      <ExecuteFunction myFunction={showMessage}/>
      {/* State lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
      {/* Desafio */}
      {person.map((person) => (
        <PersonDetails
          key={person.key}
          name={person.name}
          age={person.age}
          profession={person.profession}
      
      />
      ))}
      
    </div>
    
  );
};

export default App;
