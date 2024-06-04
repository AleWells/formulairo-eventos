import { Box, Button, Typography } from "@mui/material";
import styles from './Fecha.module.css'
import SelectedCalendar from '../../../ViewCalendar/SelectedCalendar.jsx';
import { useSelector } from "react-redux";
export default function  Fecha ({setFechaSelec}){
    const {form,allFormsCalendarioSeleccionado} = useSelector(state=>state.data);
    return (
        <Box className={styles.home}>
              <Typography variant="h5">Selecionar Fecha </Typography>
              <Typography variant='subtitle1'>Fechas  disponibles para : {form.home.lugar==='CampoDeporte'?'Campo de Deporte':form.home.lugar}</Typography>
              <Box className={styles.calendar}>
                <SelectedCalendar data={allFormsCalendarioSeleccionado} handleSelect={setFechaSelec}/>
             </Box>
        </Box>
    )
}
