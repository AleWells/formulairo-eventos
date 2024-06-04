import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {createUser} from '../socket.js'
const auth = getAuth();


export function setUser(data){
  
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed up 
      // const user = userCredential.user;
      // acá se envía la petición a la base de datos para crear el usuario
      createUser(data.email,data.name);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

}




