import React, { useState } from 'react';

function TeacherSelection( { teachers, onSelectTeacher  }) {
  const [selectedTeacher, setSelectedTeacher] = useState(['']);

  return (
    <div>
      <h2 className=' text-center  text-blue font-medium text-lg'>Liste des profs:</h2>
          
         
      <select onChange={(e) => onSelectTeacher(e.target.value)} value={selectedTeacher.name}  className=" w-96 py-2   rounded-lg border-2 border-gray-400">
        <option value="">choisir un proffesseur </option>
        {teachers.map((teacher) => (
          <option key={teacher.id} value={teacher.name} className="bg-white py-2 px-20 border  border-gray-300">
            {teacher.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TeacherSelection;

