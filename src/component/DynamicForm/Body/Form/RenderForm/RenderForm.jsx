import { Box, Button, Typography } from "@mui/material";
import CampoDeporteForm from './CampoDeporteForm/CampoDeporteForm.jsx';
import TingladoForm from './TingladoForm/TingladoForm.jsx';
import TeatroForm from './TeatroForm/TeatroForm.jsx';
import HomeForm from './HomeForm/HomeForm.jsx';
import Otros from './Otro/Otro.jsx'
import Lugar from "./Lugar/Lugar.jsx";
import SeleccionarFecha from "../../../../SeleccionarFecha/SeleccionarFecha.jsx";
import styles from './RenderForm.module.css';
import {  useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { createForm } from "../../../../../socket.js";
import { alertPending } from "../../../../../services.js";


export default function RenderForm({handleClose}) {
//  const {Teatro,Tinglado,Otro,CampoDeporte} = useSelector(state=>state.data.form.home.lugar);
const {lugar} = useSelector(state=>state.data.form.home)
 const {form,user} = useSelector(state=>state.data)
 const { id } = useParams();
  const [currentSection, setCurrentSection] = useState("Lugar"); // Valor inicial es "Home"

  // Función para cambiar la sección actual
  const handleChangeSection = (sectionName) => {
    setCurrentSection(sectionName);
   
  };
  // Funcion para enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // updateForm({id,form,user});
  
    createForm(user,form)
    handleClose(false);
    alertPending();
  }
 const handleVolver = ()=>{
  setCurrentSection('Home')
 }
  return (
    <Box component='form' className={styles.containerForm} onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>Solicitud de Evento</Typography>

      

      </Box>

        {/* Mostrar el componente correspondiente según la sección actual */}
        {currentSection === "Home" && <HomeForm  handle={handleChangeSection} />}
        {currentSection === "Teatro" && <TeatroForm />}
        {currentSection === "Tinglado" && <TingladoForm />}
        {currentSection === "CampoDeporte" && <CampoDeporteForm/>}
        {currentSection === "Otro" && <Otros/>}
        {currentSection === 'Lugar' && <Lugar handle={handleChangeSection}/>} 
        {currentSection === 'Fecha' && <SeleccionarFecha handle={handleChangeSection}/>}

        
      {currentSection !=="Home" && currentSection !=="Lugar" && currentSection !=="Fecha" &&
       <Box sx={{ display: 'flex', justifyContent: 'center' ,margin:'20px',gap:'20px'}}>
        <Button onClick={handleVolver} variant='outlined'>VOLVER</Button>
       <Button type='submit' variant='contained'>Enviar</Button>
     </Box> }

     
    </Box>
  );
}
