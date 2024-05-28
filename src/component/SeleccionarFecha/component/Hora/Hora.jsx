import React, { useState } from "react";
import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import styles from './Hora.module.css';
import { updateForm } from '../../../../redux/slice';

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

export default function Hora({ handleChangeSection }) {
    const dispatch = useDispatch();
    const { form, allFormsCalendarioSeleccionado } = useSelector(state => state.data);
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
        ? generarOpcionesDeTiempo(horaInicio, "16:30", 15).filter(hora => hora > horaInicio)
        : [];

    // Se filtra formularios por fecha
    let opcionesDeTiempoFiltradas = generarOpcionesDeTiempo("08:30", "16:30", 15);

    if (allFormsCalendarioSeleccionado) {
        const filtradoPorFecha = allFormsCalendarioSeleccionado.filter(item => {
            const fechaItem = item.fecha.split('T')[0];
            return fechaItem === form.home.fecha;
        });

        const horariosReservados = filtradoPorFecha.reduce((reservados, formulario) => {
            const horaInicio = formulario.horaInicio.split('T')[1].slice(0, 5); // Extraer solo la hora de inicio sin la fecha
            const horaFinal = formulario.horaFinal.split('T')[1].slice(0, 5); // Extraer solo la hora final sin la fecha
        
            // Convertir las horas de inicio y final a minutos
            const [inicioHH, inicioMM] = horaInicio.split(':').map(Number);
            const [finalHH, finalMM] = horaFinal.split(':').map(Number);
            const inicioMinutos = inicioHH * 60 + inicioMM;
            const finalMinutos = finalHH * 60 + finalMM;
        
            // Generar horarios intermedios y agregarlos al array de reservados
            for (let minutos = inicioMinutos; minutos < finalMinutos; minutos += 15) {
                const horas = String(Math.floor(minutos / 60)).padStart(2, '0');
                const minutosStr = String(minutos % 60).padStart(2, '0');
                const hora = `${horas}:${minutosStr}`;
                reservados.push(hora);
            }
            return reservados;
        }, []);

        opcionesDeTiempoFiltradas = opcionesDeTiempoFiltradas.map(hora => ({
            hora,
            reservado: horariosReservados.includes(hora)
        }));
    }

    const handleButton = () => {
        dispatch(updateForm({ ...form, home: { ...form.home, horaInicio: horaInicio, horaFinal: horaFinal } }));
        handleChangeSection('Home');
    };

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
                    {opcionesDeTiempoFiltradas.map((opcion, index) => (
                        <MenuItem key={index} value={opcion.hora} disabled={opcion.reservado}>
                            {opcion.hora}
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
