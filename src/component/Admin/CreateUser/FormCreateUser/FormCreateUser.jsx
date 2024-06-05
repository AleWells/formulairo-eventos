import { useState } from 'react'; // Importar el hook useState
import styles from './FormCreateUser.module.css';
import { TextField, Box, Typography, Button } from "@mui/material";
import {alertPending} from '../../../../services'
import { createUser } from '../../../../socket';
const FormCreateUser = ({handleClose}) => {
  // Definir el estado inicial para los campos del formulario y los errores
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({
    nombreCompleto: '',
    email: '',
    password: '',
    password2: ''
  });

  // Función para manejar cambios en los campos del formulario y verificar errores
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));

    // Verificar errores de contraseña
    if (id === 'password2') {
      if (value !== formData.password) {
        setErrors(prevErrors => ({
          ...prevErrors,
          password2: 'Las contraseñas no coinciden'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          password2: ''
        }));
      }
    }

    // Verificar errores de correo electrónico
    if (id === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prevErrors => ({
          ...prevErrors,
          email: 'El correo electrónico no es válido'
        }));
      } else {
        setErrors(prevErrors => ({
          ...prevErrors,
          email: ''
        }));
      }
    }
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si hay errores
    if (Object.values(errors).every(error => error === '') &&
        Object.values(formData).every(value => value !== '')) {
      // Aquí puedes enviar formData a una función para manejarlo, como enviarlo al backend, por ejemplo
      createUser(formData.email,formData.nombreCompleto,formData.password);
      handleClose(false);   
      alertPending();    
    } else {
      console.log('Error en el formulario');
    }
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
        value={formData.nombreCompleto}
        onChange={handleChange}
        error={errors.nombreCompleto !== ''}
        helperText={errors.nombreCompleto}
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
        error={errors.email !== ''}
        helperText={errors.email}
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
        error={errors.password !== ''}
        helperText={errors.password}
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
        error={errors.password2 !== ''}
        helperText={errors.password2}
      />

      <Button type='submit' variant='contained'>CREAR</Button>
    </Box>
  );
};

export default FormCreateUser;
