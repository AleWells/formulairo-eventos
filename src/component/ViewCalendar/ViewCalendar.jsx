import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';
export default function ViewCalendar() {
 const  events =[
  { title: 'Evento en teatro', date: '2024-05-15' },
  { title: 'Evento en Tinglado', date: '2024-05-02' }
];
return(
  <Box>
    <FullCalendar
     plugins={[dayGridPlugin]}
     initialView='dayGridMonth'
     weekends={false}
     events={events}
    
    />
  </Box>
);
}
