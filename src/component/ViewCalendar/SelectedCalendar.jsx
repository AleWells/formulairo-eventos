import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';
import styles from './SelectedCalendar.module.css';


export default function ViewCalendar({ data , handleSelect }) {
  const calendarRef = useRef(null);

  const events = data?.map(item => ({
    title: item.summary,
    start: item.start.dateTime,
    end: item.end.dateTime,
  }));

  const handleDateClick = (info) => {
    const today = new Date().toISOString().split('T')[0];
    const dayOfWeek = info.date.getUTCDay();
    if (info.dateStr < today) {
      alert("You cannot select a past date.");
      return;
    }
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      alert("⚠️ No se puede seleccionar un fin de semana !","Error");

      return;
    }
    handleSelect(info.date)
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <Box className={styles.calendar}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true} // Para mostrar los fines de semana pero deshabilitar la selección
        events={events}
        dateClick={handleDateClick}
        validRange={{
          start: today, // Deshabilita fechas anteriores a hoy
        }}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        selectable={true} // Habilita la selección de fechas
      />
    </Box>
  );
}
