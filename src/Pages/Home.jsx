import React from 'react'
import NavBarHome from '../Components/NavBarHome'

const Home = () => {
  return (
    <>
    <NavBarHome/>
    <div className=" w-5/6 flex pl-20 flex-row py-10">
          <div
            className=" flex flex-col gap-5  bg-cover bg-center py-10 px-5 ">
            <h1 className=" text-3xl font-semibold text-bluetext ">
             
              Bienvenue dans le système de gestion scolaire, Ecole IBNROCHD
            </h1>
            <p className=" text-lg font-medium">
              L'Apprentissage Facilité pour Tous : Professeurs, Étudiants,
              Parents et Administrateurs
            </p>
          </div>
          <div>
            <img src="/icons/student.png" alt='student' className="hidden md:flex h-fit  " />
          </div>
         
        </div>
    </>
  )
}

export default Home