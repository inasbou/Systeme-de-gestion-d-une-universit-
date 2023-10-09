import React, { useState } from 'react';

function GroupSelection({ selectedTeacher, selectedModule, onSelectGroups }) {
  const groups = ['Group A', 'Group B', 'Group C']; // Add your groups here
  const [selectedGroups, setSelectedGroups] = useState([]);

  const handleGroupChange = (group) => {
    if (selectedGroups.includes(group)) {
      setSelectedGroups(selectedGroups.filter((g) => g !== group));
    } else {
      setSelectedGroups([...selectedGroups, group]);
    }
  };

  const handleAssignGroups = () => {
    // Call the onSelectGroups prop to assign selected groups to the module
    onSelectGroups(selectedGroups);
    // Clear the selectedGroups state if needed
    setSelectedGroups([]);
  };

  return (
    <div>
      <h2 className="text-center text-blue font-medium text-lg">
        Liste des groupes :
      </h2>
      <div className="flex flex-row justify-center gap-6">
        <select
          multiple // Allow multiple selections
          onChange={(e) => handleGroupChange(e.target.value)}
          value={selectedGroups}
          className="w-96 py-2 rounded-lg border-2 border-gray-400"
        >
          {groups.map((group) => (
            <option
              key={group}
              value={group}
              className="bg-white p-2 border border-gray-300"
            >
              {group}
            </option>
          ))}
        </select>
        {selectedGroups.length > 0 && (
          <div className="flex items-center">
            <button
              onClick={handleAssignGroups}
              className="bg-blue p-2 rounded-md h-fit text-white"
            >
              Assign Groups
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GroupSelection;

// GroupSelection.js
/*
import React, { useState } from 'react';

function GroupSelection({ selectedTeacher, selectedModule, onSelectGroups }) {
  const groups = ['Group A', 'Group B', 'Group C']; // Add your groups here
  const [selectedGroups, setSelectedGroups] = useState([]);

  const handleGroupChange = (group) => {
    if (selectedGroups.includes(group)) {
      setSelectedGroups(selectedGroups.filter((g) => g !== group  ));
    } else {
      setSelectedGroups([...selectedGroups, group]);
    }
  };

  return (
    <div> <h2 className=' text-center  text-blue font-medium text-lg'>Liste des groupes :</h2>
    <div className=' flex flex-row justify-center gap-6'>
    <select onChange={(e) => onSelectGroups(e.target.value)} value={selectedGroups}  className=" w-96 py-2   rounded-lg border-2 border-gray-400">
      <option value="">choisir un  module</option>
      {groups.map((group) => (
        <option key={group} value={group} className="bg-white p-2 border border-gray-300">
          {group}
        </option>
      ))}
    </select>
      {selectedGroups.length > 0 && (
     <div className='flex   items-center'>   <button onClick={() => onSelectGroups(selectedGroups)} className="  bg-blue p-2 rounded-md h-fit  text-white" >Assign Groups</button> </div>
      )}
    </div> </div>
  );
}

export default GroupSelection;
*/