import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styles from './Hora.module.css';
import {updateForm} from '../../../../redux/slice'
const generarOpcionesDeTiempo = (inicio, fin, intervalo) => {
  
    const opciones = [];
    let currentTime = new Date(`1970-01-01T${inicio}:00`);
    const endTime = new Date(`1970-01-01T${fin}:00`);
    
    while (currentTime <= endTime) {
        const horas = String(currentTime.getHours()).padStart(2, '0');
        const minutos = String(currentTime.getMinutes()).padStart(2, '0');
        opciones.push(`${horas}:${minutos}`);
        currentTime.setMinutes(currentTime.getMinutes() + intervalo);
    }

    return opciones;
};

const opcionesDeTiempo = generarOpcionesDeTiempo("08:30", "16:30", 15);

export default function Hora({handleChangeSection}) {
    const dispatch = useDispatch();
    const { form, eventosCalendarioSeleccionado } = useSelector(state => state.data);
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFinal, setHoraFinal] = useState("");

    const manejarCambioHoraInicio = (event) => {
        setHoraInicio(event.target.value);
        setHoraFinal("");  // Reinicia la hora final cuando cambia la hora de inicio
    };

    const manejarCambioHoraFinal = (event) => {
        setHoraFinal(event.target.value);
    };

    // Filtra las opciones de hora final para que solo incluyan horas posteriores a la hora de inicio
    const opcionesDeHoraFinal = horaInicio
        ? opcionesDeTiempo.filter(hora => hora > horaInicio)
        : [];
    const handleButton = ()=>{
        dispatch(updateForm({...form,home:{...form.home,horaInicio:horaInicio,horaFinal:horaFinal}}));
        handleChangeSection('Home');
    }
    return (
        <Box>
            <Typography>Horarios disponibles para el día : {form.home.fecha}</Typography>
            <Box className={styles.horaContainer}>
                <TextField
                    select
                    label="Hora de inicio"
                    value={horaInicio}
                    onChange={manejarCambioHoraInicio}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                >
                    {opcionesDeTiempo.map((opcion, index) => (
                        <MenuItem key={index} value={opcion}>
                            {opcion}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="Hora final"
                    value={horaFinal}
                    onChange={manejarCambioHoraFinal}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    disabled={!horaInicio}
                >
                    {opcionesDeHoraFinal.map((opcion, index) => (
                        <MenuItem key={index} value={opcion}>
                            {opcion}
                        </MenuItem>
                    ))}
                </TextField>
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!horaFinal}
                    onClick={handleButton}
                    style={{ marginTop: '16px' }}
                >
                    Siguiente
                </Button>
            </Box>
        </Box>
    );
}
