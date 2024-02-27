import { Box, Typography } from '@mui/material'
import styles from './Lugar.module.css'
function Lugar (){
    return <Box className={styles.lugar}>

        <Typography variant='h6' textAlign='center'>¡Bienvenidos!</Typography>
        <Typography  variant='h6' textAlign='center'>Porfavor, selecciona donde vas  a realizar el vento.</Typography>

    </Box>
}


export default Lugar;