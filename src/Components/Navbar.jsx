import React, { useState } from "react";
import Notification from "./Notification";

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
   
    <div className="flex flex-row justify-between px-10 ">
      <div>
        <img
          className="md:h-20 "
          src="/LOGO.png"
          alt="logo"
        />
      </div>
      <div className="hidden md:inline-flex flex-row items-center  gap-x-16 justify-center">
        <a
          aria-current="page"
          href="/"
          className="router-link-active router-link-exact-active  text-gray-500 text-md "
        >
          A propos
        </a>
        <a className="text-md  text-gray-500" href="#plans">
         Aide
        </a>
        
       
        <a className="  text-gray-500 text-md" href="#support">
          Contacts
        </a>
        
      </div>
      
     { isOpen ?  
      <div className="w-full h-screen bg-blue-400/50 fixed z-50 top-0 bottom-0 right-0 left-0 backdrop-blur-[2px] inline-flex flex-col items-end transition-all">
        <img
          src="/icons/close_menu.svg"
          alt=""
          className="h-[32px] w-[32px] m-4"
          onClick={ ()=>setIsOpen(false)}
          
        />
        <div className="w-full inline-flex flex-col items-center gap-y-16">
          <img
            src="/LOGO.png"
            alt=""
           
            
          />
          <a
            aria-current="page"
            href="/"
            className="router-link-active router-link-exact-active font-semibold text-white text-xl"
          >
           A props
          </a>
          <a className="font-semibold text-white text-xl" href="#plans">
            Aide
          </a>
         
          <a className="font-semibold text-white text-xl" href="#support">
            Contact
          </a>
          
        </div>
      </div> :  <img className="md:hidden h-5" src="/icons/menu.svg"  onClick={ ()=>setIsOpen(true)} alt='' />}
      
    </div>
            
           

  );
};

export default Navbar;