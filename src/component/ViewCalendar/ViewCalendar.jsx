import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';
export default function ViewCalendar(data) {
  const events = data.map(item => ({
    title: item.summary,
    date: item.start.dateTime.split('T')[0], // Extraer la fecha en formato 'YYYY-MM-DD'
  }));
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
