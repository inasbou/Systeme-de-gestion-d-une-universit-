// ModuleAssignment.js
import React, { useState } from 'react';

function ModuleAssignment({ onSelectModule }) {
  const modules = ['Module 1', 'Module 2', 'Module 3']; // Add your modules here
  const [selectedModule, setSelectedModule] = useState('');

  return (
    <div >
      <h2 className=' text-center  text-blue font-medium text-lg'>Liste des modules :</h2>
      <div className=' flex flex-row justify-center gap-6'>
      <select onChange={(e) => setSelectedModule(e.target.value)} value={selectedModule}  className=" w-96 py-2   rounded-lg border-2 border-gray-400">
        <option value="">choisir un  module</option>
        {modules.map((module) => (
          <option key={module} value={module} className="bg-white p-2 border border-gray-300">
            {module}
          </option>
        ))}
      </select>
      {selectedModule && <button onClick={() => onSelectModule(selectedModule)} className=" bg-blue p-2 rounded-md text-white">Assigner Module</button>}
    </div></div>
  );
}

export default ModuleAssignment;
