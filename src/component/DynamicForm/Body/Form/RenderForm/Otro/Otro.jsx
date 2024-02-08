import { Box , Typography, FormControlLabel,Checkbox, TextField, FormGroup, MenuItem} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { updateForm } from "../../../../../../redux/slice.js";
import styles from './Otro.module.css'
export default function Otro(){
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
                  dispatch(updateForm({ ...formData, otro: {...formData.otro,[id]: value } }));
                }if(type==='time'){
                  dispatch(updateForm({ ...formData, otro: {...formData.otro,[id]: value } }));
                }if(type==='text'){
                  dispatch(updateForm({ ...formData, otro: {...formData.otro,[id]: value } }));
                }
            
              };
              //manejador de los check
  const handleCheckChange = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,otro:{...formData.otro,[name]:checked}}))
  }            
  
  const handleChangeSelecFondo = (e)=>{
    
const {value,name} = e.target;
dispatch(updateForm({...formData,otro:{...formData.otro,dataSobreEscenario:{...formData.otro.dataSobreEscenario,[name]:value}}}))
              
  } 
    
  const handleChangeSobreEscenario =(e)=>{
    const {value,id} = e.target;
    if(value>=0){
      dispatch(updateForm({...formData,otro:{...formData.otro,dataSobreEscenario:{...formData.otro.dataSobreEscenario,[id]:value}}}))
    }
  }

  const handleCheckChangeSobreEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,otro:{...formData.otro,dataSobreEscenario:{...formData.otro.dataSobreEscenario,[name]:checked}}}))
  }  
  const handleChangeBajoEscenario =(e)=>{
    const {value,id,type} = e.target;
    if(type==='number' && value >= 0 || type==='textarea'){
      dispatch(updateForm({...formData,otro:{...formData.otro,dataBajoEscenario:{...formData.otro.dataBajoEscenario,[id]:value}}}))
    }
  }
  const handleCheckChangeBajoEscenario = (e)=>{
    const {name, checked} = e.target;
    dispatch(updateForm({...formData,otro:{...formData.otro,dataBajoEscenario:{...formData.otro.dataBajoEscenario,[name]:checked}}}))
  }  

  return (<Box className={styles.otro}>
  <Box >
         <Typography><strong>Sección Otro</strong></Typography>
 </Box>
  
    <Box className={styles.bodyOtro}>

    <TextField
id='lugarEvento'
type='text'
onChange={handleChange}
value={formData.otro.lugarEvento || ""}
fullWidth
required
label='Lugar del Evento'
/>

<Box className={styles.limpieza}>
<Box >
   <Typography variant='body2'>Limpieza pre-evento</Typography> 
   <TextField
     id='limpiezaInicio'
     type='time'
     value={formData?.otro.limpiezaInicio || ""}
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
     value={formData?.otro.limpiezaFinal || ""}
     onChange={handleChange}
     fullWidth
     required
     />
   </Box>
</Box>
   <Box className={styles.padresAlumnos}>
  <Box>
    <FormControlLabel
       label={<Typography variant='body2'>Padres</Typography>}
      control={<Checkbox
        checked={formData?.otro.padres || false}
        name='padres'
        onChange={handleCheckChange}
      />}
    />
    {
      formData.otro.padres &&
      <TextField
      id='cantidadPadres'
      type='number'
      label='Cantidad Padres'
      value={formData.otro.cantidadPadres || ""}
      onChange={handleChange}
      fullWidth
      />
    }
    </Box>
   <Box>
   <FormControlLabel
      label={<Typography variant='body2' >Alumnos</Typography>}
      control={<Checkbox
      checked={formData?.otro.alumnos || false}
      name='alumnos'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.otro.alumnos&&
      <TextField
      id='cantidadAlumnos'
      type='number'
      label='Cantidad Alumnos'
      value={formData.otro.cantidadAlumnos || ""}
      onChange={handleChange}
      fullWidth
      />
    }
   </Box>
  </Box>

<Box className={styles.items}>
<Box sx={{marginTop:'20px'}}>
      <Typography variant='body2' sx={{marginBottom:'10px'}} ><strong>SOBRE EL ESCENARIO</strong></Typography>
    <FormControlLabel
       label={<Typography variant='body2'>Tildar para completar los items necesarios sobre el escenario</Typography>}
      control={<Checkbox
      checked={formData?.otro.sobreEscenario || false}
      name='sobreEscenario'
      onChange={handleCheckChange}
      />}
    />
    {
      formData.otro.sobreEscenario &&
      <Box className={styles.sobreEscenario}>
         <TextField
         select
         name='fondoEscenario'
         label='Fondo de escenario blanco'
         onChange={handleChangeSelecFondo}
         value={formData.otro.dataSobreEscenario.fondoEscenario || "sin fondo"}
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
      checked={formData?.otro.dataSobreEscenario.escudoFondo || false}
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
         value={formData.otro.dataSobreEscenario.mesas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='Pupitres'
         type="number"
         label='Pupitres (cantidad)'
         fullWidth
         value={formData.otro.dataSobreEscenario.Pupitres || ""}
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
         value={formData.otro.dataSobreEscenario.sillas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         value={formData.otro.dataSobreEscenario.gradas || ""}
         onChange={handleChangeSobreEscenario}
         />
         <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono inalámbrico (cantidad)'
         fullWidth
         value={formData.otro.dataSobreEscenario.microfonoInalambrico || ""}
         onChange={handleChangeSobreEscenario}
         />
         <Box sx={{width:'100%'}}>
         <FormControlLabel
      label='Pie de micrófono'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.pieMicrofono || false}
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
         value={formData.otro.dataSobreEscenario.lucesYPulsadores || ""}
         onChange={handleChangeSobreEscenario}
         />
           <TextField
         id='alargues'
         type='number'
         label='Alargues (cantidad)'
         fullWidth
         value={formData.otro.dataSobreEscenario.alargues || ""}
         onChange={handleChangeSobreEscenario}
         />
      <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
        
      <FormControlLabel
      label='Proyector sobre escenario'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
        <FormControlLabel
      label='Puntero'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.puntero || false}
      name='puntero'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
 
 <FormControlLabel
      label='Pantalla'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.pantalla || false}
      name='pantalla'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
     <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.otro.dataSobreEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeSobreEscenario}
      />}
    />
      </Box>
    
      </Box>
    }
    </Box>

    <Box  sx={{marginTop:'20px'}}>
    <Typography variant="body2" sx={{marginBottom:'10px'}}><strong>BAJO EL ESCENARIO</strong></Typography>
    <FormControlLabel
      label={<Typography variant='body2'>Tildar para completar los items necesarios bajo el escenario</Typography>}
      control={<Checkbox
      checked={formData?.otro.bajoEscenario || false}
      name='bajoEscenario'
      onChange={handleCheckChange}
      />}
    />
    {formData.otro.bajoEscenario &&
    <Box  className={styles.bajoEscenario}>
       <TextField
         id='pupitres'
         type='number'
         label='Pupitres (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.pupitres || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='manteles'
         type='number'
         label='Manteles (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.manteles || ""}
         onChange={handleChangeBajoEscenario}
         />
           <TextField
         id='sillas'
         type='number'
         label='Sillas (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.sillas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='gradas'
         type='number'
         label='Gradas (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.gradas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='tarimas'
         type='number'
         label='Tarimas (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.tarimas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='microfonoInalambrico'
         type='number'
         label='Micrófono Inalambrico (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.microfonoInalambrico || ""}
         onChange={handleChangeBajoEscenario}
         />
             <TextField
         id='alargues'
         type='number'
         label='Alargues (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.alargues || ""}
         onChange={handleChangeBajoEscenario}
         />
        <Box sx={{display:'flex',flexDirection:'column',width:'100%'}}>
        <FormControlLabel
      label='Proyector Arriba'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.proyector || false}
      name='proyector'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />

