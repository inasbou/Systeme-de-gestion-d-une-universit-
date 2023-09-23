import React , {useState} from 'react'
import {FaCloudUploadAlt } from 'react-icons/fa';

const Popup = ({ isOpen, onClose }) => {
    const [radio , setRadio] = useState(''); 
  const [file, setFile] = useState(null);
  const [groupe, setGroupe] = useState('');
  const [promo, setPromo] = useState('');
  const [module, setModule] = useState('');
  const [specialité , setSpecialité] = useState('')
  const modulesOptions = ['Algo','Res1','BDD','CPRJ','PROJ','Res2','ARCH','ANAL'];
  const promoOptions = ['L1', 'L2', 'L3'];
  const groupeOptions = ['G1', 'G2', 'G3'];
  const spécialitéOptions = ['Informatique', 'Management'];
  const storedData = JSON.parse(localStorage.getItem('user'));
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
      };
      
      const handleSpecChange=(event) => {
        setSpecialité(event.target.value);
      }
      const handleGroupeChange = (event) => {
        setGroupe(event.target.value);
      };
    
      const handlePromoChange = (event) => {
        setPromo(event.target.value);
      };
    
      const handleModuleChange = (event) => {
        setModule(event.target.value);
      };
     const handleRadioChange = ( event) => {
      setRadio(event.target.value);
     }
      const handleSubmit = async (event) => {
        event.preventDefault();} 
  return (
    <div className='rounded-lg shadow-lg w-2/3 ml-44'>
        <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg"
            >
              X
            </button>
        <form className="p-5  flex flex-col justify-center items-center" onSubmit={handleSubmit}>
      
      
      <div className='w-full flex flex-row justify-between mb-5 '>
      <select
        id="Spécialité"
        name="Spécialité"
        className="block bg-white border px-4 py-2 rounded-xl shadow leading-tight focus:outline-none focus:ring "
        value={specialité} onChange={handleSpecChange}
      >
        <option value="">Spécialité...</option>
        {spécialitéOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        id="module"
        name="module"
        className="block  bg-white border px-4 py-2  rounded-xl shadow leading-tight focus:outline-none focus:ring "
        value={module} onChange={handleModuleChange}
      >
        <option value="">Modules ... </option>
        {modulesOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

    
      <select
        id="Promo"
        name="Promo"
        className="block  bg-white border px-4 py-2 rounded-xl shadow leading-tight focus:outline-none focus:ring "
        value={promo} onChange={handlePromoChange}
      >
        <option value="">Promo...</option>
        {promoOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        id="Groupe"
        name="Groupe"
        className="block  bg-white border px-4 py-2  rounded-xl shadow leading-tight focus:outline-none focus:ring "
        value={groupe} onChange={handleGroupeChange}
      >
        <option value="">Groupe...</option>
        {groupeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

     <div className='flex flex-row gap-5 ml-5 items-center '> 
        <label>
      <input
        type="radio"
        name="options"
        value="TD"
        checked={radio === 'TD'}
        onChange={handleRadioChange}
      />
      TD
    </label>
    <label>
      <input
        type="radio"
        name="options"
        value="Cours"
        checked={radio === 'Cours'}
        onChange={handleRadioChange}
      />
      Cours
    </label></div>
    </div>


      <div className="w-full mb-4  flex flex-col justify-center items-center ">
        
        <div className="relative w-1/2 h-44 border-dashed border-2 border-gray-300 rounded-2xl flex flex-col justify-center items-center">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf"
            className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="text-center ">
            {file ? (
              <span className="text-green-500">File selected: {file.name}</span>
            ) : (
              <span className="text-gray-300">Cliquer pour séléctionner un fichier <FaCloudUploadAlt className=' text-center h-40 w-40 '/></span>
            )}
          </div>
        </div>
      </div>
      
      <button type="submit" className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-600">Confirmer</button>
    </form>
    </div>
  )
}

export default Popup
