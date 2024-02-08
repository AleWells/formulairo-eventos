import {  Container } from "@mui/material"
import styles from './App.module.css'
import { Outlet } from "react-router-dom"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initListener } from "./services";
import { listenerUser,listenerForms } from "./socket";
import { uploadValues } from "./redux/slice";
function App() {
  const dispatch =  useDispatch();
const {user,forms} = useSelector(state=>state.data)
useEffect(()=>{
  initListener(dispatch)
  user?listenerUser(user,dispatch,uploadValues):null
  user?listenerForms(dispatch,uploadValues):null
},[user])

  useEffect(()=>{
    
    window.scrollTo(0, 0);
 },[forms]) 

  return (
   <Container
   maxWidth='xl'
   className={styles.container}
   >
    <Outlet/>
   </Container>
  )
}

export default App
