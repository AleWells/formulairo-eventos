import { Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Unlog from '../Index/Unlog/Unlog';
import {  useState } from 'react';
import CreateUser from './CreateUser/CreateUser';

const Admin = ()=>{

    const [open,setOpen] = useState(false)
    const handleAdd = ()=>{
        setOpen(true)
    }
return <Box>
    <Unlog/>
    <Fab variant="extended" size='large' color="primary" style={{marginTop:'50px'}} onClick={handleAdd}>
        <AddIcon/>
        Crear Usuario
      </Fab>
      
    <CreateUser isOpen={open} handleClose={setOpen}/>
</Box>
}

export default Admin;