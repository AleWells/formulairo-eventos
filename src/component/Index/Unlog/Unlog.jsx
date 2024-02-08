import { 
  Box,
  Button,
 Typography,
 AppBar,
 Toolbar,
 IconButton ,
 MenuItem,
 Menu } from "@mui/material";
import {disconect} from '../../../firebase/auth_sign_out.js'
import { useDispatch, useSelector } from "react-redux";
import {uploadUser} from '../../../redux/slice.js'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../../../images/encabezado-wellspring.png';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './Unlog.module.css'
import { useState } from "react";
export default function Unlog(){
  const dispatch = useDispatch;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {user} = useSelector(state=>state.data)
    
  const handleOut = ()=>{
    disconect(dispatch,uploadUser);
    location.reload()
  }
    return(<AppBar position="static">
      <Toolbar>
  <Box className={styles.contenedor}>
  <Box>
                  <a href="/">
                    <img
                    className={styles.logo}
                    src={logo}
                    alt={logo.substring(30)}
                    />
                    </a>
  </Box>
  <Box></Box>
  <Box sx={{display:'flex'}}>
  <IconButton 
  sx={{flexDirection:'column'}}
  color='secondary' 
  onClick={handleClick}
  >
    <AccountCircleIcon className={styles.icon}/>
    <Typography className={styles.textIcon}>{user}</Typography>
    </IconButton>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
       
        <MenuItem onClick={handleOut}>
        <LogoutIcon/>
           cerrar sesión
        </MenuItem>
      </Menu>
  </Box>     
  </Box>
      </Toolbar>

    </AppBar>)
}



// <Box className={styles.unlog}>
       
       
//        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
//         <Typography variant='body2'>Bienvenido : <strong>{user}</strong></Typography>
//        </Box>
      
//        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
//        <Button variant='outlined' color='primary' onClick={handleClick}>
//        <LogoutIcon/>
//        <Typography>logout</Typography>
//         </Button>
//        </Box>
      
       
     
//     </Box>