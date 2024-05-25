import { Box, Button, Typography } from "@mui/material";
import styles from './Home.module.css'
import { useSelector } from "react-redux";
export default function  Home (){
    const {form} = useSelector(state=>state.data);
    return (
        <Box className={styles.home}>
              <Typography variant="h5">Selecionar Fecha </Typography>
              <Typography variant='subtitle1'>Fechas  disponibles para el {form.home.lugar}</Typography>
             
        </Box>
    )
}