import React , {useState}from 'react'
import NavBarHome from '../Components/NavBarHome'
import { FaSave, FaPencilAlt } from 'react-icons/fa'; // Import icons

function Notes() {
    const [students, setStudents] = useState([
      {
          "user": {
              "id": 4,
              "FirstName": "Meradji",
              "LastName": "chaima",
              "username": "Meradji chaima",
              "email": "kc_meradji@esi.dz",
              "password": "$2a$10$AEAoqBAH9BhdQ71EY0z87u6h1rD5EuTc265qykBkcmsFGBA32bD32",
              "role": "Etudiant",
              "emailToken": null,
              "sexe": null,
              "date_de_naissance": "2023-09-08",
              "Adresse": null,
              "resetToken": null,
              "phoneNumber": "0562232654",
              "profile_picture": null,
              "isVerified": false,
              "isActive": true,
              "createdAt": "2023-09-22T11:12:44.000Z",
              "updatedAt": "2023-09-22T11:12:44.000Z"
          },
          "student": {
              "Id": 3,
              "userId": 4,
              "GroupeId": 1,
              "registration_Number": "111111",
              "Promotion": "L1",
              "Specialite": null,
              "createdAt": "2023-09-22T11:12:45.000Z",
              "updatedAt": "2023-09-22T11:12:45.000Z"
          }
      },
      {
          "user": {
              "id": 7,
              "FirstName": "Bouais",
              "LastName": "Ines",
              "username": "Bouais Ines",
              "email": "ki_bouaiss@esi.dz",
              "password": "$2a$10$hNdFNMCxRhpZU6wIoU5u7eu3CUAMvomf0xcc5drS2y.H6USDaA7DG",
              "role": "Etudiant",
              "emailToken": null,
              "sexe": null,
              "date_de_naissance": "2003-09-12",
              "Adresse": null,
              "resetToken": null,
              "phoneNumber": "0545855965",
              "profile_picture": null,
              "isVerified": false,
              "isActive": true,
              "createdAt": "2023-09-22T16:16:48.000Z",
              "updatedAt": "2023-09-22T16:16:48.000Z"
          },
          "student": {
              "Id": 4,
              "userId": 7,
              "GroupeId": 1,
              "registration_Number": "15648",
              "Promotion": "L1",
              "Specialite": null,
              "createdAt": "2023-09-22T16:16:48.000Z",
              "updatedAt": "2023-09-22T16:16:48.000Z"
          }
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
                  <p className=' w-full p-2'>{student.user.FirstName}</p>
                </td>
                <td className='border-gray-100 border-2 w-80'>
                <p className=' w-full p-2 '>{student.user.LastName}</p>
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
    <img src="/icons/background.png" alt='bg' className="absolute bottom-0 h-screen  "/>
    </>
  )
}

export default Notes
