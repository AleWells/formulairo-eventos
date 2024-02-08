import { Box, FormControlLabel, FormGroup, MenuItem, TextField, Typography,Checkbox} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './HomeForm.module.css'
export default function HomeForm() {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);

  const handleChange = (e) => {
    const { value, id } = e.target;
    dispatch(updateForm({ ...formData, home: {...formData.home,[id]: value } }));
  };
  const handleChangeSelect = (e)=>{
    const {value,name} = e.target;
    dispatch(updateForm({ ...formData, home: {...formData.home,[name]: value } }));
  }
  const handleChangeSelect2 = (e)=>{
    const {value,name} = e.target;
    dispatch(updateForm({ ...formData, home: {...formData.home,[name]: value } }));
  }

  const lugares = [
    { name: "Teatro", label: "Teatro" },
    { name: "Tinglado", label: "Tinglado" },
    { name: "CampoDeporte", label: "Campo de Deporte" },
    { name: "Otro", label: "Otro" },
  ];
  return (
    <Box className={styles.home}>
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
     label='Nombre y Apellido'
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
        value={formData?.home.sector || "Otro"}
        fullWidth 
        defaultValue="Otro"
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


      <TextField
        select
        name="lugar"
        label='Lugar'
        onChange={handleChangeSelect2}
        value={formData?.home.lugar || ''}
        fullWidth 
        defaultValue="Otro"
        required
        helperText='Una vez seleccionado el Lugar, completa el formulario correspondiente ingresando desde el botón de abajo.'
        
      >
        <MenuItem value="Teatro">Teatro</MenuItem>
        <MenuItem value="Tinglado">Tinglado</MenuItem>
        <MenuItem value="CampoDeporte">Campo de Deporte</MenuItem>
        <MenuItem value="Otro">Otro</MenuItem>
      </TextField>


    </Box>
  );
}
