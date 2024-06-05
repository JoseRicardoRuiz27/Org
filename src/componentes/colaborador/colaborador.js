import "./colaborador.css"
import { FaDeleteLeft } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


const Colaborador = (props) =>{
    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    return <div className="colab" >
        <FaDeleteLeft onClick={() => eliminarColaborador(id)} className="eliminar"/>
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <FaHeart color="Red" onClick={() =>like(id)}/> : <CiHeart onClick={() =>like(id)}/>}
        </div>
    </div>
}

export default Colaborador