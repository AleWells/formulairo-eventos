import { Typography, Box , Button } from '@mui/material'
import styles from './Card.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Card ({handleOpen,handleOpen2}){

  const { id } = useParams();
const {forms} = useSelector(state=>state.data)
const selectedForm = forms?.find(e=>e.id==id)
    const [data , setData] =  useState(selectedForm);
    useEffect(() => {
      setData(selectedForm);
    }, [selectedForm]);
    const {email,pending,createdAt,updatedAt} =  data;
    function convertirStringAFechaHora(stringFecha) {
      try {
        // Eliminar el carácter 'Z' al final del string
        const fechaSinZ = stringFecha.slice(0, -1);
        // Crear un objeto Date a partir del string
        const fechaHora = new Date(fechaSinZ);
        // Crear un nuevo objeto Date con la diferencia del huso horario local
        const fechaHoraLocal = new Date(fechaHora.getTime() - fechaHora.getTimezoneOffset() * 60000);
        // Devolver la fecha y hora en un formato legible
        return fechaHoraLocal.toLocaleString('es-ES', { timeZone: 'UTC' });
      } catch (error) {
        // En caso de que el string no tenga un formato válido
        return "Formato de fecha y hora no válido";
      }
    }
     
    function compareStrings(string1, string2) {
      return string1 !== string2;
    }
    const isUpdated = compareStrings(createdAt, updatedAt);
    const handleClickOpen = ()=>{
      handleOpen(true);
    }
    const handleClickView = ()=>{
      handleOpen2(true)
    }
    useEffect(()=>{
      
    },[forms])
    return (
        <Box className={styles.container}>
      <Box>
        <Box className={`${styles.card} ${pending ? styles.pending : styles.completed}`}>
<Typography variant="body1" className={styles.field}>
  <strong>Formulario id:</strong> {id}
</Typography>

<Typography variant="body1" className={styles.field}>
  <strong>Para:</strong> {email}
</Typography>

<Box sx={{display:'flex',gap:'5px'}}>
<Typography variant="body1" className={styles.field}>
  <strong>Estado:</strong> 
</Typography>
{pending ? <Typography sx={{color:'red'}}>pendiente</Typography> : <Typography sx={{color:'green'}}>completo</Typography>}
</Box>

<Typography variant="body1" className={styles.field}>
  <strong>Fecha de creación:</strong> {convertirStringAFechaHora(createdAt)}
</Typography>

<Typography variant="body1" className={styles.field}>
  <strong>Actualizada:</strong> {isUpdated ? convertirStringAFechaHora(updatedAt) : 'sin actualizar'}
</Typography>

<Button onClick={handleClickOpen}>{pending?'Completar':'Actualizar'}</Button> 
{!pending&&<Button onClick={handleClickView}>Ver</Button>}
</Box>
    </Box>
        </Box>
   )
}