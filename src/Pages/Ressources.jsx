import React, { useState } from 'react';
import NavBarHome from '../Components/NavBarHome';
import axios from 'axios';
import {FaCloudUploadAlt, FaFilePdf, FaFileImage, FaFilePowerpoint, FaFileExcel, FaFileVideo } from 'react-icons/fa';
import {RiDeleteBin6Fill} from 'react-icons/ri'



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



  const filesData = [
    { id: 1, name: 'document.pdf' },
    { id: 2, name: 'image.pdf' },
    { id: 3, name: 'presentation.doc' },
    { id: 4, name: 'spreadsheet.xls' },
    { id: 5, name: 'video.doc' },
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
    const confirmation = window.confirm(`Are you sure you want to delete ${fileName}?`);
    if (confirmation) {
      const updatedFiles = fichier.filter((file) => file.id !== id);
      setFichier(updatedFiles);
    }
  };

  return (
    <div>
      <NavBarHome />
      <div className='flex flex-row gap-10 '>
      
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



      <form className="p-10  flex flex-col justify-center items-center" onSubmit={handleSubmit}>
      
      
        <div className='w-full flex flex-row justify-between py-5 px-52'>
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
                <span className="text-gray-300">Clicquer pour séléctionner un fichier <FaCloudUploadAlt className=' text-center h-40 w-40 '/></span>
              )}
            </div>
          </div>
        </div>
        
        <button type="submit" className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-600">Confirmer</button>
      </form>
    </div>
  );
}

export default Ressources;
