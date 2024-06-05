import "./miOrg.css"
import { useState } from "react";

const MiOrg = (props) =>{
    // console.log(props);
    /**
     estado - hooks
     useState()
     */
    //const [nombreVariable, funcionActualizar] = useState(valorInicial)
    // const [nombre, actualizarNombre] = useState()
    // const [mostrar, actualizarMostrar] = useState(true)
    
    // const manejarClick = () =>{
    //     console.log("Mostrar elemento", mostrar);
    //     actualizarMostrar("Hola Mundo")
    // }
    
    return <section className="org-section">
        <h3 className="titulo">Mi Organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}
export default MiOrg;