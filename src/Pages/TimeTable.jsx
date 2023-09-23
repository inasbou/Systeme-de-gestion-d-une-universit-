import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import EventForm from '../Components/EventForm';
import Management from './Management';
import NavBarHome from '../Components/NavBarHome';

function Timetable() {
  const [events, setEvents] = useState([]);
  
  const handleEventCreate = (newEvent) => {
    // Calculate end time by adding a fixed duration (e.g., 2 hours) to the start time
    const end = new Date(newEvent.start);
    end.setHours(end.getHours() + 2); // Add 2 hours (you can adjust this as needed)
    
    setEvents([...events, { ...newEvent, end }]);
    console.log(newEvent)
  };
   

  return (
    <div className="timetable">
      <div>
        <NavBarHome/>
      <Management/>
      <EventForm onSubmit={handleEventCreate} />
      <FullCalendar
        plugins={[timeGridPlugin]}
        initialView="timeGridWeek"
        events={events}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'timeGridWeek',
        }}
        slotDuration="01:00:00"
        allDaySlot={false}
       
      /></div>
    </div>
  );
}

export default Timetable;
