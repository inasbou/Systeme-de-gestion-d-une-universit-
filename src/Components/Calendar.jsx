// Calendar.js
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import the timeGrid plugin
import EventForm from './EventForm';
function Calendar() {
  const [events, setEvents] = useState([]);

  const handleEventCreate = (newEvent) => {
    setEvents([...events, newEvent]);
    
  };

  // Custom event rendering function
  const eventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <p>{eventInfo.event.title}</p>
        <p>{eventInfo.event.extendedProps.salle}</p> <p>{eventInfo.event.extendedProps.module}</p>
        <p>Prof {eventInfo.event.extendedProps.prof}</p>
      </>
    );
  };

  return (
    <div className="calendar">
      <EventForm onSubmit={handleEventCreate} />
      <div  className=" h-fit ">
      <FullCalendar
       
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek,timeGridDay,listWeek',
        }}
        eventContent={eventContent} // Set the custom event rendering function
      /></div>
    </div>
  );
}

export default Calendar;