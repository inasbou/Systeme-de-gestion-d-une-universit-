// src/components/Communication.js
import React from 'react';
import NavBarHome from '../Components/NavBarHome';
import { useFormik } from 'formik';

function Communication() {
  const formik = useFormik({
    initialValues: {
      recipients: [],
      etudiantOptions: {
        spécialité: 'tousspecialité',
        promo: 'touspromo',
        groupe: 'tousgroupe',
      },
      subject: '',
      message: '',
    },
    onSubmit: (values) => {
      // Handle sending the announcement based on form values
      console.log(values);
    },
  });

  const recipientOptions = [
    { label: 'Tous le monde', value: 'tous' },
    { label: 'Profs', value: 'prof' },
    { label: 'Etudiants', value: 'etudiant' },
    { label: 'Parents', value: 'parent' },
  ];

  const renderEtudiantOptions = () => {
    const { spécialité, promo, groupe } = formik.values.etudiantOptions;

    return (
      <div className=' flex flex-col justify-start'>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="spécialité">
            Spécialité
          </label>
          <select
            id="spécialité"
            name="etudiantOptions.spécialité"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={spécialité}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="tousspecialité">Tous les spécialités</option>
            <option value="informatique">Informatique</option>
            <option value="management">Management</option>
           
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="promo">
            Promo
          </label>
          <select
            id="promo"
            name="etudiantOptions.promo"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={promo}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="touspromo">Tous les promos</option>
            <option value="L1">L1</option>
            <option value="L2">L2</option>
            <option value="L3">L3</option>

          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="groupe">
            Groupe
          </label>
          <select
            id="groupe"
            name="etudiantOptions.groupe"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={groupe}
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="tousgroupe">Tous les groupes</option>
            <option value="G1">G1</option>
            <option value="G2">G2</option>
            <option value="G3">G3</option>
          </select>
        </div>
      </div>
    );
  };

  const handleRecipientChange = (selectedRecipients) => {
    if (selectedRecipients.includes('all')) {
      selectedRecipients = ['all'];
    } else if (selectedRecipients.length > 2) {
      selectedRecipients.pop();
    }
    formik.setFieldValue('recipients', selectedRecipients);

    if (!selectedRecipients.includes('etudiant')) {
      formik.setFieldValue('etudiantOptions', {
        spécialité: '',
        promo: '',
        groupe: '',
      });
    }
  };

  return (
    <>
    <NavBarHome/>
    <div className='flex flex-col justify-center items-center'>
      
      <h2 className="block text-bluetext font-semibold text-center text-xl mt-5 ">Espace de Communication : </h2>
      <div className="w-2/3 mt-8 p-6 bg-white rounded-xl shadow-xl flex flex-col justify-center items-center">
        <form onSubmit={formik.handleSubmit} className="w-full mx-auto mt-8">
          <div className="mb-4 flex flex-row gap-4 align-center">
            <label className="block text-gray-400 text-md font-bold mb-2 mr-20" htmlFor="recipients">
            À : 
            </label>
            <div className="flex flex-wrap">
              {recipientOptions.map((option) => (
                <label key={option.value} className="inline-block mr-4">
                  <input
                    type="checkbox"
                    name="recipients"
                    value={option.value}
                    onChange={(e) => {
                      const selectedRecipients = Array.from(
                        formik.values.recipients
                      );

                      if (e.target.checked) {
                        selectedRecipients.push(option.value);
                      } else {
                        const index = selectedRecipients.indexOf(option.value);
                        if (index > -1) {
                          selectedRecipients.splice(index, 1);
                        }
                      }

                      handleRecipientChange(selectedRecipients);
                    }}
                    checked={formik.values.recipients.includes(option.value)}
                    className="mr-2 text-blue" // Change text color to blue
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </div>

          {formik.values.recipients.includes('etudiant') && renderEtudiantOptions()}

          <div className="mb-4 flex flex-row gap-4 align-center">
            <label className="block text-gray-400 text-md font-bold mb-2 mr-12" htmlFor="subject">
              Sujet :
            </label>
            <input
              type="text"
              id="subject"
              name="subject" placeholder='Sujet ...'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.subject}
              className="appearance-none w-4/5 bg-white border border-gray-300  px-4 py-2 rounded shadow  focus:outline-none "
            />
          </div>

          <div className="mb-6 flex flex-row gap-4 align-center">
            <label className="block text-gray-400 text-md font-bold mb-2 mr-5" htmlFor="message">
              Message : 
            </label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className="appearance-none w-4/5 bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:ring focus:border-blue-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Announcement
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Communication;
