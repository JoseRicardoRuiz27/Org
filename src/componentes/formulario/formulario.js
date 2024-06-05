import { useState } from "react"
import "./Formulario.css"
import Campo from "../campo/campo"
import ListaOpciones from "../listaOpcione/ListaOpciones"
import Boton from "../boton/boton"

const Formulario = (props)=>{

    const [nombre, setNombre] = useState("")
    const [puesto, setPuesto] = useState("")
    const [foto, setFoto] = useState("")
    const [equipo, setEquipo] = useState("")

    const [titulo, setTitulo] = useState("")
    const [color, setColor] = useState("")


    const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e)=>{
        e.preventDefault()
        // console.log("Manejar El Envio")
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEnvio = (e)=>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario : color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el Formulario para crear el colaborador.</h2>    
            < Campo 
                titulo="Nombre"
                placeholder="Ingese el Nombre"
                required valor={nombre}
                setValor={setNombre}
            />

            < Campo 
                titulo="Puesto"
                placeholder="Ingrese su puesto"
                required valor={puesto}
                setValor={setPuesto}
            />

            < Campo 
                titulo="Foto"
                placeholder="Coloque el enlace de su foto"
                valor={foto}
                setValor={setFoto}
            />

            <ListaOpciones 
                valor={equipo}
                actualizarEquipo={setEquipo}
                equipos={props.equipos}
            />

            <Boton texto="Crear"/>
        </form>

        <form onSubmit={manejarNuevoEnvio}>
            <h2>Rellena el Formulario para crear el equipo.</h2>    
            < Campo 
                titulo="Titulo"
                placeholder="Ingesar Titulo"
                required 
                valor={titulo}
                setValor={setTitulo}
            />

            < Campo 
                titulo="Color"
                placeholder="Ingresar color en HEX"
                required 
                valor={color}
                setValor={setColor}
                type="color"
            />
            <Boton texto="Registrar Equipo"/>
        </form>
    </section>
}

export default Formulario