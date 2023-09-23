import React, { useState } from 'react';
import NavBarHome from '../Components/NavBarHome';
import axios from 'axios';
import {FaCloudUploadAlt, FaSearch, FaFilePdf, FaFileImage, FaFilePowerpoint, FaFileExcel, FaFileVideo } from 'react-icons/fa';
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {AiFillFileAdd} from 'react-icons/ai'
import Popup from '../Components/Popup';

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



function Ressources() {
  const modulesOptions = ['Algo','Res1','BDD','CPRJ','PROJ','Res2','ARCH','ANAL'];
  const promoOptions = ['L1', 'L2', 'L3'];
  const groupeOptions = ['G1', 'G2', 'G3'];
  const spécialitéOptions = ['Informatique', 'Management'];

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };



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
  
  const [radio , setRadio] = useState(''); 
  const [file, setFile] = useState(null);
  const [groupe, setGroupe] = useState('');
  const [promo, setPromo] = useState('');
  const [module, setModule] = useState('');
  const [specialité , setSpecialité] = useState('')
  const storedData = JSON.parse(localStorage.getItem('user'));

  const user = storedData;
  console.log(user);

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
    event.preventDefault();

    const Enseignant = JSON.parse(localStorage.getItem('Enseignant'));
    const datacours = {
      file: file,
      groupe: groupe,
      module: module,
      type: 'TD',
      Id: Enseignant.Id,
      Promotion: promo,
    };

    try {
      const res = await axios.post('http://192.168.196.77:8080/api/Enseignant/deposercours', datacours, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res.data);
    } catch (error) {
      console.log('error');
    }
  };
  const [fichier, setFichier] = useState(filesData);

  const handleDelete = (id, fileName) => {
    const confirmation = window.confirm(`Vous etes sur que vous pouvez supprimer ce fichier ? : ${fileName}?`);
    if (confirmation) {
      const updatedFiles = fichier.filter((file) => file.id !== id);
      setFichier(updatedFiles);
    }
  };
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Perform search or filtering based on the query here
  };

  return (
    <div>
      <NavBarHome />
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
      <div className='flex justify-end p-5'>
      <button onClick={openPopup} className='text-blue flex flex-row gap-2 items-center font-semibold '>
        Ajouter fichier <AiFillFileAdd className=' text-xl'/>
      </button>
      </div>

      {isPopupOpen && (
        <Popup onClose={closePopup} />
      )}
      <div className='flex flex-wrap gap-10 p-10'>
        
        {fichier.map((file, index) => {
          const fileExtension = file.name.split('.').pop().toLowerCase();
          const fileIcon = getFileIcon(fileExtension);
          const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, ''); // Remove file extension

          return (
            <div key={file.id}>
              <img src={fileIcon} alt={fileExtension} className="h-20 w-20" />
              <div className='flex flex-row justify-center items-center'>
             <p className='text-base text-gray-600 text-center'> {fileNameWithoutExtension} </p>
              <button onClick={() => handleDelete(file.id, file.name)} className="delete-button">
                <span role="img" aria-label="Delete"><RiDeleteBin6Fill className='text-lg text-red-700 ml-2'/></span>
              </button>
            </div>
            </div>
          );
        })}
       
      </div>



    
    </div>
  );
}

export default Ressources;
