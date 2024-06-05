import "./equipo.css"
import Colaborador from "../colaborador/colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) =>{
    //Destructuracion 
    const {colorPrimario, colorSecundario, titulo, id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    // console.log(colaboradores.length > 0);
    const color ={
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    return <>
        {
            colaboradores.length > 0 &&
            <section className="equipo" style={color}>
                <input
                    type="color"
                    className="input-color"
                    value={hexToRgba(colorPrimario, 0.6)}
                    onChange={(e)=>{
                        actualizarColor(e.target.value, id);
                    }}                
                />
                <h3 style={ {borderColor: colorPrimario} }>{titulo}</h3>
                <div className="colaborador">
                    {/* <Colaborador /> */}
                    {
                        colaboradores.map((colaborador, index) => <Colaborador datos={colaborador}
                         key={index} 
                         colorPrimario={colorPrimario}
                         eliminarColaborador={eliminarColaborador}
                         like={like}
                         />)
                    }

                </div>
            </section>
        }
    </>
}

export default Equipo