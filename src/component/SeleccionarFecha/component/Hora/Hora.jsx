import { Box, Typography } from "@mui/material";
import styles from './Hora.module.css'
import { useSelector } from "react-redux";
export default function Hora (){
const {form} = useSelector(state=>state.data)
    return (
        <Box>
            <Typography>Horarios disponibles para el día : {form.home.fecha}</Typography>
            
          
            
        </Box>
    )
}