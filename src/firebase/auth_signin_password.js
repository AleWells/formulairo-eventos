import { alertSingInErrorPassword ,alertSingInSuccessPassword} from '../services.js';
import {auth} from './app.js'
import {  signInWithEmailAndPassword } from "firebase/auth";
export function login( email, password){
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alertSingInSuccessPassword(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    console.log(errorCode)
    alertSingInErrorPassword();
  
  });
}