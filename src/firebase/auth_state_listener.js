import {auth} from './app.js'
import {  onAuthStateChanged } from "firebase/auth";
import {initSocket,listenerCalendar,listenerUser,listenerAlerts} from '../socket.js'
import { useDispatch } from 'react-redux';
import { setConnectedUser } from '../redux/slice.js';
export function authListener(dispatch){
    onAuthStateChanged(auth, (user) => {
   
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          
          console.log('usuario conectado');
          console.log(user.email);
          
        
          //Me conecto al server socket. si hay user
          // y escucho los eventos.
          initSocket(user.email);
          listenerUser(user.email,dispatch);
          listenerCalendar(dispatch);
          listenerAlerts();
          
          // ...
        } else {
          // User is signed out
          // ...
         console.log("usuario desconectado")
         dispatch(setConnectedUser(false));
        }
      });
      
}