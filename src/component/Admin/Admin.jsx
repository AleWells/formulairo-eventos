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
import {  useSelector } from 'react-redux';
import LoaderDash from '../LoaderDash/LoaderDash'
import View from './View/View'
import { useNavigate } from "react-router-dom";

const Admin = ()=>{
   const navigate = useNavigate();
    const [openView,setOpenView] = useState(false)
    const [open,setOpen] = useState(false)
    const [openCalendar,setOpenCalendar] = useState(false);
    const {allForms,user} = useSelector(state=>state.data)
    const [id,setId] = useState(null);
    const form = allForms?.find(e=>e.id==id)

     const handleView = (id)=>{

        setId(id);
        setOpenView(true);
     }
    const handleAdd = ()=>{
        setOpen(true)
    }
    const handleCalendar = ()=>{
        setOpenCalendar(true)
    }
 
     useEffect(()=>{
        if(user===null){
            navigate('/');
        }
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

     {allForms&&<RenderForms allForms={allForms} handleView={handleView} />}
     {!allForms&&<LoaderDash/>}


      
    <CreateUser isOpen={open} handleClose={setOpen}/>
    <Caledar isOpen={openCalendar} handleClose={setOpenCalendar}/>
    <View isOpen={openView} handleClose={setOpenView} form={form} />
</Box>
}

export default Admin;
