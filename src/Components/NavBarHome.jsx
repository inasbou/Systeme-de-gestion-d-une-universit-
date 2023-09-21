import { React, useState } from "react";

const NavBarHome = () => {
  const [isOpen, setIsOpen] = useState(false);
  const role = "prof";
  return (
    <div>
      <div className="w-full h-fit md:h-[100px] inline-flex flex-row transition-all items-center justify-between md:justify-evenly px-6 md:px-0 py-5 md:py-2 fixed top-0 z-40 bg-white">
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
            Home
          </a>
          {role == "student" ? (
            <div className=" flex gap-x-16">
              <a className="router-link-active router-link-exact-active  font-medium text-black text-md ">
                Notes
              </a>
              <a className="router-link-active router-link-exact-active  font-medium text-black text-md ">
                Ressources
              </a>{" "}
            </div>
          ) : role == "prof" ? (
            <div className=" flex gap-x-16">
              <a className="font-medium text-black text-md" href="#plans">
                Ressources
              </a>
              <a className="font-medium text-black text-md" href="#support">
                Groupes
              </a>{" "}
              <a className="font-medium text-black text-md" href="#support">
                Emploi
              </a>
            </div>
          ) : (
            (role = "parent" ? (
                <div className=" flex gap-x-16">
                <a className="font-medium text-black text-md" href="#plans">
                  Student tracking
                </a>
                <a className="font-medium text-black text-md" href="#support">
                  chat room
                </a>{" "}
              </div>
            ) : (
                <div className=" flex gap-x-16">
                <a className="font-medium text-black text-md" href="#plans">
                  Registration
                </a>
                <a className="font-medium text-black text-md" href="#support">
                  Organisation
                </a>
                <a className="font-medium text-black text-md" href="#support">
                  Time Table
                </a>
                <a className="font-medium text-black text-md" href="#support">
                  Communication
                </a>{" "}
              </div>
            ))
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
              {role=="student" ? (
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
                href="/"
                className="router-link-active router-link-exact-active font-semibold text-white text-xl"
              >
               Registration
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
      </div>
    </div>
  );
};

export default NavBarHome;
