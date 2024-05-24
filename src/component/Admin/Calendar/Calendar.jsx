import { Dialog, Slide, AppBar, IconButton, Toolbar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import styles from './Calendar.module.css';
import { useSelector } from 'react-redux';
import { compartirCalendario } from '../../../socket';
import { alertPending } from '../../../services';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Calendar({ isOpen, handleClose }) {
    const { calendarios } = useSelector(state => state.data);
    const handleCloseButton = () => {
        handleClose(false);
    };

    const [selectedCalendar, setSelectedCalendar] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [emailError, setEmailError] = useState(false);

    const handleEmailInputChange = (event) => {
        setEmailInput(event.target.value);
    };

    const handleAddEmail = () => {
        if (!selectedCalendar || !emailInput || !isValidEmail(emailInput)) {
            setEmailError(true); // Establecer el estado del error de correo electrónico
            return;
        }

        setEmailError(false); // Reiniciar el estado del error de correo electrónico

        // Emitir un evento para conectar con el servidor
        compartirCalendario(selectedCalendar, emailInput);
        alertPending();

        // Limpiar campos después de agregar el correo electrónico
        setSelectedCalendar('');
        setEmailInput('');

        handleClose(false);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <React.Fragment>
            <Dialog
                fullScreen
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
                        <TableHead>
                            <TableRow>
                                <TableCell >Nombre del Calendario</TableCell>
                                <TableCell >Compartir por correo electrónico</TableCell>
                                <TableCell>Eliminar Eventos</TableCell>
                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <FormControl fullWidth>
                                        <InputLabel  id="calendar-selector-label" > Calendario</InputLabel>
                                        <Select
                                            labelId="calendar-selector-label"
                                            id="calendar-selector"
                                            value={selectedCalendar}
                                            onChange={(event) => setSelectedCalendar(event.target.value)}
                                            label="Seleccionar Calendario"
                                        >
                                            {calendarios?.map((calendar) => (
                                                <MenuItem key={calendar.id} value={calendar.id}>{calendar.summary}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell style={{ padding: 12 }}>
                                    <TextField
                                       type='email'
                                        style={{ marginRight: 10 }}
                                        label="Correo electrónico"
                                        variant="outlined"
                                        value={emailInput}
                                        onChange={handleEmailInputChange}
                                        error={emailError} // Establecer el error de correo electrónico
                                    />
                                    <Button style={{ marginTop: 10 }} variant="contained" onClick={handleAddEmail}>Agregar</Button>
                                </TableCell>
                                <TableCell><Button>Eliminar</Button></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Dialog>
        </React.Fragment>
    );
}
