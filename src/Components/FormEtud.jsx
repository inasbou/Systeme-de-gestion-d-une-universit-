import React from 'react'
import { useFormik } from 'formik';
import { Link , useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from 'yup';


function FormEtud() {
    const spécialitéOptions = ['Informatique', 'Management'];
    const promoOptions = ['L1', 'L2', 'L3'];
    const groupeOptions = ['G1', 'G2', 'G3'];


    const formik = useFormik({
        initialValues: {
          email: '',
          Nom: '',
          Prénom: '',
          AnnéeScolarité: '',
          Spécialité: '',
          Promo: '',
          Groupe: '',
          Numéro_inscription: '',
          Numéro_telephone: '',
          DateDeNaissance: '',
        },

        
        onSubmit: async (values) => {
          try{

            const res = await axios.post('http://192.168.196.77:8080/api/Etudiant/ajouteretudiant',values ) ; 
            alert(res.data.message);
            
      
            
            
      
          } catch(error) 
          {console.log('error')}
          
          
          /*try {
            const response = await fetch('http://192.168.196.77:8080/api/Etudiant/ajouteretudiant', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values), // Send form data as JSON
            });
      
            
      
            const responseData = await response.json();
            alert(response.data.message);
            console.log(responseData); // Handle the response from the server
          } catch (error) {
            console.error('There was a problem with the request:', error);
          }*/
        },
      });
     
    
  return (
    <div className='flex justify-center items-center '>
       <form onSubmit={formik.handleSubmit} className=" w-2/3 mt-8 p-6 bg-white rounded shadow-lg flex flex-col justify-center items-center ">
        <h2 className="block text-bluetext font-semibold mb-4 text-center text-lg ">Inscription d'étudiant : </h2>
      <div className="mb-4 w-full">
        <label htmlFor="Civilié" className="block text-gray-700 font-semibold mb-2">Civilité:</label>
        <div className='flex flex-row justify-between gap-5 mb-2'>
        <input
          type="text"
          id="Nom"
          name="Nom"
          placeholder='Nom...'
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={formik.handleChange}
          value={formik.values.Nom}
        />
         <input
          type="text"
          id="Prénom"
          name="Prénom"
          placeholder='Prénom...'
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={formik.handleChange}
          value={formik.values.Prénom}
        />
        </div>
         <input
          type="date"
          id="DateDeNaissance"
          name="DateDeNaissance"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={formik.handleChange}
          value={formik.values.DateDeNaissance}
        />
        


      </div>


      <div className="mb-4 w-full">
        <label htmlFor="Coordonées" className="block text-gray-700 font-semibold mb-2">Coordonées:</label>
        <div className='flex flex-row justify-between gap-5 mb-2'>
        <input
          type="email"
          id="email"
          name="email"
          placeholder='Email...'
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
         <input
          type="text"
          id="Numéro_telephone"
          name="Numéro_telephone"
          placeholder='Numéro de téléphone...'
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={formik.handleChange}
          value={formik.values.Numéro_telephone}
        />
        </div>
      </div>


      

      <div className="mb-4 w-full">
        <label htmlFor="Scolarité" className="block text-gray-700 font-semibold mb-2">Scolarité:</label>
        <div className='flex flex-row justify-between gap-5 mb-2'>
        
        <select
          id="Spécialité"
          name="Spécialité"
          className="block  w-full bg-white border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring "
          onChange={formik.handleChange}
          value={formik.values.Spécialité}
        >
          <option value="">Spécialité...</option>
          {spécialitéOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>



        <input
          type="text"
          id="Numéro_inscription"
          name="Numéro_inscription"
          placeholder='Matricule...'
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={formik.handleChange}
          value={formik.values.Numéro_inscription}
        />
        </div> 
       </div> 



       <div className='flex flex-row justify-between gap-5 mb-2 w-full'>
     

        <input
          type="text"
          id="AnnéeScolarité"
          name="AnnéeScolarité"
          placeholder='Année Scolarité...'
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={formik.handleChange}
          value={formik.values.AnnéeScolarité}
        />
      



      

      
        <select
          id="Promo"
          name="Promo"
          className="block w-full bg-white border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring "
          onChange={formik.handleChange}
          value={formik.values.Promo}
        >
          <option value="">Promo...</option>
          {promoOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      
   </div>
      

   
       
        <select
          id="Groupe"
          name="Groupe"
          className="block  w-full bg-white border px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring "
          onChange={formik.handleChange}
          value={formik.values.Groupe}
        >
          <option value="">Groupe...</option>
          {groupeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      

      
       
     



      


  

    


       <button
        type="submit"
        className="bg-blue  text-white font-semibold py-2 px-4 rounded-lg w-1/3 mt-4 origin-center"
      >
        Submit
      </button>
    </form>


      
    </div>
  )
}

export default FormEtud
