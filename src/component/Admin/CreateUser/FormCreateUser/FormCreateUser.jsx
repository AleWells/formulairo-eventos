import styles from './FormCreateUser.module.css'
import { TextField, Box, Typography, Button } from "@mui/material";
const handleSubmit = (e)=>{
    e.preventDefault();
}
const FormCreateUser = ()=>{
return(<Box className={styles.form} component='form'  onSubmit={handleSubmit}>
    <Typography variant='h6'>Compléta los datos</Typography>
    <TextField
    fullWidth
    id="nombreCompleto"
    label="Nombre Completo"
    type='text'
    variant="standard"
    required
  />
  <TextField
  fullWidth
  id='email'
  label='Correo Electrónico'
  type='email'
  variant='standard'
  required
  />

  <TextField
  fullWidth
  id='password'
  label='Contraseña'
  type='password'
  variant='standard'
  required
  />
   <TextField
  fullWidth
  id='password'
  label='Repetir Contraseña'
  type='password'
  variant='standard'
  required
  />

<Button type='submit' variant='contained'>CREAR</Button>
</Box>)
}
export default FormCreateUser;