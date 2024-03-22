import {useState} from "react";


export const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(15);

    console.log(number)
  return (
    <div>
        <div>
            <p>Valor: {someData}</p>
            <button onClick={() => {someData = 15}}> Mudar variável </button>
        </div>
        <div>
        <div>
            <p>Valor: {number}</p>
            <button onClick={() => setNumber(25)}> Mudar variável </button>
        </div>
        </div>
    </div>
  );
};

export default ManageData;