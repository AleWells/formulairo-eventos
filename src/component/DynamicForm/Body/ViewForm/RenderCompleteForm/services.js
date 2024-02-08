const arrayObjetos = [
  {
    id:'limpiezaInicio',
    value:'Limpieza antes de evento'
  },
  {
    id:'limpiezaFinal',
    value:'Limpieza final de Evento'
  },
  {
    id:'cantidadPadres',
    value:'Padres (cantidad)'
  },{
    id:'cantidadAlumnos',
    value:'Alumnos (cantidad)'
  },
  {
    id: 'fondoEscenario',
    value: 'Fondo de escenario Blanco'
  },
  {
    id: 'escudoFondo',
    value: 'Escudo para fondo'
  },
  {
    id: 'mesas',
    value: 'Mesas (cantidad)'
  },
  {
    id: 'pupitres',
    value: 'Pupitres (cantidad)'
  },
  {
    id: 'mantelBlanco',
    value: 'Mantel Blanco (cantidad)'
  },
  {
    id: 'mantelAzul',
    value: 'Mantel Azul (cantidad)'
  },
  {
    id: 'sillas',
    value: 'Sillas (cantidad)'
  },
  {
    id: 'gradas',
    value: 'Gradas (cantidad)'
  },
  {
    id: 'microfonoInalambrico',
    value: 'Micrófono inalámbrico (cantidad)'
  },
  {
    id: 'pieMicrofono',
    value: 'Pie de micrófono'
  },
  {
    id: 'lucesYPulsadores',
    value: 'Luces y pulsadores (cantidad)'
  },
  {
    id: 'alargues',
    value: 'Alargues (cantidad)'
  },
  {
    id: 'proyectorA',
    value: 'Proyector sobre escenario'
  },
  {
    id: 'proyectorB',
    value: 'Proyector Arriba'
  },
  {
    id: 'puntero',
    value: 'Puntero'
  },
  {
    id: 'pantalla',
    value: 'Pantalla'
  },
  {
    id: 'computadora',
    value: 'Computadora'
  },
  {
    id: 'manteles',
    value: 'Manteles (cantidad)'
  },
  {
    id: 'observacionesSillas',
    value: 'Observaciones disposición de sillas'
  },
  {
    id: 'tarimas',
    value: 'Tarimas (cantidad)'
  },
  {
    id: 'escaleras',
    value: 'Escaleras (cantidad)'
  },
  {
    id: 'fondoPrensa',
    value: 'Fondo de prensa'
  },
  {
    id: 'aireAcondicionado',
    value: 'Aire Acondicionado'
  },
  {
    id: 'cafe',
    value: 'Café'
  },
  {
    id: 'aguaCaliente',
    value: 'Agua Caliente'
  },
  {
    id: 'te',
    value: 'Té'
  },
  {
    id: 'jarraAguaHielo',
    value: 'Jarra con agua y hielo'
  },
  {
    id: 'azucar',
    value: 'Azucar'
  },
  {
    id: 'edulcorante',
    value: 'Edulcorante'
  },
  {
    id: 'batidores',
    value: 'Batidores'
  },
  {
    id: 'servilleta',
    value: 'Servilletas'
  },
  {
    id: 'vasosPlasticos',
    value: 'Vasos plásticos "frio" (cantidad)'
  },
  {
    id: 'vasosTelgopor',
    value: 'Vasos vidrio (cantidad)'
  },
  {
    id: 'musica',
    value: 'Múisca'
  },
  {
    id: 'video',
    value: 'Video o presentación'
  },
  {
    id: 'observacionesComunicaciones',
    value: 'Observaciones Comunicaciones'
  },
  {
    id: 'observacionesCocina',
    value: 'Observaciones Cocina'
  },
  {
    id: 'observacionesCompras',
    value: 'Observaciones Compras'
  },
  {
    id: 'observacionesMantenimiento',
    value: 'Observaciones Mantenimiento'
  },
  {
    id: 'parlante',
    value: 'Parlante'
  },
  {
    id: 'consola',
    value: 'Consola'
  },
  {
    id: 'zapatillas',
    value: 'Zapatillas (cantidad)'
  },
  {
    id: 'mesaLarga',
    value: 'Mesa larga (cantidad)'
  },
  {
    id: 'sombrillas',
    value: 'Sombrillas (cantidad)'
  },
  {
    id: 'observacionesDisposicionMesas',
    value: 'Observaciones de la disposición de las mesas'
  },
  {
    id: 'podio',
    value: 'Podio'
  },
  {
    id: 'lugarEvento',
    value: 'Lugar del Evento'
  },
  {
    id: 'lucesYPulsadores',
    value: 'Luces y pulsadores (cantidad)'
  },
  {
    id: 'tortas',
    value: 'Tortas (cantidad)'
  },
  {
    id: 'medialunas',
    value: 'Medialunas (cantidad)'
  },
  {
    id: 'sandwichesMiga',
    value: 'Sandwiches de miga (cantidad)'
  },
  {
    id: 'lecheChocolatada',
    value: 'Leche chocolatada'
  },
  {
    id: 'gaseosas',
    value: 'Gaseosas'
  }
]




export function convertirStringAFechaHora(stringFecha) {
    try {
      // Eliminar el carácter 'Z' al final del string
      const fechaSinZ = stringFecha.slice(0, -1);
      // Crear un objeto Date a partir del string
      const fechaHora = new Date(fechaSinZ);
      // Crear un nuevo objeto Date con la diferencia del huso horario local
      const fechaHoraLocal = new Date(fechaHora.getTime() - fechaHora.getTimezoneOffset() * 60000);
      // Devolver la fecha y hora en un formato legible
      return fechaHoraLocal.toLocaleString('es-ES', { timeZone: 'UTC' });
    } catch (error) {
      // En caso de que el string no tenga un formato válido
      return "Formato de fecha y hora no válido";
    }
  }

  // Funcion para obtener del objeto lugar las propiedades.
 export function convertirLugar(lugar){
 
    let result = "";
    for(const propiedad in lugar){
        if(lugar[propiedad]){
            result += ` ${propiedad} `
            
        }
    }

    return result;
 } 


 export function customRender (value){
 
   let valor = value;
   arrayObjetos.map((e)=>{
    if(e.id===value){
      valor = e.value;
    }
   })

   return valor;

 }
