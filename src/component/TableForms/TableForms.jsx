// TableForms.js
import { Box, Button, Typography } from "@mui/material";
import FileOpenIcon from '@mui/icons-material/FileOpen';
import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import ListIcon from '@mui/icons-material/List';
import styles from "./TableForms.module.css";
import CreateForm from "../CreateForm/CreateForm";
import { useNavigate } from "react-router-dom";
export default function TableForms({ forms }) {
  const navigate = useNavigate();
 const {user} = useSelector(state=>state.data)
  useEffect(() => {
   
    
  }, [forms]);
const handleView = (id)=>{
  navigate('/formulario/'+id)
}
  return (
    <Box className={styles.tablecontainer}>
     
        {forms.length?<>
        <Box sx={{display:'flex'}}>
               <ListIcon/>
               <Typography variant="body1" component="p" className={styles.tabletitle}>
        Tus formularios</Typography>
        </Box>
        <Box sx={{width:'100%'}}>
        <CreateForm/>
      </Box>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha de evento</th>
            <th>Hora Inicio</th>
            <th>Estado</th>
            <th>Ver fomulario</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => {
          
            return (
              <tr
              key={form.id}
                className={form.pending ? styles.pendingRow : null}
                >
                <td>
            
                {form.id}
                </td>
               
                <td>{form.data.home.fecha}</td>
                <td>{form.data.home.hora}</td>
                <td className={` ${form.estado === 'PENDIENTE' ? styles.pendiente : form.estado === 'ACEPTADO' ? styles.aceptado : styles.rechazado}`}>
  {form.estado}
</td>

                <td><Button onClick={()=>{handleView(form.id)}}><FileOpenIcon /></Button></td>
              </tr>
            )
          })}
        </tbody>
          
      </table> </> :null
     }
     {!forms.length  ?<>
      <Box sx={{width:'100%'}}>
      <Box sx={{width:'100%'}}>
        <CreateForm/>
        
      </Box>
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',padding:'10px'}}>
      <Typography>Bienvenido !</Typography>
      <Typography>Para crear un formulario nuevo, haz click en el botón del signo más.</Typography>
      </Box>
      </Box>
     </>:null}
     
    </Box>
  );
}