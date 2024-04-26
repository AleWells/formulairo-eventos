import { useState } from 'react'; // Importar el hook useState
import styles from './FormCreateUser.module.css';
import { TextField, Box, Typography, Button } from "@mui/material";

const FormCreateUser = () => {
  // Definir el estado inicial para los campos del formulario
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    password: '',
    password2: ''
  });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar formData a una función para manejarlo, como enviarlo al backend, por ejemplo
    console.log('Datos del formulario:', formData);
  };

  return (
    <Box className={styles.form} component='form' onSubmit={handleSubmit}>
      <Typography variant='h6'>Compléta los datos</Typography>
      <TextField
        fullWidth
        id="nombreCompleto"
        label="Nombre Completo"
        type='text'
        variant="standard"
        required
        value={formData.nombreCompleto} // Establecer el valor del campo desde el estado
        onChange={handleChange} // Manejar cambios en el campo
      />
      <TextField
        fullWidth
        id='email'
        label='Correo Electrónico'
        type='email'
        variant='standard'
        required
        value={formData.email}
        onChange={handleChange}
      />

      <TextField
        fullWidth
        id='password'
        label='Contraseña'
        type='password'
        variant='standard'
        required
        value={formData.password}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        id='password2'
        label='Repetir Contraseña'
        type='password'
        variant='standard'
        required
        value={formData.password2}
        onChange={handleChange}
      />

      <Button type='submit' variant='contained'>CREAR</Button>
    </Box>
  );
};

export default FormCreateUser;
