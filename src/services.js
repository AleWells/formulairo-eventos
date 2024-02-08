import {authListener} from './firebase/auth_state_listener.js'
import {uploadUser} from './redux/slice.js'
import Swal from 'sweetalert2'



export function initListener(dispatch){
 authListener(dispatch,uploadUser)
 
}
export function alertSendFormOk(){
     

  return   Swal.fire(
    {
        title:'Buen trabajo !',
        text:'Formulario enviado correctamente',
        icon:'success',
        confirmButtonColor:'#0c3f5c',
       

    }
    
  )
}

export function alertSetFormOk(){
  return Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Formulario creado correctamente.',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 3000
  })
  
}

export function alertSingInErrorPassword(){
  return Swal.fire({
    toast:true,
    position:'top-end',
    icon:'error',
    title:'Error de usuario o contraseña',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 3000
  })
}

export function alertSingInSuccessPassword(){
  return Swal.fire({
    toast:true,
    position:'top-end',
    icon:'success',
    title:'Sesión iniciada correctamente',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 3000
  })
}

export function alertDeleteFormPending(){
  return Swal.fire({
    toast:true,
    position:'top-end',
    icon:'success',
    title:'Se eliminó formulario pendiente',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 3000
  })
}

export function alertErrorDeleteFormPending(){
  return Swal.fire({
    toast:true,
    position:'top-end',
    icon:'error',
    title:'El formulario ya fue enviado, no se puede eliminar',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 4000
  })
}

export function alertPending(){
  return Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: 'Un momento por favor',
    timerProgressBar: true,
    showConfirmButton: false,
    timer: 3000
  })
  
}