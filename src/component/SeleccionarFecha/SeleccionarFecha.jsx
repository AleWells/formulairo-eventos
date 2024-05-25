// Modulo para seleccionar turno y hacer ciertas verificaciones
import { Box, Typography } from "@mui/material";
import styles from './SeleccionarFecha.moduel.css'
import { useState } from "react";
import Home from "./component/Home/Home";
export default function SeleccionarFecha ({data}){
// Se crea un estado a  nivel componente , para manejar el componente seleccionado
    const [selectedComponent,setSelectedComponent] = useState('Home'); 

    return(
        <Box>
           {selectedComponent==='Home'&&<Home/>}

        </Box>
    )
}