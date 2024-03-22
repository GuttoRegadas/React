import MyComponents from "./MyComponents";

const FirstComponent = () => {
    //Essa faz isso
    /* testes de comentárioa */

    return (
        
        <div>
            {/* Outro teste de comentário, obs: é obrigatório estar dentro de elemento pai */}
            <h1>Meu primeiro componete</h1>
            <p className='teste'>Meu texto</p>
            <MyComponents/>
        </div>
    )
};

export default FirstComponent;
