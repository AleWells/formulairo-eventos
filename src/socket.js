import io from "socket.io-client";
// importo las alertas
import {alertSetFormOk,alertDeleteFormPending,alertSendFormOk} from './services.js'
import {uploadUser, uploadForms, uploadCalendario} from './redux/slice.js'
let socket;
const apiUrlDeploy = import.meta.env.VITE_URL_API_DEPLOY;
const apiUrlDev = import.meta.env.VITE_URL_API_DEV;
const apiUrl = import.meta.env.PROD ? apiUrlDeploy : apiUrlDev;




// inicia socket con el usuario en el evento join
export const initSocket = (user)=>{

   

    socket = io(apiUrl,{transports:['websocket']})
    console.log('Connecting socket...')
    if (socket && user) {
        socket.emit("join", user);
      }
}




export const listenerUser = (email,dispatch)=>{
  
  socket.on(email,(data)=>{

    if(data.dataUser){
      const {name,email} = data.dataUser;
     dispatch(uploadUser({name,email}))
    }
    //actualiza los formularios del usuario en Redux
    // escucho los formularios del usuario correspondiente
    if(data.dataForms){
      dispatch(uploadForms(data.dataForms))
    }
 
   // escucho alerta de creación de formulario correcto
    if(data.alertCreateForm){
      alertSetFormOk()
    }


  })
}


// Listener Alert
export const listenerAlerts = ()=>{
  socket.on('Alerts',(data)=>{

    // alerta de calendario compartido
    if(data.compartido){
      console.log("Calendario compartido correctamente")
    }

  });
}


// EMITIR EVENTO DE PRUEBA GOOGLE CALENDAR
export const apiCalendar = ()=>{
// se manda evento para solicitar calendarios
  socket.emit('apiCalendar',{getCalendar})
}

 




export const listenerCalendar = (dispatch)=>{
  socket.on("API",(data)=>{
    if(data.calendarios){
      dispatch(uploadCalendario(data.calendarios))
    }
  
  })
}


export const compartirCalendario = (id,email) =>{
  socket.emit('apiCalendar',{compartir:{id,email}})
}



// 












// export const listenerForms = (dispatch,action)=>{
//   socket.on('forms',(value)=>{
//   dispatch(action(value))
//   })
// }

export const createForm = (user,data)=>{

  if(!socket) return null;
  socket.emit("createForm",{user:user,data});
  
}
export const deleteFormPending = (id,user)=>{
  socket.emit('deleteFormPending',{id,user})
}

export const updateForm = ({id,form,user})=>{
  socket.emit('updateForm',{id,form,user})
  }
export const createUser = (email,name)=>{
  socket.emit('createUser',{email,name})
}

