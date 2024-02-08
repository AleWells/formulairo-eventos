import { Box } from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import styles from './CreateForm.module.css';
import { useNavigate } from "react-router-dom";
const CreateForm = ()=>{
    const navigate = useNavigate();
   const handleClick = ()=>{
    navigate('/formulario')
   }
   

    return (<Box>
       <Box className = {styles.button} component='div' onClick={handleClick} >
       <AddIcon sx={{fontSize:40}}/>   
       </Box>
    </Box>)
}

export default CreateForm;