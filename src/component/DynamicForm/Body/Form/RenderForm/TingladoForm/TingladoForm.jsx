import { Box , Typography, FormControlLabel,Checkbox, TextField, MenuItem} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './TingladoForm.module.css'
export default function TingladoForm(){
  //instanciase
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);

  //funciones
              //funcion manejadora del dispatch 
              const handleChange = (e) => {

                const { value, id,type } = e.target;
                if(type==='number'&& value>=0){
                  dispatch(updateForm({ ...formData, tinglado: {...formData.tinglado,[id]: value } }));
                }if(type==='time'){
                  dispatch(updateForm({ ...formData, tinglado: {...formData.tinglado,[id]: value } }));
                }
            
              };
              //manejador de los check
  const handleCheckChange = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,tinglado:{...formData.tinglado,[name]:checked}}))
  }            
  
  const handleChangeSelecFondo = (e)=>{
    
const {value,name} = e.target;
dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataSobreEscenario:{...formData.tinglado.dataSobreEscenario,[name]:value}}}))
              
  } 
    
  const handleChangeSobreEscenario =(e)=>{
    const {value,id} = e.target;
    if(value>=0){

      dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataSobreEscenario:{...formData.tinglado.dataSobreEscenario,[id]:value}}}))
    }
  }

  const handleCheckChangeSobreEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataSobreEscenario:{...formData.tinglado.dataSobreEscenario,[name]:checked}}}))
  }  
  const handleChangeBajoEscenario =(e)=>{
    const {value,id,type} = e.target;
    if(type==='number' && value >= 0 || type==='textarea'){

      dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataBajoEscenario:{...formData.tinglado.dataBajoEscenario,[id]:value}}}))
    }
  }
  const handleCheckChangeBajoEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,tinglado:{...formData.tinglado,dataBajoEscenario:{...formData.tinglado.dataBajoEscenario,[name]:checked}}}))
  }  

  return (<Box className={styles.tinglado}>
  <Box >
         <Typography><strong>Sección Tinglado</strong></Typography>
 </Box>
 
    <Box className={styles.bodyTinglado}>

 

<Box className={styles.limpieza}>
<Box >
   <Typography variant='body2'>Limpieza pre-evento</Typography> 
   <TextField
     id='limpiezaInicio'
     type='time'
     value={formData?.tinglado.limpiezaInicio || ""}
     onChange={handleChange}
     fullWidth
     required
     />
   </Box>
   <Box >
   <Typography variant='body2'>Limpieza post-evento</Typography> 
   <TextField
     id='limpiezaFinal'
     type='time'
     value={formData?.tinglado.limpiezaFinal || ""}
     onChange={handleChange}
     fullWidth
     required
     />
   </Box>

</Box>
<Box className={styles.padresAlumnos}>
<Box className={styles.padres}>
    <FormControlLabel
         label={<Typography variant='body2'>Padres</Typography>}
      control={<Checkbox
        checked={formData?.tinglado.padres || false}
        name='padres'
        onChange={handleCheckChange}
      />}
    />
     {
      formData.tinglado.padres &&
      <TextField
      id='cantidadPadres'
      type='number'
      label='Cantidad Padres'
      value={formData.tinglado.cantidadPadres || ""}
      onChange={handleChange}
      fullWidth
      />
    }
    </Box>
    <Box className={styles.alumnos}>
    <FormControlLabel
      label={<Typography variant='body2' >Alumnos</Typography>}
      control={<Checkbox
      checked={formData?.tinglado.alumnos || false}
      name='alumnos'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.tinglado.alumnos&&
      <TextField
      id='cantidadAlumnos'
      type='number'
      label='Cantidad Alumnos'
      value={formData.tinglado.cantidadAlumnos || ""}
      onChange={handleChange}
      fullWidth
      />
    }
    </Box>
</Box>
  <Box className={styles.items}>
  <Box sx={{marginTop:'20px'}}> 
   <Typography variant='body2'  sx={{marginBottom:'10px'}}><strong>SOBRE EL ESCENARIO</strong></Typography>
    <FormControlLabel
       label={<Typography variant='body2' >Tildar para completar los items necesarios sobre el escenario</Typography>}
      control={<Checkbox
      checked={formData?.tinglado.sobreEscenario || false}
      name='sobreEscenario'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.tinglado.sobreEscenario &&
      <Box className={styles.sobreEscenario}>
         <TextField
         select
         name='fondoEscenario'
         label='Fondo de escenario blanco'
         onChange={handleChangeSelecFondo}
         value={formData?.tinglado.dataSobreEscenario.fondoEscenario}
         fullWidth
         defaultValue='sin fondo'
         >
          <MenuItem value="5 paneles">5 paneles</MenuItem>
        <MenuItem value="7 paneles">7 paneles</MenuItem>
        <MenuItem value="sin fondo">sin fondo</MenuItem>
        
         </TextField>
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>
  <FormControlLabel
      label='Escudo para fondo'
      control={<Checkbox
      checked={formData?.tinglado.dataSobreEscenario.escudoFondo || false}
      name='escudoFondo'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
  </Box>
         <TextField
         id="mesas"
         type='number'
         label='Mesas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.mesas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='Pupitres'
         type="number"
         label='Pupitres (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.Pupitres || ""}
         onChange={handleChangeSobreEscenario}
         />
                  <TextField
         id='mantelBlanco'
         type='number'
         label='Mantel Blanco (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.mantelBlanco || ""}
         onChange={handleChangeSobreEscenario}
         />
              <TextField
         id='mantelAzul'
         type='number'
         label='Mantel Azul (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.mantelAzul || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='sillas'
         type='number'
         label='Sillas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.sillas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.gradas || ""}
         onChange={handleChangeSobreEscenario}
         />
           <TextField
         id='escaleras'
         type='number'
         label='Escaleras (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.escaleras || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono inalámbrico (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.microfonoInalambrico || ""}
         onChange={handleChangeSobreEscenario}
         />
    <Box sx={{width:'100%'}}>
    <FormControlLabel
      label='Pie de micrófono'
      control={<Checkbox
      checked={formData?.tinglado.dataSobreEscenario.pieMicrofono || false}
      name='pieMicrofono'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
    </Box>
           <TextField
         id='alargues'
         type='number'
         label='Alargues (cantidad)'
         fullWidth
         value={formData?.tinglado.dataSobreEscenario.alargues || ""}
         onChange={handleChangeSobreEscenario}
         />

      </Box>
    }
    </Box>

    <Box sx={{marginTop:'20px'}}>
   <Typography variant='body2'  sx={{marginBottom:'10px'}}><strong>BAJO EL ESCENARIO</strong></Typography>
    <FormControlLabel
      label={<Typography variant='body2'>Tildar para completar los items necesarios bajo el escenario</Typography>}
      control={<Checkbox
      checked={formData?.tinglado.bajoEscenario || false}
      name='bajoEscenario'
      onChange={handleCheckChange}
      />}
    />
    {formData.tinglado.bajoEscenario &&
    <Box  className={styles.bajoEscenario}>
       <TextField
         id='pupitres'
         type='number'
         label='Pupitres (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.pupitres || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='manteles'
         type='number'
         label='Manteles (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.manteles || ""}
         onChange={handleChangeBajoEscenario}
         />
           <TextField
         id='sillas'
         type='number'
         label='Sillas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.sillas || ""}
         onChange={handleChangeBajoEscenario}
         />
             <TextField
         id='observacionesSillas'
         label='Observaciones disposición de sillas'
         multiline
         rows={5}
         value={formData?.tinglado.dataBajoEscenario.observacionesSillas || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
            <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.gradas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='tarimas'
         type='number'
         label='Tarimas (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.tarimas || ""}
         onChange={handleChangeBajoEscenario}
         />
                 <TextField
         id='alargues'
         type='number'
         label='Alargues (cantidad)'
         fullWidth
         value={formData?.tinglado.dataBajoEscenario.alargues || ""}
         onChange={handleChangeBajoEscenario}
         />
    
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>
      <FormControlLabel
      label='Parlante'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.parlante || false}
      name='parlante'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
        <FormControlLabel
      label='Consola'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.consola || false}
      name='consola'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />

<FormControlLabel
      label='Fondo de prensa'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.fondoPrensa || false}
      name='fondoPrensa'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.tinglado.dataBajoEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />

   
      </Box>

        <TextField
         id='musica'
         label='Música'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         value={formData?.tinglado.dataBajoEscenario.musica || ""}
         helperText="En el caso de canciones patrias, aclarar cuáles son y el orden.
         Resto de la música entregar en pendrive en formato mp3, enumeradas conforme al orden en que serán 
         reproducidas en el acto"
         />
   
    <TextField
         id='observacionesComunicaciones'
         label='Observaciones Comunicación'
         multiline
         rows={5}
         value={formData?.tinglado.dataBajoEscenario.observacionesComunicacion || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />

             <TextField
         id='observacionesCompras'
         label='Observaciones Compras'
         multiline
         rows={5}
         value={formData?.tinglado.dataBajoEscenario.observacionesCompras || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
             <TextField
         id='observacionesMantenimiento'
         label='Observaciones Mantenimiento'
         multiline
         rows={5}
         value={formData?.tinglado.dataBajoEscenario.observacionesMantenimiento || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
    </Box>
    }
    
    </Box>
  </Box>

    </Box>
    
    

    
    
 

  </Box>)
}