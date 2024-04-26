import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {createUser} from '../socket.js'
const auth = getAuth();


export function createUser(email,name){

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // acá se envía la petición a la base de datos para crear el usuario
      createUser(email,name);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

}

