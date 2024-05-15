import { Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Unlog from '../Index/Unlog/Unlog';
import {  useEffect, useState } from 'react';
import CreateUser from './CreateUser/CreateUser';
import Caledar from './Calendar/Calendar';
import {obtenerRegistros} from '../../socket'
import RenderForms from './RenderForms/RenderForms'
import { useSelector } from 'react-redux';
const Admin = ()=>{

    const [open,setOpen] = useState(false)
    const [openCalendar,setOpenCalendar] = useState(false);
    const {allForms} = useSelector(state=>state.data)

    const handleAdd = ()=>{
        setOpen(true)
    }
    const handleCalendar = ()=>{
        setOpenCalendar(true)
    }

     useEffect(()=>{
        obtenerRegistros();
     },[])
return <Box>
    <Unlog/>
    <Fab variant="extended" size='large' color="primary" style={{marginTop:'50px'}} onClick={handleAdd}>
        <AddIcon/>
        Crear Usuario
      </Fab>
      <Fab variant="extended" size='large' color="primary" style={{marginTop:'50px'}} onClick={handleCalendar}>
        <CalendarMonthIcon/>
         Calendarios
      </Fab>

     {allForms&&<RenderForms allForms={allForms}/>}



      
    <CreateUser isOpen={open} handleClose={setOpen}/>
    <Caledar isOpen={openCalendar} handleClose={setOpenCalendar}/>

</Box>
}

export default Admin;