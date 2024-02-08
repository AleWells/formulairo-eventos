import { Box ,
   Typography, 
   FormControlLabel,
   Checkbox, 
   TextField,
    FormGroup, 
    MenuItem,
    FormControl,
    FormHelperText
  } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './TeatroForm.module.css'
export default function TeatroForm(){
  //instanciase
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.data.form);
  const itemsFondoEscenario = [
    {name:'5 paneles',label:'5 paneles'},
    {name:'7 paneles',label:'7 paneles'},
    {name:'s/fondo',label:'sin fondo'}
  ]
  //funciones
              //funcion manejadora del dispatch 
  const handleChange = (e) => {

    const { value, id,type } = e.target;
    if(type==='number'&& value>=0){
      dispatch(updateForm({ ...formData, teatro: {...formData.teatro,[id]: value } }));
    }if(type==='time'){
      dispatch(updateForm({ ...formData, teatro: {...formData.teatro,[id]: value } }));
    }

  };
              //manejador de los check
  const handleCheckChange = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,[name]:checked}}))
  }            
  
  const handleChangeSelecFondo = (e)=>{
    
const {value,name} = e.target;
dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[name]:value}}}))
              
  } 
    
  const handleChangeSobreEscenario =(e)=>{
    const {value,id} = e.target;
    if(value>=0){

      dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[id]:value}}}))
    }
  }

  const handleCheckChangeSobreEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,dataSobreEscenario:{...formData.teatro.dataSobreEscenario,[name]:checked}}}))
  }  
  const handleChangeBajoEscenario =(e)=>{
    const {value,id,type} = e.target;
    if(type==='number' && value >= 0 || type==='textarea'){
      dispatch(updateForm({...formData,teatro:{...formData.teatro,dataBajoEscenario:{...formData.teatro.dataBajoEscenario,[id]:value}}}))
    }
    
  }
  const handleCheckChangeBajoEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,teatro:{...formData.teatro,dataBajoEscenario:{...formData.teatro.dataBajoEscenario,[name]:checked}}}))
  }  

  return (<Box className={styles.teatro}>
  <Box >
         <Typography><strong>Sección Teatro</strong></Typography>
 </Box>

    <Box className={styles.bodyTeatro}>

  <Box className={styles.limpieza}>
  <Box >
   <Typography variant='body2'>Limpieza pre-evento</Typography> 
   <TextField
     id='limpiezaInicio'
     type='time'
     value={formData?.teatro.limpiezaInicio || ""}
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
     value={formData?.teatro.limpiezaFinal || ""}
     onChange={handleChange}
     fullWidth
     required
     />
   </Box>
  </Box>
  <Box className={styles.padresAlumnos}>
  <Box  className={styles.padres}>
    
    <FormControlLabel
      label={<Typography variant='body2'>Padres</Typography>}
      control={<Checkbox
        checked={formData?.teatro.padres || false}
        name='padres'
        onChange={handleCheckChange}
        />}
        />
      
    {
      formData.teatro.padres &&
     
             <TextField
      id='cantidadPadres'
      type='number'
      label='Cantidad Padres'
      value={formData?.teatro.cantidadPadres || ""}
      onChange={handleChange}
      fullWidth
     
      />
   
 
    }
    </Box>
   <Box className={styles.alumnos}>
    
   <FormControlLabel
      label={<Typography variant='body2' >Alumnos</Typography>}
      control={<Checkbox
        checked={formData?.teatro.alumnos || false}
        name='alumnos'
        onChange={handleCheckChange}
        
        />}
        />
        
    {
      formData.teatro.alumnos&&
      <TextField
      id='cantidadAlumnos'
      type='number'
      label='Cantidad Alumnos'
      value={formData?.teatro.cantidadAlumnos || ""}
      onChange={handleChange}
      fullWidth
      />
    }

   </Box>
  </Box>
  <Box className={styles.items}>
  <Box sx={{marginTop:'20px'}} >
      <Typography variant='body2' sx={{marginBottom:'10px'}} ><strong>SOBRE EL ESCENARIO</strong></Typography>
    <FormControlLabel
      label={<Typography variant='body2' >Tildar para completar los items necesarios sobre el escenario</Typography>}
      control={<Checkbox
        checked={formData?.teatro.sobreEscenario || false}
        name='sobreEscenario'
        onChange={handleCheckChange}
        
        />}    
        />
      
    {
      formData.teatro.sobreEscenario &&
      <Box className={styles.sobreEscenario}>
         <TextField
         select
         name='fondoEscenario'
         label='Fondo de escenario blanco'
         onChange={handleChangeSelecFondo}
         value={formData?.teatro.dataSobreEscenario.fondoEscenario}
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
      checked={formData?.teatro.dataSobreEscenario.escudoFondo || false}
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
         value={formData?.teatro.dataSobreEscenario.mesas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='pupitres'
         type="number"
         label='Pupitres (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.pupitres || ""}
         onChange={handleChangeSobreEscenario}
         />
       
           <TextField
         id='mantelBlanco'
         type='number'
         label='Mantel Blanco (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.mantelBlanco || ""}
         onChange={handleChangeSobreEscenario}
         />
              <TextField
         id='mantelAzul'
         type='number'
         label='Mantel Azul (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.mantelAzul || ""}
         onChange={handleChangeSobreEscenario}
         />

         <TextField
         id='sillas'
         type='number'
         label='Sillas (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.sillas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.gradas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono inalámbrico (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.microfonoInalambrico || ""}
         onChange={handleChangeSobreEscenario}
         />
           
       <Box sx={{width:'100%'}}>

       <FormControlLabel
      label='Pie de micrófono'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.pieMicrofono || false}
      name='pieMicrofono'
      onChange={handleCheckChangeSobreEscenario}
      
      />}
    />
       </Box>
          
          <TextField
         id='lucesYPulsadores'
         type='number'
         label='Luces y pulsadores (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.lucesYPulsadores || ""}
         onChange={handleChangeSobreEscenario}
         />
           <TextField
         id='alargues'
         type='number'
         label='Alargues (cantidad)'
         fullWidth
         value={formData?.teatro.dataSobreEscenario.alargues || ""}
         onChange={handleChangeSobreEscenario}
         />
      
<Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>

<Box>
<FormControlLabel
      label='Proyector sobre escenario'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.proyector || false}
      name='proyectorA'
      onChange={handleCheckChangeSobreEscenario}
      
      />}
    />
