import { Box } from '@mui/material';
import styles from './DashHome.module.css'
import { useSelector } from 'react-redux';
import TableForms from '../TableForms/TableForms.jsx';
import LoaderDash from '../LoaderDash/LoaderDash.jsx';
import { useEffect } from 'react';


export default function DashHome() {
const {user,forms} = useSelector(state=>state.data)

useEffect(()=>{},[forms,user])  

  return (
    <Box className={styles.dashhome}>    
      {forms&&<TableForms forms={forms}/>}
     {(!forms&&user)&&<LoaderDash/>} 
  
    </Box>
  );
}
