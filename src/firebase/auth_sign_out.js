import {auth} from '../firebase/app.js'
import { signOut } from "firebase/auth";
export function disconect(dispatch,uploadUser){
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log('usuario desconectado')
        dispatch(uploadUser(null))
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
}