<Typography variant="body2" color='gray'> (proyecta en un costado del fondo blanco)</Typography>
</Box>

        <FormControlLabel
      label='Puntero'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.puntero || false}
      name='puntero'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
 
 <FormControlLabel
      label='Pantalla'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.pantalla || false}
      name='pantalla'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
     <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.teatro.dataSobreEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />

</Box>
    
      </Box>
    }
    </Box>

    <Box sx={{marginTop:'20px'}} >
   
    <Typography variant='body2'  sx={{marginBottom:'10px'}}><strong>BAJO EL ESCENARIO</strong></Typography>
    <FormControlLabel
      label={<Typography variant='body2'>Tildar para completar los items necesarios bajo el escenario</Typography>}
      control={<Checkbox
        checked={formData?.teatro.bajoEscenario || false}
        name='bajoEscenario'
        onChange={handleCheckChange}
        />}
        />
        
    {formData.teatro.bajoEscenario &&
    <Box className={styles.bajoEscenario}>
       <TextField
         id='pupitres'
         type='number'
         label='Pupitres (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.pupitres || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='manteles'
         type='number'
         label='Manteles (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.manteles || ""}
         onChange={handleChangeBajoEscenario}
         />
           <TextField
         id='sillas'
         type='number'
         label='Sillas (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.sillas || ""}
         onChange={handleChangeBajoEscenario}
         />
           <TextField
         id='observacionesSillas'
         label='Observaciones disposición de sillas'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesSillas || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
            <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.gradas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='tarimas'
         type='number'
         label='Tarimas (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.tarimas || ""}
         onChange={handleChangeBajoEscenario}
         />
             <TextField
         id='escaleras'
         type='number'
         label='Escaleras (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.escaleras || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono Inalambrico (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.microfonoInalambrico || ""}
         onChange={handleChangeBajoEscenario}
         />
                <TextField
         id='alargues'
         type='number'
         label='Alargues (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.alargues || ""}
         onChange={handleChangeSobreEscenario}
         />
         <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%'}}>
        
        <Box>
        <FormControlLabel
      label='Proyector Arriba'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.proyector || false}
      name='proyectorB'
      onChange={handleCheckChangeBajoEscenario}
     
      />}
    />
    <Typography variant="body2" color='gray'> (proyecta en el medio del fondo blanco)</Typography>
        </Box>

