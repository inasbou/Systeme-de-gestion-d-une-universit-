import React , {useState}from 'react'
import NavBarHome from '../Components/NavBarHome'
import { FaSave, FaPencilAlt } from 'react-icons/fa'; // Import icons

function Notes() {
  const modulesOptions = [
    { id: 1, name: 'ARCHI1' },
    { id: 2, name: 'ANALYSE1' },
    { id: 3, name: 'ALGEBRE1' },
    { id: 13, name: 'ALGO1' },
    { id: 15, name: 'POO' },
    { id: 14, name: 'ARCHI2' },  
   
  ];
  
  const promoOptions = [
    { id: 1, name: 'L1' },
    { id: 2, name: 'L2' },
    { id: 3, name: 'L3' },
  ];
  
  const groupeOptions = [
    { id: 1, name: 'G1' },
    { id: 3, name: 'G2' },
    { id: 31, name: 'G3' },
  ];
  
  const spécialitéOptions = ['Informatique', 'Management'];
  const [groupe, setGroupe] = useState('');
  const [promo, setPromo] = useState('');
  const [module, setModule] = useState('');
  
  

    
      
      
      const handleGroupeChange = (event) => {
        setGroupe(event.target.value);
      };
    
      const handlePromoChange = (event) => {
        setPromo(event.target.value);
      };
    
      const handleModuleChange = (event) => {
        setModule(event.target.value);
      };
     
    const [students, setStudents] = useState([
      {
          "FirstName": "Meradji",
          "LastName": "chaima",
          "EtudiantId": 3,
          "emd1": 0,
          "emd2": 0,
          "CC": 0,
          "remarque": ""
      },
      {
          "FirstName": "Bouais",
          "LastName": "Ines",
          "EtudiantId": 4,
          "emd1": 0,
          "emd2": 0,
          "CC": 0,
          "remarque": ""
      }
  ]);
    

      const handleInputChange = (event, index, field) => {
        const updatedStudents = [...students];
        updatedStudents[index][field] = event.target.value;
        setStudents(updatedStudents);
      };
      const handleSubmit = async (event) => {
      event.preventDefault();

    
    }
  


    
  return (
    <>
    <NavBarHome/>
    <div className='flex flex-col gap-4 px-20 py-10 justify-center '>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue">Notes étudiants :</h2>
          <button type="button" className='text-blue'>
            <FaPencilAlt className='mr-1' />
            Modifier
          </button>
        </div>
    
    <form className='flex flex-col justify-center items-center '   onSubmit={handleSubmit}>
    <div className='w-full flex flex-row justify-between py-5 px-52'>
      <select
        id="module"
        name="module"
        className="block  bg-white border px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring "
        value={module} onChange={handleModuleChange}
      >
        <option value="">Modules ... </option>
        {modulesOptions.map((option) => (
          <option key={option} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

    
      <select
        id="Promo"
        name="Promo"
        className="block  bg-white border px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring "
        value={promo} onChange={handlePromoChange}
      >
        <option value="">Promo...</option>
        {promoOptions.map((option) => (
          <option key={option} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>

      <select
        id="Groupe"
        name="Groupe"
        className="block  bg-white border px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring "
        value={groupe} onChange={handleGroupeChange}
      >
        <option value="">Groupe...</option>
        {groupeOptions.map((option) => (
          <option key={option} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
      </div>
        <table >
          <thead >
            <tr className='border-gray-700 border-1 text-bluetext'>
              <th >Nom</th>
              <th>Prénom</th>
              <th>EMD 1</th>
              <th>EMD 2</th>
              <th>Note TD</th>
              <th>Remarques</th>
            </tr>
          </thead>
          <tbody className='border-gray-100 border-2'>
          {students.map((student, index) => (
              <tr key={index} className='border-gray-100 border-2 '>
                <td className='border-gray-100 border-2 w-80'>
                  <p className=' w-full p-2'>{student.FirstName}</p>
                </td>
                <td className='border-gray-100 border-2 w-80'>
                <p className=' w-full p-2 '>{student.LastName}</p>
                </td>
                <td className='border-gray-100 border-2 '>
                  <input
                    type="text"
                    value={student.emd1}
                    onChange={(e) => handleInputChange(e, index, 'emd1')} className=' w-20 h-12 p-2 outline-none focus:outline-none'
                  />
                </td>
                <td className='border-gray-100 border-2 '>
                  <input
                    type="text"
                    value={student.emd2}
                    onChange={(e) => handleInputChange(e, index, 'emd2')} className=' w-20 h-12  p-2 outline-none focus:outline-none'
                  />
                </td>
                <td className='border-gray-100 border-2 '>
                  <input
                    type="text"
                    value={student.CC}
                    onChange={(e) => handleInputChange(e, index, 'CC')} className=' w-20 h-12 p-2 outline-none focus:outline-none'
                  />
                  </td>
                <td className='border-gray-100 border-2 w-96'>
                  <input
                    type="text"
                    value={student.remarque}
                    onChange={(e) => handleInputChange(e, index, 'remarque')} className=' w-full p-2 outline-none focus:outline-none'
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4 items-end w-full">
            <button type="submit" className=' text-white text-semibold bg-blue py-2 px-8 text-semibold rounded mr-4'>
              Confirmer
            </button>
            <button type="button" className='flex flex-row gap-1 text-blue  text-semibold justify-center item bg-white'>
              <FaSave className=' ' />
              <p> Sauvegarder</p>
            </button>
          </div>
      </form>
      
    </div>
    <img src="/icons/background.png" alt='bg' className="absolute bottom-0 h-96  "/>
    </>
  )
}

export default Notes
