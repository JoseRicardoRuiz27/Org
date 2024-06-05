import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/header/header';
import Formulario from './componentes/formulario/formulario';
import MiOrg from './componentes/miOrg/miOrg';
import Equipo from './componentes/Equipo/equipo';
import Footer from './componentes/footer/footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
    id:uuidv4(),  
    equipo:"Front End",
    foto:"https://github.com/JoseRicardoRuiz27.png",
    nombre:"José Ruiz ",
    puesto:"Treine",
    fav: true,
    },
    {
    id:uuidv4(),  
    equipo:"Front End",
    foto:"https://github.com/JoseRicardoRuiz27.png",
    nombre:"José Ruiz ",
    puesto:"Treine",
    fav: false,
    },
    {
    id:uuidv4(),  
    equipo:"Front End",
    foto:"https://github.com/JoseRicardoRuiz27.png",
    nombre:"José Ruiz ",
    puesto:"Treine",
    fav: false,
    }
])
  const [equipos, actualizarEquipo] = useState([
    {
      id : uuidv4(),
      titulo : "Programacion",
      colorPrimario : "#57C278",
      colorSecundario : "#D9F7E9"
    },
    {
      id : uuidv4(),
      titulo : "Front End",
      colorPrimario : "#82CFFA",
      colorSecundario : "#E8F8FF"
    },
    {
      id : uuidv4(),
      titulo : "Data Science",
      colorPrimario : "#A6D157",
      colorSecundario : "#F0F8E2"
    },
    {
      id : uuidv4(),
      titulo : "DevOps",
      colorPrimario : "#E06B69",
      colorSecundario : "#FDE7E8"
    },
    {
      id : uuidv4(),
      titulo : "UX y diseño",
      colorPrimario : "#DB6EBF",
      colorSecundario : "#FAE9F5"
    },
    {
      id : uuidv4(),
      titulo : "Móvil",
      colorPrimario : "#FFBA05",
      colorSecundario : "#FFF5D9"
    },
    {
      id : uuidv4(),
      titulo : "Inovacion y Gestion",
      colorPrimario : "#FF8A29",
      colorSecundario : "#FFEEDF"
    }
])
  //ternario -- condicion ? seMostrae : noSeMuestra
  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo", colaborador);
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const elminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipo([...equipos, { ...nuevoEquipo, id:uuidv4()}])
  }

  const like = (id) =>{
    const colaboradoresActualizado = colaboradores.map((colaborador)=>{
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    }) 
    actualizarColaboradores(colaboradoresActualizado)
  }

  //Revisar color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color
      }

      return equipo
    })

    actualizarEquipo(equiposActualizados)
    }


  return (
    <div>
      <Header />

      {/* { mostrarFormulario ? <Formulario /> : <></>} */}
      {
        mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador = {registrarColaborador}
        crearEquipo = {crearEquipo}
      />}


      <MiOrg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((datosEquipo) => <Equipo 
          datos={datosEquipo} 
          key={datosEquipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === datosEquipo.titulo)}
          eliminarColaborador={elminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }

      <Footer/>

    </div>
  );
}

export default App;
