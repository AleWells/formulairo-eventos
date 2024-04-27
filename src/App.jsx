import {  Container } from "@mui/material"
import styles from './App.module.css'
import { Outlet } from "react-router-dom"

function App() {
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
