import styled from "styled-components"
import { FaTrashAlt as X } from "react-icons/fa"

const StyleCarro = styled.div `
    background-color: #ffff90;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    min-height: 100px;
    margin: 10px;

    h2, p {
        font-family: cursive;
        padding-bottom: 10px;
    }
    
    .remov {
        cursor: pointer;
        background-color: #f34d4d;
        font-weight: bold;
        border-radius: 10px;
        border: 2px solid;
        padding: 10px;
    }

    .remov:hover {
        box-shadow: #f34d4d 0px 0px 20px;
    }
`

function Carro(props) {
    return(
        <>
            <StyleCarro>
                <h2>Carro número {props.key}</h2>
                <p>Marca: {props.marca}</p>
                <p>Modelo: {props.modelo}</p>
                <p>Placa: {props.placa}</p>

                <button className="remov" onClick={props.removCarro}><X/></button>
            </StyleCarro>
        </>
    )
}

export default Carro