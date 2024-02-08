import io from "socket.io-client";
// importo las alertas
import {alertSetFormOk,alertDeleteFormPending,alertSendFormOk} from './services.js'
let socket;
const apiUrlDeploy = import.meta.env.VITE_URL_API_DEPLOY;
const apiUrlDev = "http://localhost:4001/";
const apiUrl = import.meta.env.PROD ? apiUrlDeploy : apiUrlDev;


// inicia socket con el usuario en el evento join
export const initSocket = (user)=>{

   

    socket = io(apiUrl,{transports:['websocket']})
    console.log('Connecting socket...')
    if (socket && user) {
        socket.emit("join", user);
      }
}
export const listenerUser = (email,dispatch,action)=>{
  socket.on(email,({forms,alertCreateForm,deleteForm,updateForm})=>{
 if(forms){  dispatch(action(forms))}
 if(alertCreateForm){alertSetFormOk()}
 if(deleteForm){alertDeleteFormPending()}
 if(updateForm){alertSendFormOk()}
 
  })
}

export const listenerForms = (dispatch,action)=>{
  socket.on('forms',(value)=>{
  dispatch(action(value))
  })
}

export const createForm = (email,data)=>{

  if(!socket) return null;
  socket.emit("createForm",{email,data});
  
}
export const deleteFormPending = (id,user)=>{
  socket.emit('deleteFormPending',{id,user})
}

export const updateForm = ({id,form,user})=>{
  socket.emit('updateForm',{id,form,user})
  }
