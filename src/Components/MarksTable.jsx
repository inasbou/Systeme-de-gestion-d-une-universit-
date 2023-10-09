import React from 'react';

const MarksTable = ({ marks }) => {
  const calculAvg =(par)=>{
     let avg=0;
     avg=par / marks.length ;
     return avg;
    }
    const calculateGlobalMarks = () => {
        let globalModuleMarks = {};
        let globalTableMarks = {
          coef: 0,
          Interrogation: 0,
          examen: 0,
          controle_continu: 0,
          nb_abssences: 0,
        };
        marks.forEach((subject) => {
            // Calculate the total marks for each module
            if (globalModuleMarks[subject.name]) {
              globalModuleMarks[subject.name].coef += subject.coef;
              globalModuleMarks[subject.name].Interrogation += subject.Interrogation;
              globalModuleMarks[subject.name].examen += subject.examen;
              globalModuleMarks[subject.name].controle_continu += subject.controle_continu;
              globalModuleMarks[subject.name].nb_abssences += subject.nb_abssences;
            } else {
              globalModuleMarks[subject.name] = { ...subject };
            }
      
            // Calculate the total marks for the complete table
            globalTableMarks.coef += subject.coef;
            globalTableMarks.Interrogation += subject.Interrogation  ; 
            globalTableMarks.examen += subject.examen;
            globalTableMarks.controle_continu += subject.controle_continu;
            globalTableMarks.nb_abssences += subject.nb_abssences;
          });
      
          return { globalModuleMarks, globalTableMarks };
        };
    
        const { globalModuleMarks, globalTableMarks } = calculateGlobalMarks();
  return (
    <div className="marks-table w-full max-w-screen-lg mx-auto py-6 px-24 bg-white  rounded-lg shadow-lg">
      
      <div className="flex flex-row justify-between   my-2 font-medium">
        <p>Group: L1_G2</p>
        <p className=' text-3xl '>Semestre: 01</p>
        <p>Année scholaire : 2023/2024</p>

      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-blue text-white">
              <th className="w-1/7 py-3 px-4">Label</th>
              <th className="w-1/6 py-3 px-4">Module</th>
              <th className="w-1/12 py-3 px-4">Coef</th>
              <th className="w-1/12 py-3 px-4">Interro</th>
              <th className="w-1/12 py-3 px-4">Examen</th>
              <th className="w-1/12 py-3 px-4">Controle continu</th>
              <th className="w-1/6 py-3 px-4">Remarque</th>
              <th className="w-1/13 py-3 px-4">Nb abssences</th>
            </tr>
          </thead>
          <tbody>
            {marks.map((subject, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
              >
                <td className="py-2 px-4">{subject.label}</td>
                <td className="py-2 px-4">{subject.name}</td>
                <td className="py-2 px-4">{subject.coef}</td>
                <td className="py-2 px-4">{subject.Interrogation}</td>
                <td className="py-2 px-4">{subject.examen}</td>
                <td className="py-2 px-4">{subject.controle_continu}</td>
                <td className="py-2 px-4">{subject.remarque}</td>
                <td className="py-2 px-4">{subject.nb_abssences}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row  gap-7 my-5 text-white font-medium">
        <p className=' flex  justify-center bg-blue px-3 py-1 rounded-lg'>Importer PNG</p>
      
        <p className=' flex  justify-center bg-blue px-3 py-1 rounded-lg'>Importer CSV</p>

      </div>
     
      {/* Display global table marks */}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Global Table Marks</h3>
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr className="bg-blue text-white">
              <th className="w-1/12 py-3 px-4">Coef</th>
              <th className="w-1/7 py-3 px-4">Moyenne génerale</th>
              <th className="w-1/6 py-3 px-4">Nb abssences</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4">{globalTableMarks.coef}</td>
              <td className="py-2 px-4">{calculAvg(globalTableMarks.Interrogation)}</td>
              
              <td className="py-2 px-4">{globalTableMarks.nb_abssences}</td>
            </tr>
          </tbody>
        </table>
     </div>

      </div>

    </div>
  );
};

export default MarksTable;  
