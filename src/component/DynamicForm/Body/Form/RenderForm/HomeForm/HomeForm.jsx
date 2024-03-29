import { Box, FormControlLabel, FormGroup, MenuItem, TextField, Typography,Checkbox, Button} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './HomeForm.module.css'
export default function HomeForm({handle}) {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);
  const datosHome = useSelector((state)=>state.data.form.home)
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
        objeto.hora
      ) {
        return true; // Si todas las propiedades tienen algún valor, retorna true
      }
    }
    return false; // Si alguna propiedad está ausente o tiene un valor falsy, retorna false
  }
return (
    <Box className={styles.home}>
      <Box>
        <Typography variant='h6'>{lugares.find(obj=>obj.name===formData.home.lugar).label}</Typography>
      </Box>
     <TextField
      id='email'
      type='email'
      label='Correo Electrónico'
      value={formData.home.email || ""}
      onChange={handleChange}
      fullWidth
      required
     />
     <TextField
     id='nombreCompleto'
     type='text'
     label='Apellido y Nombre'
     value={formData.home.nombreCompleto || ""}
     onChange={handleChange}
     fullWidth
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
     />
    </Box>
    <Box  sx={{display:'flex', alignItems:'center',gap:'10px',width:'100%'}}>
      <Typography>
       Hora
      </Typography>
    <TextField
    id="hora"
    type='time'
    value={formData.home.hora || ""}
    onChange={handleChange}
    fullWidth
    required
    />
    </Box>

    {todosLosCamposLlenos(datosHome) && <Box >
        <Button variant='outlined' onClick={handleButton}>Siguiente</Button>
      </Box>}


   


    </Box>
  );
}
