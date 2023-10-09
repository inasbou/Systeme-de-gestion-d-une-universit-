import { React,  useState, useEffect, useRef   } from "react";
import { CgLogOut } from "react-icons/cg"; 
import { FaBell } from 'react-icons/fa'; 
import Notification from "./Notification";

const NavBarHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };


  useEffect(() => {
    const handleWindowClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      window.addEventListener('click', handleWindowClick);
    } else {
      window.removeEventListener('click', handleWindowClick);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [isMenuOpen]);



  const [isOpen, setIsOpen] = useState(false);
  const storedData = JSON.parse(localStorage.getItem('role'));
  console.log()
  const role = 'hgh'; 
  return (
    <div className=''>
      <img
          className=" md:h-20 fixed mt-1 ml-1  "
          src="/LOGO.png"
          alt="logo"
        />
     
      <div className="flex flex-row justify-center items-center gap-8 p-5">
      
        <div className="hidden md:inline-flex flex-row items-center bg-bluenav rounded-3xl py-1 px-5  ">
          

          {role === "Etudiant" ? (
            <div className=" flex gap-x-16">
              <a className="font-medium text-black text-md cursor-pointer " href='/marks'>
                Mes Notes
              </a>
              <a className="font-medium text-black text-md cursor-pointer " href='/ressources'>
               Mes Ressources
              </a>
              <Notification className='w-8 h-8'/>
            </div>
          ) : role === "Enseignant" ? (
            <div className=" flex gap-x-16">
              <a className="font-medium text-black text-md cursor-pointer" href="/ressources">
                Ressources
              </a>
              <a className="font-medium text-black text-md cursor-pointer" href="/notes">
                Notes
              </a>
              <a className="font-medium text-black text-md cursor-pointer" href="/emploi">
                Emploi
              </a>
            </div>
          ) : (
            (role === "Parent" ? (
                <div className=" flex gap-x-16">
                <a className="font-medium text-black text-md" href="#plans">
                  Student tracking
                </a>
                <a className="font-medium text-black text-md" href="#support">
                  chat room
                </a>
                <Notification/>
              </div>
            ) : (
                <div className=" flex gap-6">
                <a className=" text-black text-md" href="/inscription">
                  Registration
                </a>
                <a className=" text-black text-md" href="#support">
                  Organisation
                </a>
                <a className=" text-black text-md" href="#support">
                  Time Table
                </a>
                <a className=" text-black text-md" href="/communication">
                  Communication
                </a>{" "}
              </div>
            ))
          )}

        <img src="/user.png" class='h-8 w-8 rounded-full ml-8' alt='user' onClick={toggleMenu}/>
        {isMenuOpen && (
              <ul className="absolute mt-52 right-96 w-40 bg-bluenav border rounded-xl shadow-lg z-10">
                <li className="hover:bg-blue hover:text-white px-4 py-2 cursor-pointer">
                  Parametre
                </li>
                <li className="hover:bg-blue hover:text-white px-4 py-2 cursor-pointer">
                  Modifier profile
                </li>
                <li className="hover:bg-blue hover:text-white px-4 py-2 cursor-pointer">
                  Aide
                </li>
                <li className="hover:bg-blue hover:text-white px-4 py-2 cursor-pointer">
                  Deconnecter
                </li>
              </ul>
            )}
        
      
        </div>

        {isOpen ? (
          <div className="w-full h-screen bg-blue-400/50 fixed z-50 top-0 bottom-0 right-0 left-0 backdrop-blur-[2px] inline-flex flex-col items-end transition-all">
            <img
              src="/icons/close_menu.svg"
              alt=""
              className="h-[32px] w-[32px] m-4"
              onClick={() => setIsOpen(false)}
            />
            <div className="w-full inline-flex flex-col items-center gap-y-16">
              <img
                src="/icons/LOGO.png"
                alt=""
                className="w-1/2 my-3"
              />
              {role==="student" ? (
              <div className="flex flex-col gap-y-16">
              <a
                aria-current="page"
                href="/"
                className="router-link-active router-link-exact-active font-semibold text-white text-xl"
              >
                Home
              </a>
              <a className="font-semibold text-white text-xl" >
                Ressources
              </a>

              <a className="font-semibold text-white text-xl" >
               Notes
              </a></div>):role=="prof" ?(
              <div className="flex flex-col gap-y-16">
              <a
                aria-current="page"
                href="/"
                className="router-link-active router-link-exact-active font-semibold text-white text-xl"
              >
               Home
              </a>
              <a className="font-semibold text-white text-xl" >
               Ressources
              </a>

              <a className="font-semibold text-white text-xl" >
                Emploi 
              </a></div> ):role=="parent" ?(
              <div className="flex flex-col gap-y-16">
              <a
                aria-current="page"
                href="/"
                className="router-link-active router-link-exact-active font-semibold text-white text-xl"
              >
                Home
              </a>
              <a className="font-semibold text-white text-xl" >
                Student tracking
              </a>

              <a className="font-semibold text-white text-xl" >
                Chat room
              </a></div>):(
              <div className="flex flex-col gap-y-16">
              <a
                aria-current="page"
                href="/inscription"
                className="router-link-active router-link-exact-active font-semibold text-white text-xl"
              >
               Inscriptions
              </a>
              <a className="font-semibold text-white text-xl" >
               Organisation
              </a>

              <a className="font-semibold text-white text-xl" >
              Time Table
              </a><a className="font-semibold text-white text-xl" >
              Communication
              </a></div>)}
            </div>
          </div>
        ) : (
          <img
            className="md:hidden h-5"
            src="/icons/menu.svg"
            onClick={() => setIsOpen(true)}
          />
        )}
        <img
          className=" md:h-20 fixed mt-1 right-0.5 "
          src="/logoo.png"
          alt="logoo"
        />
      </div>
      
    </div>
  );
};

export default NavBarHome;