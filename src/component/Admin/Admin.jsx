import { Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Unlog from '../Index/Unlog/Unlog';
import {  useState } from 'react';
import CreateUser from './CreateUser/CreateUser';
import Caledar from './Calendar/Calendar';
const Admin = ()=>{

    const [open,setOpen] = useState(false)
    const [openCalendar,setOpenCalendar] = useState(false);

    const handleAdd = ()=>{
        setOpen(true)
    }
    const handleCalendar = ()=>{
        setOpenCalendar(true)
    }
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
      
      
    <CreateUser isOpen={open} handleClose={setOpen}/>
    <Caledar isOpen={openCalendar} handleClose={setOpenCalendar}/>
</Box>
}

export default Admin;