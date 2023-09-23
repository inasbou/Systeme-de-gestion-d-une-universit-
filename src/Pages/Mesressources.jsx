import React , {useState} from 'react'
import NavBarHome from '../Components/NavBarHome';
import {FaCloudUploadAlt, FaSearch, FaFilePdf, FaFileImage, FaFilePowerpoint, FaFileExcel, FaFileVideo } from 'react-icons/fa';

function Mesressources() {
    const getFileIcon = (fileExtension) => {
        switch (fileExtension) {
          case 'pdf':
            return '/pdf.png';
          case 'doc':
            return '/doc.png';
          case 'xls':
            return '/xls.png';
          case 'mp4':
            return '/icons/video.png';
          default:
            return '/icons/default.png'; // You can provide a default icon
        }
      
      };
      const modulesOptions = ['Algo','Res1','BDD','CPRJ','PROJ','Res2','ARCH','ANAL'];
      const promoOptions = ['L1', 'L2', 'L3'];
      const groupeOptions = ['G1', 'G2', 'G3'];
      const spécialitéOptions = ['Informatique', 'Management'];
    
    
    
      const filesData = [
        { id: 1, name: 'Cours1.pdf' },
        { id: 2, name: 'TD5.pdf' },
        { id: 3, name: 'Cours.doc' },
        { id: 4, name: 'Planning.xls' },
        { id: 5, name: 'ARCHI1.doc' },
        { id: 1, name: 'SujetExamen.pdf' },
        { id: 2, name: 'ALGO.pdf' },
        { id: 3, name: 'TD01.doc' },
        { id: 4, name: 'Notes.xls' },
        { id: 5, name: 'Compterendu.doc' },
      ];      

      const [searchQuery, setSearchQuery] = useState('');

      const handleSearch = (query) => {
        setSearchQuery(query);
        // Perform search or filtering based on the query here
      };
      const [radio , setRadio] = useState(''); 
  const [file, setFile] = useState(null);
  const [groupe, setGroupe] = useState('');
  const [promo, setPromo] = useState('');
  const [module, setModule] = useState('');
  const [specialité , setSpecialité] = useState('')
  const storedData = JSON.parse(localStorage.getItem('user'));

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
  return (
    <>
      <NavBarHome/>
      <div className='w-full flex flex-row justify-between py-5 px-32'>
      <div className="flex items-center flex-row gap-2 bg-white border px-4 py-2 pr-8 rounded-xl shadow">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder='Rechercher ressource ....'
        onChange={{handleSearch}} className='leading-tight focus:outline-none '
      />
    </div>
    
        <select
          id="Spécialité"
          name="Spécialité"
          className="block bg-white border px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring "
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
          className="block  bg-white border px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring "
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
          className="block  bg-white border px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring "
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
          className="block  bg-white border px-4 py-2 pr-8 rounded-xl shadow leading-tight focus:outline-none focus:ring "
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
      <div className='flex flex-wrap gap-10 px-32 py-10'>
        
        {filesData.map((file, index) => {
          const fileExtension = file.name.split('.').pop().toLowerCase();
          const fileIcon = getFileIcon(fileExtension);
          const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, ''); 
          return (
            <div key={file.id}>
              <img src={fileIcon} alt={fileExtension} className="h-20 w-20" />
              <div className='flex flex-row justify-center items-center'>
             <p className='text-base text-gray-600 text-center'> {fileNameWithoutExtension} </p>
              
            </div>
            </div>
          );
        })}
       
      </div>



    
   
    </>
  )
}

export default Mesressources
