import { createSlice } from '@reduxjs/toolkit'
import { estructuraFormulario } from './service.js'
const initialState = {
  user: null,
  forms:null,
  form: estructuraFormulario,
  calendarios:null,
  calendarioSelecionado:null,
  allForms:null,
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    
    uploadUser: (state, action) => {
      state.user = action.payload
    },
    uploadForms:(state,action)=>{
      state.forms=action.payload
    },
    updateForm:(state,action)=>{
    state.form = action.payload
    },
    uploadCalendario:(state,action)=>{
      state.calendarios = action.payload
    },
    uploadCalendarioSelecionado:(state,action)=>{
      state.calendarioSelecionado = action.payload
    },
    uploadAllForms:(state,action)=>{
      state.allForms =  action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { 
  uploadUser,
  uploadForms,
  updateForm,
  uploadCalendario,
  uploadCalendarioSelecionado ,
  uploadAllForms
} = stateSlice.actions
export default stateSlice.reducer