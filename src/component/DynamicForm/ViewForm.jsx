import { useState } from "react";
import View from './Body/ViewForm/ViewForm.jsx'
export default function ViewForm (){
    const [open,setOpen] = useState(true)
    return<View isOpen={open} handleClose={setOpen}/>
}