
const CarDetails = ({brand, color, km, newCar}) => {
  return (
    <div>
        <h2>Detales do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Cor: {color}</li>
            <li>KM: {km}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p> }
    </div>
  )
}

export default CarDetails