<FormControlLabel
      label='Fondo de prensa'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.fondoPrensa || false}
      name='fondoPrensa'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Computadora'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.computadora || false}
      name='computadora'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    {/* <FormControlLabel
      label='Alargue'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.alargue || false}
      name='alargue'
      onChange={handleCheckChangeBajoEscenario}
      />}
    /> */}
    <FormControlLabel
      label='Aire Acondicionado'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.aireAcondicionado || false}
      name='aireAcondicionado'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Café'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.cafe || false}
      name='cafe'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Agua caliente'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.aguaCaliente || false}
      name='aguaCaliente'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Té'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.te || false}
      name='te'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Jarra con agua y hielo'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.jarraAguaHielo || false}
      name='jarraAguaHielo'
      onChange={handleCheckChangeBajoEscenario}
      />}
      
    />
        <FormControlLabel
      label='Gaseosas'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.gaseosas || false}
      name='gaseosas'
      onChange={handleCheckChangeBajoEscenario}
      />}
      
    />
    <FormControlLabel
      label='Azúcar'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.azucar || false}
      name='azucar'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Edulcorante'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.edulcorante || false}
      name='edulcorante'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
      <FormControlLabel
      label='Leche Chocolatada'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.lecheChocolatada || false}
      name='lecheChocolatada'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    <FormControlLabel
      label='Vasos plásticos (frio)'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.vasosPlasticos || false}
      name='vasosPlasticos'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
    
    <FormControlLabel
      label='Vasos telgopor (calor)'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.vasosTelgopor || false}
      name='vasosTelgopor'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
  <FormControlLabel
      label='Vasos vidrio'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.vasoVidrio || false}
      name='vasoVidrio'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
      <FormControlLabel
      label='Batidores'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.batidores || false}
      name='batidores'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
     <FormControlLabel
      label='Servilleta'
      control={<Checkbox
      checked={formData?.otro.dataBajoEscenario.servilleta || false}
      name='servilleta'
      onChange={handleCheckChangeBajoEscenario}
      />}
    />
        </Box>
    
    <TextField
         id='sandwichesMiga'
         type='number'
         label='Sandwiches de miga (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.sandwichesMiga || ""}
         onChange={handleChangeBajoEscenario}
         />
    <TextField
         id='medialunas'
         type='number'
         label='Medialunas (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.medialunas || ""}
         onChange={handleChangeBajoEscenario}
         />
            <TextField
         id='tortas'
         type='number'
         label='Tortas (cantidad)'
         fullWidth
         value={formData.otro.dataBajoEscenario.tortas || ""}
         onChange={handleChangeBajoEscenario}
         />


        <TextField
         id='musica'
         label='Música'
         multiline
         rows={5}
         fullWidth
         onChange={handleChangeBajoEscenario}
         value={formData.otro.dataBajoEscenario.musica || ""}
         helperText="En el caso de canciones patrias, aclarar cuáles son y el orden.
         Resto de la música entregar en pendrive en formato mp3, enumeradas conforme al orden en que serán 
         reproducidas en el acto"
         />
   
    <TextField
         id='observacionesComunicaciones'
         label='Observaciones Comunicaciones'
         multiline
         fullWidth
         rows={5}
         value={formData.otro.dataBajoEscenario.observacionesComunicaciones || ""}
         onChange={handleChangeBajoEscenario}
         />

          <TextField
         id='observacionesCocina'
         label='Observaciones Cocina'
         multiline
         fullWidth
         rows={5}
         value={formData.otro.dataBajoEscenario.observacionesCocina || ""}
         onChange={handleChangeBajoEscenario}
         />
             <TextField
         id='observacionesCompras'
         label='Observaciones Compras'
         multiline
         fullWidth
         rows={5}
         value={formData.otro.dataBajoEscenario.observacionesCompras || ""}
         onChange={handleChangeBajoEscenario}
         />
             <TextField
         id='observacionesMantenimiento'
         label='Observaciones Mantenimiento'
         multiline
         fullWidth
         rows={5}
         value={formData.otro.dataBajoEscenario.observacionesMantenimiento || ""}
         onChange={handleChangeBajoEscenario}
         />
    </Box>
    }
    
    </Box>

</Box>
    </Box>
  </Box>)
}