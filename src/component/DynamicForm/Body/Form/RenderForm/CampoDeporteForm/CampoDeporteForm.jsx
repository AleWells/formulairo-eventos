import { Box, FormControlLabel, TextField, Typography,Checkbox } from "@mui/material"
import { useSelector,useDispatch } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './CampoDeporteForm.module.css'
import { useEffect } from "react";
export default function CampoDeporteForm(){
    //instancias
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.data.form);
      //funciones
              //funcion manejadora del dispatch 
  const handleChange = (e) => {
    const { value, id, type } = e.target;
    if(type==='number' && value >= 0 || type==='textarea'){

      dispatch(updateForm({ ...formData, campoDeporte: {...formData.campoDeporte,[id]: value } }));
    }

  };
                //manejador de los check
  const handleCheckChange = (e)=>{
     const {name, checked} = e.target;
     dispatch(updateForm({...formData,campoDeporte:{...formData.campoDeporte,[name]:checked}}))
                }  

                useEffect(() => {
                  // Identificar el elemento de destino por su id
                  const targetElement = document.getElementById('miAncla');
              
                  // Verificar si se encontró el elemento
                  if (targetElement) {
                    // Utilizar el método scrollIntoView para desplazar hacia el elemento
                    targetElement.scrollIntoView({
                      behavior: 'smooth', // Opcional: scroll suave
                      block: 'start',    // Opcional: posición de inicio del elemento
                    });
                  }
                 
                }, []);  
          
  return (<Box className={styles.campoDeporte}>
    <Box id='miAncla'><Typography><strong> Sección Campo de Deporte</strong></Typography></Box>
 
    <Box className={styles.bodyCampoDeporte}>
    <TextField
      id='mesas'
      type='number'
      label='Mesas (cantidad)'
      onChange={handleChange}
      value={formData.campoDeporte.mesas || ""}
      fullWidth
     
      />
       <TextField
      id='sillas'
      type='number'
      label='Sillas (cantidad)'
      onChange={handleChange}
      value={formData.campoDeporte.sillas|| ""}
      fullWidth
      />
       <TextField
      id='sombrillas'
      type='number'
      label='Sombrillas (cantidad)'
      onChange={handleChange}
      value={formData.campoDeporte.sombrillas || ""}
      fullWidth
     
      />
     <TextField
         id='observacionesDisposicionMesas'
         label='Observaciones de la disposición de las mesas'
         multiline
         rows={5}
         value={formData.campoDeporte.observacionesDisposicionMesas || ""}
         onChange={handleChange} 
         fullWidth
         />
       <TextField
      id='mesaLarga'
      type='number'
      label='Mesa larga (cantidad)'
      value={formData.campoDeporte.mesaLarga || ""}
      onChange={handleChange}
      fullWidth
      />
         <TextField
      id='alargues'
      type='number'
      label=' Alargues (cantidad)'
      value={formData.campoDeporte.alargues || ""}
      onChange={handleChange}
      fullWidth
      />
         <TextField
      id='zapatillas'
      type='number'
      label='Zapatillas (cantidad)'
      value={formData.campoDeporte.zapatillas || ""}
      onChange={handleChange}
      fullWidth
      />
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>

     <FormControlLabel
      label='Parlantes (cantidad)'
      control={<Checkbox
      checked={formData?.campoDeporte.parlantes || false}
      name='parlantes'
      onChange={handleCheckChange}
      />}
    />
         <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.campoDeporte.computadora || false}
      name='computadora'
      onChange={handleCheckChange}
      />}
    />
         <FormControlLabel
      label='Consola'
      control={<Checkbox
      checked={formData?.campoDeporte.consola || false}
      name='consola'
      onChange={handleCheckChange}
      />}
    />
         <FormControlLabel
      label='Fondo Prensa'
      control={<Checkbox
      checked={formData?.campoDeporte.fondoPrensa || false}
      name='fondoPrensa'
      onChange={handleCheckChange}
      />}
    />
         <FormControlLabel
      label='Podio'
      control={<Checkbox
      checked={formData?.campoDeporte.podio || false}
      name='podio'
      onChange={handleCheckChange}
      />}
    />
     </Box>
       <TextField
         id='musica'
         label='Música'
         multiline
         rows={5}
         onChange={handleChange}
         value={formData.campoDeporte.musica || ""}
         helperText="Aclarar estilo del evento. En caso de necesitar algún
         tema específico entregar en pendrive en formato mp3.
         De necesitar más de un tema enumerar conforme al orden en que serán reproducidas
         en el evento"
         />
         <TextField
         id='observacionesComunicacion'
         label='Observaciones Comunicación'
         multiline
         rows={5}
         value={formData.campoDeporte.observacionesComunicacion || ""}
         onChange={handleChange} 
         fullWidth
         />
 
            <TextField
         id='observacionesCompras'
         label='Observaciones Compras'
         multiline
         rows={5}
         value={formData.campoDeporte.observacionesCompras || ""}
         onChange={handleChange} 
         fullWidth
         />
            <TextField
         id='observacionesMantenimineto'
         label='Observaciones Manteniento'
         multiline
         rows={5}
         value={formData.campoDeporte.observacionesMantenimineto || ""}
         onChange={handleChange} 
         fullWidth
         />
    </Box>
  </Box>)
}