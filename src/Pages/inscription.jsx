import React , {useState} from 'react'
import FormProf from '../Components/FormProf'
import FormParent from '../Components/FormParent'
import FormEtud from '../Components/FormEtud'
import NavBarHome from '../Components/NavBarHome'


function Inscription() {
  
  const [activeButton, setActiveButton] = useState(1);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    

    <div>
        <NavBarHome/>
      <div className=" flex flex-row justify-between px-72 text-md ">
        <button className={`group focus:outline-none  px-10 text-bold  py-2 ${
            activeButton === 1
              ? ' border-b-2 border-blue text-blue'
              : 'bg-transparent text-black'
          }`} onClick={() => handleButtonClick(1)}>Etudiant</button>
        <button className={`group focus:outline-none px-10 text-bold  py-2 ${
            activeButton === 2
              ? ' border-b-2 border-blue text-blue'
              : 'bg-transparent text-black'
          }`} onClick={() => handleButtonClick(2)}>Professeur</button>
        <button className={`group focus:outline-none px-10 text-bold  py-2 ${
            activeButton === 3
              ? 'border-b-2 border-blue text-blue'
              : 'bg-transparent text-black'
          }`} onClick={() => handleButtonClick(3)}>Parent</button>
      </div>
      <div className="">
     
        {activeButton === 1 && 
            <div>
            
            <FormEtud/>
            </div>}
        {activeButton === 2 && 
            <div>
                <FormProf/>
            </div>}
        {activeButton === 3 && 
            <div>
                <FormParent/>
                </div>}
                
      </div>
    </div>
  )
}

export default Inscription
