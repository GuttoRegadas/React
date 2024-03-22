import React from 'react'

const PersonDetails = ({name, age, profession}) => {
    const renderCoditional = () => {
        if (age >= 18 ) {
            return <h5>O usuário pode tirar a carteira de motorista!</h5>;
        } else {
            return <h5>O usuário não pode tirar a carteira de motorista por ter menos de 18 anos!</h5>;
        }

    };
  return (
    <div>
        <h2>Lista de pessoas</h2>
        <ul>
            <li>Nome: {name}</li>
            <li>IdaDE: {age}</li>
            <li>Profição: {profession}</li>
        </ul>
        { renderCoditional()}
    </div>
  )
}

export default PersonDetails