<FormControlLabel
      label='Fondo de prensa'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.fondoPrensa || false}
      name='fondoPrensa'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Aire Acondicionado'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.aireAcondicionado || false}
      name='aireAcondicionado'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Café'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.cafe || false}
      name='cafe'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Agua caliente'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.aguaCaliente || false}
      name='aguaCaliente'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Té'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.te || false}
      name='te'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Jarra con agua y hielo'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.jarraAguaHielo || false}
      name='jarraAguaHielo'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Azúcar'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.azucar || false}
      name='azucar'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Edulcorante'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.edulcorante || false}
      name='edulcorante'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />

      <FormControlLabel
      label='Batidores'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.batidores || false}
      name='batidores'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Servilleta'
      control={<Checkbox
      checked={formData?.teatro.dataBajoEscenario.servilleta || false}
      name='servilleta'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
         </Box>
         <TextField
         id='vasosPlasticos'
         type='number'
         label='Vasos plásticos "frio" (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.vasosPlasticos || ""}
         onChange={handleChangeBajoEscenario}
         />
          <TextField
         id='vasosTelgopor'
         type='number'
         label='Vasos telgopor "calor" (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.vasosTelgopor || ""}
         onChange={handleChangeBajoEscenario}
         />
               <TextField
         id='vasosVidrio'
         type='number'
         label='Vasos vidrio (cantidad)'
         fullWidth
         value={formData?.teatro.dataBajoEscenario.vasosVidrio || ""}
         onChange={handleChangeBajoEscenario}
         />


        <TextField
         id='musica'
         label='Música'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         value={formData?.teatro.dataBajoEscenario.musica || ""}
         helperText="En el caso de canciones patrias, aclarar cuáles son y el orden.
         Resto de la música entregar en pendrive en formato mp3, enumeradas conforme al orden en que serán 
         reproducidas en el acto"
         />
      <TextField
         id='video'
         label='Video o presentación'
         multiline
         rows={5}
         onChange={handleChangeBajoEscenario}
         value={formData?.teatro.dataBajoEscenario.video || ""}
         helperText="En el caso de utilizar proyector, entregar los archivos en pendrive en formato mp4 (video)
          o pdf (presentacion power point). Si se llegara a usar más de un video, enumerarlos conforme
          al orden en que serán reproducidos en el acto"
         />
    <TextField
         id='observacionesComunicaciones'
         label='Observaciones Comunicaciones'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesComunicaciones || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />

          <TextField
         id='observacionesCocina'
         label='Observaciones Cocina'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesCocina || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
             <TextField
         id='observacionesCompras'
         label='Observaciones Compras'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesCompras || ""}
         onChange={handleChangeBajoEscenario}
         fullWidth
         />
             <TextField
         id='observacionesMantenimiento'
         label='Observaciones Mantenimiento'
         multiline
         rows={5}
         value={formData?.teatro.dataBajoEscenario.observacionesMantenimiento || ""}
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