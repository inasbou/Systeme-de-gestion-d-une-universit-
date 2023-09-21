import React, { useState } from "react";

const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  return (
   
    <div className="w-full h-fit md:h-[100px] inline-flex flex-row transition-all items-center md:mx-8 justify-between md:px-20  py-5 md:py-2 fixed top-0 z-40 bg-white">
      <div>
        <img
          className="mt-3 md:h-20 "
          src="/icons/LOGO.png"
          alt=" logo"
        />
      </div>
      <div className="hidden md:inline-flex flex-row items-center  gap-x-16">
        <a
          aria-current="page"
          href="/"
          className="router-link-active router-link-exact-active  font-medium text-black text-md "
        >
          A props
        </a>
        <a className="font-medium text-black text-md" href="#plans">
         Aide
        </a>
        
       
        <a className="font-medium text-black text-md" href="#support">
          Contact
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
            src="/icons/LOGO.png"
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
      </div> :  <img className="md:hidden h-5" src="/icons/menu.svg"  onClick={ ()=>setIsOpen(true)} />}
      
    </div>
            
           

  );
};

export default Navbar;