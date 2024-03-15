import { Dialog ,Slide , AppBar, IconButton,Toolbar} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import styles from './CreateUser.module.css'
import FormCreateUser from './FormCreateUser/FormCreateUser';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function  CreateUser ({isOpen,handleClose}){
    const handleCloseButton = ()=>{
        handleClose(false)
    }
   return <React.Fragment>
    <Dialog
    fullWidth
    open={isOpen}
    onClose={handleClose}
    TransitionComponent={Transition}
    >
     <AppBar sx={{ position: 'relative' }}>
    <Toolbar>
    <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseButton}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
           
    </Toolbar>
        </AppBar>  
    <FormCreateUser/>
    </Dialog>
   </React.Fragment>
}