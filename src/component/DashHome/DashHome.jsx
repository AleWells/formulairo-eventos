import { Box } from '@mui/material';
import styles from './DashHome.module.css'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import TableForms from '../TableForms/TableForms.jsx';
import LoaderDash from '../LoaderDash/LoaderDash.jsx';
import { listenerCalendar } from '../../socket.js';


export default function DashHome() {
const {user,forms} = useSelector(state=>state.data)
 useEffect(()=>{
  listenerCalendar();
 },[])
                                             
  return (
    <Box className={styles.dashhome}>    
      {forms&&<TableForms forms={forms}/>}
     {(!forms&&user)&&<LoaderDash/>} 
  
    </Box>
  );
}
