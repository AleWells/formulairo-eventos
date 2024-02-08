import {Box} from '@mui/material'
import {useDispatch,useSelector} from 'react-redux'
import { initListener } from "../../services";
import {uploadValues} from '../../redux/slice.js'
import { listenerForms, listenerUser} from '../../socket.js'
import Login from "./Login/Login";
import Unlog from "./Unlog/Unlog";
import { useEffect } from 'react';
import DashHome from '../DashHome/DashHome';
export default function Index (){
    const dispatch = useDispatch();
    const {user,forms} = useSelector(state=>state.data)
    useEffect(()=>{
        initListener(dispatch)
        user?listenerUser(user,dispatch,uploadValues):null
        user?listenerForms(dispatch,uploadValues):null
    },[user])
    useEffect(()=>{
        window.scrollTo(0, 0);
     },[forms])
    return(<Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        
        {!user&&<Login/>}
       {user&&<Unlog/>}
       {user&&<DashHome/>}
    </Box>)
}