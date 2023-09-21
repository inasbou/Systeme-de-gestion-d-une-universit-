import React from "react";
import LoginC from "../Components/LoginC";
import Navbar from "../Components/Navbar";

const Login = () => {
  return (
    <div className=" flex flex-col gap-5 ">
      <Navbar />
      <div className=" flex md:flex-row  flex-col mt-80 mx-5 md:mx-36">
        <div className=" w-2/3 flex flex-row  ">
          <div
            className=" flex flex-col  gap-y-6 bg-cover bg-center "
           
          >
            <h1 className=" text-5xl font-semibold">
             
              Votre Portail Vers la Réussite Scolaire et Professionnelle
            </h1>
            <p className=" text-md font-medium">
              L'Apprentissage Facilité pour Tous : Professeurs, Étudiants,
              Parents et Administrateurs
            </p>
          </div>
          <div>
            <img src="/icons/student.png" className="hidden md:flex " />
          </div>
        </div>
        <LoginC />
      </div>
    </div>
  );
};

export default Login;
