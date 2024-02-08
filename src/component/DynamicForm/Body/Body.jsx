import React from 'react';
import {  Box} from '@mui/material';
import Form from './Form/Form.jsx';
import { useState } from 'react';
import styles from './Body.module.css';
export default function Body() {
  const [open,setOpen] = useState(true)
  return (
    <Box className={styles.container}>
     <Form isOpen={open} handleClose={setOpen}/>    
    </Box>
  );
}