import React, { useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box } from '@mui/material';

export default function ViewCalendar({ data }) {
  const calendarRef = useRef(null);

  
  const events = data?.map(item => ({
    title: item.summary,
    start: item.start.dateTime,
    end: item.end.dateTime,    
  }));

  const handleDateClick = (info) => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView('dayGridDay', info.dateStr);
  };



  return (
    <Box>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        weekends={true}
        events={events}
        dateClick={handleDateClick}
     
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay',
        }}
        timeZone="UTC"
      />
    </Box>
  );
}
