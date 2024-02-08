import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {login} from '../../../firebase/auth_signin_password.js'
import styles from './Login.module.css';

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleUsuarioChange = (event) => {
    setUsuario(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClick = () => {
    // Aquí puedes llamar a tu función para enviar los datos a la API
    // Utiliza los valores de `usuario` y `password` para enviarlos correctamente
    // a la API
    console.log("Usuario:", usuario);
    console.log("Password:", password);
    login(usuario,password);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Llama a la función handleClick si se presiona Enter
      handleClick();
    }
  };

  return (
    <Box className={styles.login} >
       <Typography variant='h4' color='primary' sx={{textAlign:'center'}}>
            Login
        </Typography>
      <TextField
        required
        id="Usuario"
        type="text"
        label="User"
        fullWidth
        margin="normal"
        multiline
        variant="standard"
        color="primary"
        value={usuario}
        onChange={handleUsuarioChange}
      />
      <TextField
        required
        fullWidth
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="standard"
        color="primary"
        value={password}
        onChange={handlePasswordChange}
        onKeyDown={handleKeyPress}
      />
      <Box className={styles.sendContainer}>
        <Button
        variant="text" 
        color="primary"
         onClick={handleClick}
         endIcon={<SendIcon />}
         
         >
          Send
        </Button>
      </Box>
    </Box>
  );
}