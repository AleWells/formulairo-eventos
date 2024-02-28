import { Box, Typography, TextField, MenuItem , Button } from '@mui/material'
import styles from './Lugar.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { updateForm } from "../../../../../../redux/slice.js";
function Lugar ({handle}){
    const dispatch = useDispatch();
    const formData = useSelector((state)=>state.data.form);
    const handleChangeSelect = (e)=>{
        const {value,name} = e.target;
        dispatch(updateForm({ ...formData, home: {...formData.home,[name]: value } }));
      }
   const handleChangeSection = ()=>{
    handle('Home')
   }
    return <Box className={styles.lugar}>

        <Typography variant='h6' textAlign='center'>¡Bienvenidos!</Typography>
        <Typography  variant='h6' textAlign='center'>Porfavor, selecciona donde vas  a realizar el vento.</Typography>
        <Box marginTop='50px' marginBottom='50px'>
        <TextField
        select
        name="lugar"
        label='Lugar'
        onChange={handleChangeSelect}
        value={formData?.home.lugar || ''}
        fullWidth 
        defaultValue="Otro"
        required
       
      >
        <MenuItem value="Teatro">Teatro</MenuItem>
        <MenuItem value="Tinglado">Tinglado</MenuItem>
        <MenuItem value="CampoDeporte">Campo de Deporte</MenuItem>
        <MenuItem value="Otro">Otro</MenuItem>
      </TextField>
        </Box>
       {formData.home.lugar && <Button variant='contained' onClick={handleChangeSection}>Siguiente</Button>}
    </Box>
}


export default Lugar;