import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for drag-and-drop
import NavBarHome from '../Components/NavBarHome';

const MyCalendar = () => {
  const events = [
    {
      title: 'L1_GR1',
      start: '2023-09-17T08:00:00',
      end: '2023-09-17T10:00:00',
    },
    {
      title: 'L1-GR2',
      start: '2023-09-17T12:00:00',
      end: '2023-09-17T14:00:00',
    },
    {
        title: 'L2-GR2',
        start: '2023-09-18T10:00:00',
        end: '2023-09-18T12:00:00',
      },{
        title: 'L1-GR2',
        start: '2023-09-18T14:00:00',
        end: '2023-09-18T17:00:00',
      },{
        title: 'L3-GR1',
        start: '2023-09-19T08:00:00',
        end: '2023-09-19T09:00:00',
      },{
        title: 'L2-GR1',
        start: '2023-09-19T09:00:00',
        end: '2023-09-19T10:30:00',
      },{
        title: 'L3-GR2',
        start: '2023-09-19T11:00:00',
        end: '2023-09-19T13:00:00',
      },{
        title: 'L2-GR1',
        start: '2023-09-20T08:00:00',
        end: '2023-09-20T11:00:00',
      },{
        title: 'L2-GR2',
        start: '2023-09-20T12:00:00',
        end: '2023-09-20T14:00:00',
      },{
        title: 'L3-GR1',
        start: '2023-09-20T14:00:00',
        end: '2023-09-20T16:00:00',
      },
  ];

  return (
    <div className=' flex flex-col gap-7'>
        <NavBarHome/>
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek" // Set the initial view to week
      events={events}
      
    /></div>
  );
};

export default MyCalendar;
