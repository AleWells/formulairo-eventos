import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import styles from './RenderForms.module.css'; // Importamos el CSS

export default function RenderForms({ allForms }) {
    return (
        <Box className={styles.tablecontainer}> {/* Agregamos la clase del contenedor */}
            <h2 className={styles.tabletitle}>Formularios</h2> {/* Agregamos la clase del título */}
            <TableContainer component={Paper}>
                <Table className={styles.table}> {/* Agregamos la clase de la tabla */}
                    <TableHead>
                    <TableRow > {/* Aplicamos la clase para texto blanco */}
                            <TableCell className={styles.whiteText}>Nombre del Evento</TableCell>
                            <TableCell className={styles.whiteText}>Nombre del Usuario</TableCell>
                            <TableCell className={styles.whiteText}>Fecha</TableCell>
                            <TableCell className={styles.whiteText}>Estado</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allForms.map((form, index) => (
                            <TableRow key={index}>
                                <TableCell>{form.nameEvento}</TableCell>
                                <TableCell>{form.nameUser}</TableCell>
                                <TableCell>{form.data.home.fecha}</TableCell>
                                <TableCell className={styles[form.estado.toLowerCase()]}>{form.estado}</TableCell> {/* Agregamos la clase dinámica para el estado */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

