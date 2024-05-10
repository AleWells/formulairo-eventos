import { Dialog, Slide, AppBar, IconButton, Toolbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import styles from './Calendar.module.css';
import { useSelector } from 'react-redux';
import {compartirCalendario} from '../../../socket'
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Calendar({ isOpen, handleClose }) {
    const { calendarios } = useSelector(state => state.data);
    const handleCloseButton = () => {
        handleClose(false);
    };

    // Estado inicial para el correo electrónico de cada calendario
    const [emailInputs, setEmailInputs] = useState({});

    const handleEmailInputChange = (event, calendarId) => {
        // Actualiza el estado para el calendario correspondiente
        setEmailInputs({
            ...emailInputs,
            [calendarId]: event.target.value
        });
    };

    const handleAddEmail = (calendarId) => {
        // Aquí puedes implementar la lógica para agregar el correo electrónico al calendario
        console.log(`Agregando correo electrónico "${emailInputs[calendarId]}" al calendario con ID "${calendarId}"`);
    

        // Emitir un evento para conectar con el servidor
        compartirCalendario(calendarId,emailInputs[calendarId]);
       
        // Limpia el campo de entrada después de agregar el correo electrónico
        setEmailInputs({
            ...emailInputs,
            [calendarId]: '' // Limpia el campo de entrada para este calendario
        });
    };
    

    return (
        <React.Fragment>
            <Dialog
                fullWidth
                open={isOpen}
                onClose={handleClose}
                TransitionComponent={Transition}
                className={styles.dialog}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleCloseButton}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <TableContainer>
                    <Table>
                        <TableHead >
                            <TableRow>
                                <TableCell style={{fontWeight:"bold"}}>Nombre del Calendario</TableCell>
                                <TableCell style={{fontWeight:"bold"}}>Compartir por correo electrónico</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {calendarios.map((calendar) => (
                                <TableRow key={calendar.id}>
                                    <TableCell >{calendar.summary}</TableCell>
                                    <TableCell style={{padding:12}} >
                                        <TextField
                                            style={{marginRight: 10}}
                                            label="Correo electrónico"
                                            variant="outlined"
                                            value={emailInputs[calendar.id] || ''}
                                            onChange={(event) => handleEmailInputChange(event, calendar.id)}
                                        />
                                        <Button style={{marginTop:10}} variant="contained" onClick={() => handleAddEmail(calendar.id)}>Agregar</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>
        </React.Fragment>
    );
}
