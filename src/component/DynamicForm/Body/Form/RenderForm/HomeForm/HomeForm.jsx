import { Box, FormControlLabel, FormGroup, MenuItem, TextField, Typography,Checkbox, Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './HomeForm.module.css'
import { useEffect } from "react";
export default function HomeForm({handle}) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);
  const datosHome = useSelector((state)=>state.data.form.home)
  const {user} = useSelector((state)=>state.data);
  const handleChange = (e) => {
    const { value, id } = e.target;
    dispatch(updateForm({ ...formData, home: {...formData.home,[id]: value } }));
  };
  const handleChangeSelect = (e)=>{
    const {value,name} = e.target;
    dispatch(updateForm({ ...formData, home: {...formData.home,[name]: value } }));
  }
  const handleButton = ()=>{
    handle(formData.home.lugar);
  }

  const lugares = [
    { name: "Teatro", label: "Teatro" },
    { name: "Tinglado", label: "Tinglado" },
    { name: "CampoDeporte", label: "Campo de Deporte" },
    { name: "Otro", label: "Otro" },
  ];

  const  todosLosCamposLlenos  = (objeto) => {
    // Verifica si el objeto recibido no es nulo ni indefinido
    if (objeto && typeof objeto === 'object') {
      // Verifica si todas las propiedades requeridas tienen algún valor
      if (
        objeto.lugar &&
        objeto.email &&
        objeto.nombreCompleto &&
        objeto.nombreEvento &&
        objeto.sector &&
        objeto.fecha &&
        objeto.horaInicio &&
        objeto.horaFinal
      ) {
        return true; // Si todas las propiedades tienen algún valor, retorna true
      }
    }
    return false; // Si alguna propiedad está ausente o tiene un valor falsy, retorna false
  }



  useEffect(() => {
    dispatch(updateForm({ ...formData, home: { ...formData.home, email: user.email, nombreCompleto: user.name } }));
  }, []);



return (
    <Box className={styles.home}>

   


      <Box>
        <Typography variant='h6'>{lugares.find(obj=>obj.name===formData.home.lugar).label}</Typography>
      </Box>
     <TextField
      id='email'
      type='email'
      label='Correo Electrónico'
      value={user.email}
      onChange={handleChange}
      fullWidth
      disabled={true}
      required
     />
     <TextField
     id='nombreCompleto'
     type='text'
     label='Apellido y Nombre'
     value={user.name}
     onChange={handleChange}
     fullWidth
     disabled={true}
     required
     />
     
<TextField
id='nombreEvento'
type='text'
onChange={handleChange}
value={formData.home.nombreEvento || ""}
fullWidth
required
label='Nombre del Evento'
/>
        <TextField
        select
        name="sector"
        label='Sector'
        onChange={handleChangeSelect}
        value={formData?.home.sector || ""}
        fullWidth 
        // defaultValue="Otro"
        required
        
      >
        <MenuItem value="Kinder">Kinder</MenuItem>
        <MenuItem value="Primaria">Primaria</MenuItem>
        <MenuItem value="Secundaria">Secundaria</MenuItem>
        <MenuItem value="Administración">Administración</MenuItem>
        <MenuItem value="Otro">Otro</MenuItem>
      </TextField>
     
    <Box sx={{display:'flex', alignItems:'center',gap:'10px',width:'100%'}}>
     <Typography>Fecha</Typography> 
    <TextField
     id='fecha'
     type='date'
     value={formData.home.fecha || ""}
     onChange={handleChange}
     fullWidth
     required
     disabled={true}
     />
    </Box>
    <Box  sx={{display:'flex', alignItems:'center',gap:'10px',width:'100%'}}>
      <Typography>
       Inicio
      </Typography>
    <TextField
    id="horaInicio"
    type='time'
    value={formData.home.horaInicio || ""}
    onChange={handleChange}
    fullWidth
    required
    disabled={true}
    />
    </Box>
    <Box  sx={{display:'flex', alignItems:'center',gap:'10px',width:'100%'}}>
      <Typography>
       Final
      </Typography>
    <TextField
    id="horaFinal"
    type='time'
    value={formData.home.horaFinal || ""}
    onChange={handleChange}
    fullWidth
    required
    disabled={true}
    />
    </Box>

    {todosLosCamposLlenos(datosHome) && <Box >
        <Button variant='outlined' onClick={handleButton}>Siguiente</Button>
      </Box>}
    </Box>
  );
}
