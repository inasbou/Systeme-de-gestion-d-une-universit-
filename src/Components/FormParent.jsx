import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'; 

function FormParent() {
 
    

    const formik = useFormik({
        initialValues: {
          email: '',
          Nom: '',
          Prénom: '',
          Numéro_telephone: '',
          DateDeNaissance: '',
        },

        
        onSubmit: (values) => {
          console.log(values); // You can handle form submission here
        },
      });
    
  return (
    <div className='flex justify-center items-center '>
       <form onSubmit={formik.handleSubmit} className=" w-2/3 mt-8 p-6 bg-white rounded shadow-lg flex flex-col justify-center items-center ">
        <h2 className="block text-bluetext font-semibold mb-4 text-center text-lg ">Inscription d'un parent : </h2>
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


      

      



       
       
     
      <label htmlFor="Coordonées" className="block text-gray-700 font-semibold mb-2">Informations étudiant :</label>
        <input
          type="text"
          id="etudiant"
          name="etudiant"
          placeholder='Matricule étudiant ...'
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={formik.handleChange}
          value={formik.values.AnnéeScolarité}
        />
      
      


      

      
        
      
       
     



      


  

    


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




export default FormParent
