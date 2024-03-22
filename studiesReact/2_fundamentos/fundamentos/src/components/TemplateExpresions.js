const TemplateExpressions = () => {

    const name = "FiocruzCE"
    const data = {
        age:38,
        job: "Programer"
    };

    return (
        <div>
            <h1>Seja Bem vindo a {name}</h1>
            <p>E trabalho como {data.job} </p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )

};
export default TemplateExpressions;