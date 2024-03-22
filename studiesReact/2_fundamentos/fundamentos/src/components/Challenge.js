const Challenge = () => {
    const a = 5
    const b = 7
    return (
        <div>
            <div>
                <p>Valor de A é: {a}</p>
                <p>Valor de B é: {b}</p>
            </div>
            <div>
                <button onClick={() =>{ console.log(a + b)}}>Clique para somar</button>
            </div>
        </div>
    )
};
export default Challenge;