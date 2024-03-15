import { Box } from '@mui/material';
import Unlog from '../Index/Unlog/Unlog';
import { useState } from 'react';
const Admin = ()=>{
    const [open,setOpen] = useState(false)
return <Box>
    <Unlog/>
</Box>
}

export default Admin;