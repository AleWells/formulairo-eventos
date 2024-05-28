import io from "socket.io-client";
// importo las alertas
import {alertSetFormOk,
  alertDeleteEventsOk,
  alertDeleteFormPending,
  alertSendFormOk,
  alertCompartido,
  alertConfirmacionEventoOk} from './services.js'
import {
  uploadUser,
   uploadForms,
    uploadCalendario,
    uploadCalendarioSelecionado,
    uploadEventosCalendarioSeleccionado,
    uploadAllForms} from './redux/slice.js'
import { identity } from "@fullcalendar/core/internal";
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

    // evento confirmación de evento
    if(data.alertConfirmEvent){
      alertConfirmacionEventoOk();
    }


  })
}


// Listener Alert
export const listenerAlerts = ()=>{
  socket.on('Alerts',(data)=>{

    // alerta de calendario compartido
    if(data.compartido){
     
      alertCompartido();
    }

  });
}


// EMITIR EVENTO DE PRUEBA GOOGLE CALENDAR
export const apiCalendar = ()=>{
// se manda evento para solicitar calendarios
  socket.emit('apiCalendar',{getCalendar})
}

 


// Listener para los eventos de calendario que manda el servidor

export const listenerCalendar = (dispatch)=>{
  socket.on("apiCalendar",(data)=>{
    if(data.calendarios){
      dispatch(uploadCalendario(data.calendarios))
    }
    if(data.listadoEventos){
     
     if(data.listadoEventos.data){
      dispatch(uploadEventosCalendarioSeleccionado(data.listadoEventos.data));
     }else{
      dispatch(uploadEventosCalendarioSeleccionado(null));
     }
     

    }
    if(data.listadoRegistros){
      dispatch(uploadAllForms(data.listadoRegistros))
    }
    if(data.alertDeleteEventsOk){
      alertDeleteEventsOk();
    }
  
  })
}


export const compartirCalendario = (id,email) =>{
  socket.emit('apiCalendar',{compartir:{id,email}})
}
 


// evento para realizar la petición de los eventos del calendario seleccionado.


export const obtenerEventos = (id)=>{
  socket.emit('getEvents',id);
}


// Obtener  todos los eventos creado
export const obtenerRegistros = ()=>{
  socket.emit('getRegistros');
}


// solicitud de confirmaciond e evento para agregar al calendario
export const confirmEvent = (id)=>{
  socket.emit('confirmEvent',id)
}

// eliminar eventos de un calendario

export const eliminarEventos = (id)=>{

  socket.emit('eliminarEventos',id);
}
// obtener todos los eventos confirmados y sin confirmar para el calendario seleccionado

export const obtenerFormsCalendarioSeleccionado = (lugar)=>{
  //obtener los  formularios ya sea reservados o no de la base de datos.
  // sólo los pendientess y confirmados, no los cancelados
socket.emit('getFormsCalendarioSeleccionado',lugar);
}


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

