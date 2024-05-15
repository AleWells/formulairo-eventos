import { Box, Typography, TextField, MenuItem , Button } from '@mui/material'
import styles from './Lugar.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { updateForm } from "../../../../../../redux/slice.js";
import {obtenerEventos} from '../../../../../../socket.js'
function Lugar ({handle}){
    const dispatch = useDispatch();
    const formData = useSelector((state)=>state.data.form);
    const {calendarios} = useSelector((state)=>state.data);
    const handleChangeSelect = (e)=>{
        const {value,name} = e.target;
        dispatch(updateForm({ ...formData, home: {...formData.home,[name]: value } }));

      }

      const handleChangeSection = () => {
        // Buscar el ID del calendario correspondiente al lugar seleccionado
        const lugarSeleccionado = formData.home.lugar;
        let calendar = null;
        switch(lugarSeleccionado){
          case "Otro": 
           calendar = calendarios.find((el)=>el.summary ==="Otros")
          break
          case "CampoDeporte":
           calendar = calendarios.find((el)=>el.summary ==="Campo de Deporte")
          break
          case "Tinglado":
           calendar = calendarios.find((el)=>el.summary ==="Tinglado")
          break
          case "Teatro": 
          calendar = calendarios.find((el)=>el.summary ==="Teatro")
          break
        }
       
        obtenerEventos(calendar.id)
        handle('Home');
    }
    return <Box className={styles.lugar}>

        <Typography variant='h6' textAlign='center'>¡Bienvenidos!</Typography>
        <br/>
        <Typography  textAlign='center'>
  A continuación completarán el formulario para el evento que desean realizar.
   Una vez finalizado, se enviarán tus requerimientos a los sectores correspondientes. 
   El primer paso es seleccionar el lugar, luego el botón SIGUIENTE y 
   después se desplegarán todas las opciones para que puedas elegir.
</Typography>
        <br/>
        <Typography>
          IMPORTANTE: Una vez que completes y envies el formulario no podrá modificarse, asi que es muy importante que no olvides
          incluir ningún detalle o necesidad.
        </Typography>
        <Box marginTop='50px' marginBottom='50px'>
        <TextField
        select
        name="lugar"
        label='Lugar'
        onChange={handleChangeSelect}
        value={formData?.home.lugar || ''}
        fullWidth 
        required
        helperText='Una vez seleccionado el Lugar, completa el formulario correspondiente ingresando desde el botón de abajo.'
      >

        <MenuItem value="Teatro">Teatro</MenuItem>
        <MenuItem value="Tinglado">Tinglado</MenuItem>
        <MenuItem value="CampoDeporte">Campo de Deporte</MenuItem>
        <MenuItem value="Otro">Otro</MenuItem>
      </TextField>
        </Box>
       
        {formData.home.lugar && <Button variant='outlined' onClick={handleChangeSection} >Siguiente</Button>}
        
      
    </Box>
}


export default Lugar;