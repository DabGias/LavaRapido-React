import styled from "styled-components"

const StyleForm = styled.form `
    width: 40%;
    margin: 20px auto;
    padding: 10px;
    border-radius: 20px;

    fieldset {
        font-weight: bold;
        border: 2px solid black;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-items: center;
    }

    legend {
        text-align: center;
    }

    input {
        width: 70%;
        margin: 10px auto;
        border: 2px solid black;
        border-radius: 10px;
        padding: 10px;
        text-align: center;
    }

    input::placeholder {
        color: black;
    }

    input:focus {
        background-color: #cccccc;
    }

    .btns {
        display: flex;
        justify-content: space-around;
        width: 70%;
        margin: 20px auto;
    }

    .cad, .limp {
        cursor: pointer;
        font-weight: bold;
        border-radius: 10px;
        border: 2px solid;
        padding: 10px;
    }

    .limp {
        background-color: #00bfff;
    }

    .limp:hover {
        box-shadow: #00bfff 0px 0px 20px;
    }

    .cad {
        background-color: #00ff00;
    }

    .cad:hover {
        box-shadow: #00ff00 0px 0px 20px;
    }
`

function FormCarro(props) {
    return(
        <>
            <StyleForm onSubmit={props.cadastraCarro}>
                <fieldset>
                    <legend>Criar um novo registro</legend>

                    <input type="text" placeholder="Marca" name="marca" value={props.carros.marca} onChange={props.criaCarro}/>

                    <input type="text" placeholder="Modelo" name="modelo" value={props.carros.modelo} onChange={props.criaCarro}/>

                    <input type="text" placeholder="Placa" name="placa" value={props.carros.placa} onChange={props.criaCarro}/>

                    <div className="btns">
                        <button type="submit" className="cad">Cadastrar</button>
                        <button type="reset" className="limp">Limpar</button>
                    </div>
                </fieldset>
            </StyleForm>
        </>
    )
}

export default FormCarro