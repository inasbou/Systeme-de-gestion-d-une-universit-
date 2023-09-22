import React from "react";
import LoginC from "../Components/LoginC";
import Navbar from "../Components/Navbar";

const Login = () => {
  return (
    <div className=" flex flex-col gap-5 ">
      <Navbar/>
      <div className=" flex md:flex-row  flex-col px-10 py-10">
        <div className="w-2/3 flex flex-row">
          <div
            className=" flex flex-col gap-5  bg-cover bg-center py-10 px-5 ">
            <h1 className=" text-3xl font-semibold text-bluetext ">
             
              Votre Portail Vers la Réussite Scolaire et Professionnelle
            </h1>
            <p className=" text-lg font-medium">
              L'Apprentissage Facilité pour Tous : Professeurs, Étudiants,
              Parents et Administrateurs
            </p>
          </div>
          <div>
            <img src="/icons/student.png" alt='student' className="hidden md:flex h-fit  " />
          </div>
          <img src="/icons/background.png" alt='bg' className="absolute bottom-0 h-screen  "/>
        </div>
        <LoginC />
      </div>
    </div>
  );
};

export default Login;
