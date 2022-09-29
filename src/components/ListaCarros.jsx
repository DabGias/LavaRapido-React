import { useState } from "react"
import styled from "styled-components"
import Carro from "./Carro"
import FormCarro from "./FormCarro"

const StyleListaCarros = styled.div `
    width: 80%;
    margin: auto;
    border-radius: 20px;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .aviso {
        font-weight: bold;
        color: #f01818;
    }
`

function ListaCarros() {
    const [carros, setCarros] = useState([])
    const [novoCarro, setNovoCarro] = useState({
        "marca": "",
        "modelo": "",
        "placa": ""
    })

    function criaCarro(e) {
        setNovoCarro({...novoCarro, [e.target.name]: e.target.value})
    }

    function cadastraCarro(e) {
        e.preventDefault()

        setCarros([...carros, novoCarro])
    }

    function removCarro(car) {
        let listaCarros = carros.filter((c) => c !== car)

        setCarros(listaCarros)
    }

    return(
        <>
            <FormCarro cadastraCarro={cadastraCarro} carros={carros} criaCarro={criaCarro}/>
            <StyleListaCarros>
                {carros.length === 0? <p className="aviso">Não há carros registrados...</p> : ""}
                    {
                        carros.map((car, index) => <Carro
                            key={index}
                            marca={car.marca}
                            modelo={car.modelo}
                            placa={car.placa}
                            removCarro={removCarro.bind(this, car)}
                        />)
                    }
            </StyleListaCarros>
        </>
    )
}

export default ListaCarros