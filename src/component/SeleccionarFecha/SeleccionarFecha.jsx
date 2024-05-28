// Modulo para seleccionar turno y hacer ciertas verificaciones
import { Box, Typography } from "@mui/material";
import styles from './SeleccionarFecha.module.css'
import { useState } from "react";
import Fecha from "./component/Fecha/Fecha";
import Hora from './component/Hora/Hora';
import { useSelector,useDispatch } from "react-redux";
import { updateForm } from "../../redux/slice";
export default function SeleccionarFecha ({handle}){
    const dispatch = useDispatch();
    const {eventosCalendarioSeleccionado,form} =  useSelector(state=>state.data)
// Se crea un estado a  nivel componente , para manejar el componente seleccionado
    const [selectedComponent,setSelectedComponent] = useState('FECHA'); 
    const [selectDate,setSelectDate] = useState(null);
    // const [fechaSelec,setFechaSelec] = useState(null);
    const setFechaSelec = (date)=>{
        // validar si la fecha seleccionada es correcta
        if(eventosCalendarioSeleccionado){

        }else{
            dispatch(updateForm({...form,home:{...form.home,fecha:date.toISOString().split('T')[0]}}))
            setSelectedComponent('HORA');
        }
     
    }
    return(
        <Box>
           {selectedComponent==='FECHA'&&<Fecha setFechaSelec={setFechaSelec} />}
           {selectedComponent==='HORA'&&<Hora handleChangeSection={handle}/>} 
        </Box>
    )
}