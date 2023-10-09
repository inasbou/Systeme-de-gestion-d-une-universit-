import React, { useState } from "react";

function EventForm({ onSubmit }) {
  const [event, setEvent] = useState({
    module: "",
    start: "",
    duration: "",
    salle: "",
    prof:"",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleCalandar = `${selectedModule} in ${selectedSalle}`;
    // Calculate the end time based on the start time and duration
    const start = new Date(event.start);
    const duration = parseFloat(event.duration);
    if (!isNaN(duration)) {
      const end = new Date(start.getTime() + duration * 60 * 60 * 1000); // Convert hours to milliseconds
      onSubmit({ ...event,module:selectedModule,title:titleCalandar,salle:selectedSalle,prof:selectedProf, end });
      setEvent({ module: "", start: "", duration: "", salle: "" ,prof:""}); // Clear the form
    } else {
      alert("Please enter a valid duration (in hours) for the event.");
    }
  };
  const groupes = ['L1_G1', 'L1_G2', 'L2_G1','L2_G2', 'L3_G1',"L3_G2"]; 
   const [selectedGroup,setSelectedGroup]=useState('');
  const salles = ['Salle 1', 'Salle  2', 'Salle 3','Salle  4', 'Salle 5']; 
   const [selectedSalle,setSelectedSalle]=useState('');
   const modules = ['Ana1', 'Ana2', 'Res','CPRJ', 'Economie']; 
   const [selectedModule,setSelectedModule]=useState('');
   const profs = [{id:1, name:'amina'}, {id:2, name:"mohammed"}, {id:3, name:'Ali'},{id:4, name:'aya'},{id:5, name: 'ahmed'}]; 
   const [selectedProf,setSelectedProf]=useState('');

  return (
    <div className=" flex flex-col   items-center mx-25 my-8 ">
      <h2 className=" text-center  text-blue font-medium text-5xl">
          Emplois de temps
        </h2>
        <form
        onSubmit={handleSubmit}
        className="flex flex-row gap-5 items-center px-64 py-12 rounded-lg border-2 border-gray-400"
      >
        
        <div className="flex flex-col gap-6">
        <select onChange={(e) => setSelectedGroup(e.target.value)} value={selectedGroup}  className=" w-96 py-2   rounded-lg border-2 border-gray-400">
        <option value="">choisir un groupe </option>
        {groupes.map((group) => (
          <option key={group} value={group} className="bg-white py-2 px-20 border  border-gray-300">
            {group}
          </option>
        ))}
      </select><select onChange={(e) => setSelectedModule(e.target.value)} value={selectedModule}  className=" w-96 py-2   rounded-lg border-2 border-gray-400">
        <option value="">choisir un module </option>
        {modules.map((module) => (
          <option key={module} value={module} className="bg-white py-2 px-20 border  border-gray-300">
            {module}
          </option>
        ))}
      </select>
      
      </div>
      <div className="flex flex-col gap-6">
        <input
          className=" w-96  py-2   rounded-lg border-2 border-gray-400"
          type="datetime-local"
          name="start"
          value={event.start}
          onChange={handleChange}
          required
        />
        <input
          className=" w-96  py-2   rounded-lg border-2 border-gray-400"
          type="text"
          name="duration"
          placeholder="Durée (heures)"
          value={event.duration}
          onChange={handleChange}
          required
        /> </div>
         <div className="flex flex-col gap-6">
        <select onChange={(e) => setSelectedSalle(e.target.value)} value={selectedSalle}  className=" w-96  py-2   rounded-lg border-2 border-gray-400">
        <option value="">choisir une salle </option>
        {salles.map((salle) => (
          <option key={salle} value={salle} className="bg-white p-2 border border-gray-300">
            {salle}
          </option>
        ))}
      </select>
      
        <button
          type="submit"
          className=" w-96  py-2  text-center text-white  rounded-lg  bg-blue"
        >
          Create Event
        </button></div>
      </form>
    </div>
  );
}

export default EventForm;
/*<select onChange={(e) => setSelectedProf(e.target.value)} value={selectedProf}  className=" w-96  py-2   rounded-lg border-2 border-gray-400">
        <option value="">choisir un module </option>
        {profs.map((prof) => (
          <option key={prof} value={prof.id} className="bg-white p-2 border border-gray-300">
            {prof.name}
          </option>
        ))}</select>*/
/**import React, { useState } from 'react';

function EventForm({ onSubmit }) {
  const [event, setEvent] = useState({ title: '', start: '', duration: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Calculate the end time based on the start time and duration
    const start = new Date(event.start);
    const duration = parseFloat(event.duration);
    if (!isNaN(duration)) {
      const end = new Date(start.getTime() + duration * 60 * 60 * 1000); // Convert hours to milliseconds
      onSubmit({ ...event, end });
      setEvent({ title: '', start: '', duration: '' }); // Clear the form
    } else {
      alert('Please enter a valid duration (in hours) for the event.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={event.title}
        onChange={handleChange}
        required
      />
      <input
        type="datetime-local"
        name="start"
        value={event.start}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration (hours)"
        value={event.duration}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Event</button>
    </form>
  );
}

export default EventForm;
 */
