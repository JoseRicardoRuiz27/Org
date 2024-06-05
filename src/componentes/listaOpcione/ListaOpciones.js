import "./listaOpciones.css"

const ListaOpciones = (props) =>{
    // const equipos = [
    //     "Programacion",
    //     "Front End",
    //     "Data Science",
    //     "DevOps",
    //     "UX y diseño",
    //     "Móvil",
    //     "Inovacion y Gestion"
    // ]

    const manejarCambio = (e)=>{
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            { props.equipos.map( (equipo, index) => <option key={ index } value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones