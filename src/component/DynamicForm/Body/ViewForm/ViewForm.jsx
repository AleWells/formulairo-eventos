import React from 'react';
import { Dialog,Slide,AppBar, Toolbar, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import RenderFormView from './RenderFormView/RenderFormView';
import { useNavigate } from 'react-router-dom';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default  function ViewForm({isOpen,handleClose}){
const navigate = useNavigate();
 const handlerExit = ()=>{
    handleClose(false)
    navigate('/')
 }
return(<Dialog
    fullScreen
    open={isOpen}
    onClose={handleClose}
    TransitionComponent={Transition}
>


<AppBar  sx={{ position: 'relative' }}>
    <Toolbar>
        <IconButton
         edge="start"
         color="inherit"
         onClick={handlerExit}
         aria-label="close"
        >
            <CloseIcon/>
        </IconButton>
    </Toolbar>

</AppBar>

<RenderFormView/>

</Dialog>)
} 