import { Box, Button, Typography } from "@mui/material";
import CampoDeporteForm from './CampoDeporteForm/CampoDeporteForm.jsx';
import TingladoForm from './TingladoForm/TingladoForm.jsx';
import TeatroForm from './TeatroForm/TeatroForm.jsx';
import HomeForm from './HomeForm/HomeForm.jsx';
import Otros from './Otro/Otro.jsx'
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
  const [currentSection, setCurrentSection] = useState("Home"); // Valor inicial es "Home"

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

  return (
    <Box component='form' className={styles.containerForm} onSubmit={handleSubmit}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant='h4'>Solicitud de Evento</Typography>

      

      </Box>

        {/* Mostrar el componente correspondiente según la sección actual */}
        {currentSection === "Home" && <HomeForm />}
        {currentSection === "Teatro" && <TeatroForm />}
        {currentSection === "Tinglado" && <TingladoForm />}
        {currentSection === "CampoDeporte" && <CampoDeporteForm/>}
        {currentSection === "Otro" && <Otros/>}
     


     <Box className={styles.section}>
     {lugar==="Teatro"&& currentSection === "Home"&&
        <Button variant='outlined' onClick={()=>{handleChangeSection("Teatro")}}>Teatro</Button>
        }
         {lugar==="Tinglado" && currentSection === "Home"&&
        <Button variant='outlined' onClick={()=>{handleChangeSection("Tinglado")}}>Tinglado</Button>
        }
         {lugar==="CampoDeporte"&& currentSection === "Home"&&
        <Button variant='outlined' onClick={()=>{handleChangeSection("CampoDeporte")}}>Campo de Deporte</Button>
        }
         {lugar==="Otro"&& currentSection === "Home"&&
        <Button variant='outlined' onClick={()=>{handleChangeSection("Otro")}}>Otro</Button>

        }
     </Box>
        
      {currentSection === "Home" &&
       <Box sx={{ display: 'flex', justifyContent: 'center' ,margin:'20px'}}>
       <Button type='submit' variant='contained'>Enviar</Button>
     </Box> }
     {currentSection !== "Home" && 
      <Box sx={{ display: 'flex', justifyContent: 'center' ,margin:'20px'}}>
      <Button variant='contained' onClick={()=>{handleChangeSection("Home")}}>Guardar</Button>
    </Box>}
    </Box>
  );
}
