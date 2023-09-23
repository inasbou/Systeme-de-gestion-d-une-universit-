import React, { useState } from 'react';
import Modal from 'react-modal';
import TeacherList from '../Components/TeacherSelection';
import ModuleAssignment from '../Components/ModuleAssignment';
import GroupSelection from '../Components/GroupSelection';

function Management() {
    
  const teachers = [
    { id: 1, name: 'Mohamed Ali' ,email:"mohemd.ali@gmail.com" ,grade:"metre de conf A" ,numéro_telephone:"0562232654" },
    { id: 2, name: 'Aya Ibrahim ',email:"aya.ibrahim@gmail.com" ,grade:"metre de conf A" ,numéro_telephone:"0767232654"  },
    { id: 3, name: 'Ahmed  Ibrahim ',email:"ahmed.ibrahim@gmail.com",grade:"metre de conf B" ,numéro_telephone:"064532654" },
    { id: 4, name: ' Moath Salhi',email:"moath.salhi@gmail.com" ,grade:"metre de conf B" , numéro_telephone:"0642232654"},
    { id: 5, name: 'Dajebr Idris  ',email:"djaber.idris@gmail.com" ,grade:"metre de conf A" ,numéro_telephone:"073232654" },
    { id: 6, name: 'Amina  Bouzid ',email:"amina.bouzid@gmail.com" ,grade:"Enseignat chercheur" ,numéro_telephone:"0662232654"  },

  ];

  const modules = [
    { id: 101, name: '' },
    { id: 102, name: 'Module 1' },
    { id: 103, name: 'Module 2' },
    // Add more modules as needed
  ];
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedGroups, setSelectedGroups] = useState([]);

  return (
    <div className="App">
      <h1> Module Assignment</h1>
      <div className=' flex flex-row gap-5   text-md p-3 rounded-lg border border-gray-400  my-5  mx-20 '>
      <TeacherList teachers={teachers} onSelectTeacher={setSelectedTeacher} />
     
    
          <ModuleAssignment onSelectModule={setSelectedModule} />
          
            <GroupSelection
              selectedTeacher={selectedTeacher}
              selectedModule={selectedModule}
              onSelectGroups={setSelectedGroups}
            />
          </div>
       
      
      {selectedGroups.length > 0 && (
        <div>
          <h2>Assignment Result:</h2>
          <p>Teacher: {selectedTeacher.name}</p>
          <p>Module: {selectedModule}</p>
          <p>Groups: {selectedGroups.join(', ')}</p> 
        </div>
      )}
    </div>
  );
}
export default Management ;
/**<h2>Assignment Result:</h2>
          <p>Teacher: {selectedTeacher.name}</p>
          <p>Module: {selectedModule}</p>
          <p>Groups: {selectedGroups.join(', ')}</p> */
