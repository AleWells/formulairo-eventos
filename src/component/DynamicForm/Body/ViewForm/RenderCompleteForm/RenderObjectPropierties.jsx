 import {Box,Typography} from '@mui/material'
 import { customRender } from './services';
 // funcion para renderizar las propiedades de cada objeto
 export default function RenderObjectProperties({objeto}) {

 function render(objeto) {
        return  Object.keys(objeto).map((propiedad,index)=>{

            if(typeof objeto[propiedad]==='object' || propiedad==='padres'|| propiedad==='alumnos'|| propiedad==='sobreEscenario'|| propiedad==='bajoEscenario'){
              return null;
            }else{
              const valor = objeto[propiedad];
              const valorRenderizado =
                typeof valor === 'boolean' ? valor.toString() : valor;
               return valor===false?null:<Typography variant='body2' key={index}>
               <strong>{customRender(propiedad)} :</strong> &nbsp; 
             
               {valorRenderizado}
               </Typography>
            }

        })
    }


    return(<Box>
       {render(objeto)}
       {
         objeto.sobreEscenario&&<Box>
           <Typography variant='body2' sx={{marginTop:'5px',marginBottom:'5px'}}><strong>DATOS SOBRE ESCENARIO</strong></Typography>
           {render(objeto.dataSobreEscenario)}
         </Box>

       }
       {

        objeto.bajoEscenario&&<Box>
          <Typography variant='body2' sx={{marginTop:'5px',marginBottom:'5px'}}><strong>DATOS BAJO ESCENARIO</strong></Typography>
          {render(objeto.dataBajoEscenario)}
        </Box>
       }
    </Box>)

    }