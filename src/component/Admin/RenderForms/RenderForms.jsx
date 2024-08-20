import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import styles from './RenderForms.module.css'; // Importamos el CSS
import {aceptarEvento,alertPending} from '../../../services'
import {confirmEvent} from '../../../socket'
export default function RenderForms({ allForms, handleView }) {
    const handleConfirmEvent = (form)=>{
        aceptarEvento().then((result)=>{
            if(result.isConfirmed){
                 
                alertPending();
                confirmEvent(form);
            }
        });
    }
    return (
        <Box className={styles.tablecontainer}> {/* Agregamos la clase del contenedor */}
            <h2 className={styles.tabletitle}>Formularios</h2> {/* Agregamos la clase del título */}
            <TableContainer component={Paper}>
                <Table className={styles.table}> {/* Agregamos la clase de la tabla */}
                    <TableHead>
                        <TableRow> {/* Aplicamos la clase para texto blanco */}
                            <TableCell className={styles.whiteText}>Nombre del Evento</TableCell>
                            <TableCell className={styles.whiteText}>Usuario</TableCell>
                            <TableCell className={styles.whiteText}>Fecha</TableCell>
                            <TableCell className={styles.whiteText}>Estado</TableCell>
                            <TableCell className={styles.whiteText}>Formulario</TableCell>
                            <TableCell className={styles.whiteText}>Confirmar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allForms.map((form, index) => (
                            <TableRow key={index}>
                                <TableCell>{form.nameEvento}</TableCell>
                                <TableCell>{form.nameUser}</TableCell>
                                <TableCell>{form.data.home.fecha}</TableCell>
                                <TableCell className={styles[form.estado.toLowerCase()]}>{form.estado}</TableCell> {/* Agregamos la clase dinámica para el estado */}
                                <TableCell>
                                    <Button onClick={() => { handleView(form.id); }}>Abrir</Button>
                                </TableCell>
                                <TableCell>
                                    {form.estado === "PENDIENTE" ? <Button onClick={()=>{handleConfirmEvent(form)}}>Aceptar</Button> : <Button disabled={true}>ACEPTAR</Button>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
