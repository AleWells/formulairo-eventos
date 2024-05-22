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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import styles from './Unlog.module.css'
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Unlog(){
  const navigate = useNavigate();
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
    navigate('/')
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
    <Typography className={styles.textIcon}>{user && user.name}</Typography>
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
           Cerrar Sesión
        </MenuItem>
      {user?.email==='admin@wellspring.edu.ar'?
      <MenuItem onClick={()=>{navigate('/admin')}}>
      <AdminPanelSettingsIcon/>
      Consola
      </MenuItem>:null  
    }
      </Menu>
  </Box>     
  </Box>
      </Toolbar>

    </AppBar>)
}

