import io from "socket.io-client";
// importo las alertas
import {alertSetFormOk,
  alertDeleteEventsOk,
  alertCancelEvent,
  alertSendFormOk,
  alertCompartido,
  alertConfirmacionEventoOk,
  alertSuccess,
  alertError
} from './services.js'
import {
  uploadUser,
   uploadForms,
    uploadCalendario,
    uploadCalendarioSelecionado,
    uploadEventosCalendarioSeleccionado,
  uploadAllFormsCalendarioSeleccionado,
  setConnectedUser,
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
  dispatch(setConnectedUser(true));
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
    if(data.alertUserCreated){
      alertSuccess("Usuario creado correctamente.");
    }
    if(data.alertUserNotCreated){
      alertError(data.alertUserNotCreated.message);
    }
    if(data.CancelledEventAlert){
      alertError(data.CancelledEventAlert);
    }
  });
}


// EMITIR EVENTO DE PRUEBA GOOGLE CALENDAR
export const apiCalendar = ()=>{
// se manda evento para solicitar calendarios
  socket.emit('apiCalendar',{getCalendar})
}

 


// Listener para los eventos de calendario que manda el servidor
// Este evento apiCalendar lo uso para otras cosas  que no tiene que ver con los calendarios 
// Luego lo modificaremos.

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
    if(data.formsCalendarioSeleccionado){
      dispatch(uploadAllFormsCalendarioSeleccionado(data.formsCalendarioSeleccionado));
      
    }
    if(data.alertCancelEvent){
      alertCancelEvent();
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
// eliminar  un evento no confirmado y en caso de estar confirmado eliminarlo tambien del calendario.
export const eliminarEvento = (idEvento)=>{
  // Se debe verificar el estado del evento y en base a eso se cancela.
  socket.emit('eliminarEvento',idEvento);
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
export const createUser = (email,name,password)=>{
  socket.emit('createUser',{email,name,password})
}

