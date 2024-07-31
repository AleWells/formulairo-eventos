import {Box} from '@mui/material'
import Login from "./Login/Login";
import {authListener} from '../../firebase/auth_state_listener.js'
import { useEffect , useState} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import Unlog from "./Unlog/Unlog";
import DashHome from '../DashHome/DashHome';
import Loader from '../LoaderDash/LoaderDash.jsx';

export default function Index (){
    const dispatch = useDispatch();
    const {user,isUserConnected} = useSelector(state=>state.data);
    
   useEffect(()=>{
    // inicio  socket y otras configuraciones 
      authListener(dispatch);
     
   },[])
 
    return(<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        {isUserConnected&&!user&&<Loader/>}
        {!user&&!isUserConnected&&<Login/>}
        {user&&<Unlog />}
        {user&&<DashHome/>}
       
    </Box>) 
}
