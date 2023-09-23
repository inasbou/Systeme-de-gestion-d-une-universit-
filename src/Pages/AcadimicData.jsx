import React from 'react';
import MarksTable from '../Components/MarksTable';
import NavBarHome from '../Components/NavBarHome';

function AcadimicData() {
  const studentMarks = [
    { label:"Ana 1",name: 'Ananlyse 1',coef:5,Interrogation:12 ,examen:0 ,controle_continu:0 ,remarque:"Aucune remarque our le moment" , nb_abssences: 1},
    { label:"Alg1",name: 'Algenbre 1',coef:3,Interrogation:13 ,examen:0 ,controle_continu:0 ,remarque:"Aucune remarque our le moment" , nb_abssences: 0},
    { label:"Bweb",name: 'Bureatique',coef:2,Interrogation:17 ,examen:0 ,controle_continu:0 ,remarque:"Aucune remarque our le moment" , nb_abssences: 2},
    { label:"Algo",name: 'Algoritmique' ,coef:5,Interrogation:14 ,examen:0 ,controle_continu:0 ,remarque:"Aucune remarque our le moment" , nb_abssences: 0},
    { label:"Sys",name: 'Systeme dexploitation' ,coef:3,Interrogation:15.5 ,examen:0 ,controle_continu:0 ,remarque:"Aucune remarque our le moment" , nb_abssences: 0},
    { label:"Archi",name: 'Architecture' ,coef:4,Interrogation:11.7 ,examen:0 ,controle_continu:0 ,remarque:"Aucune remarque our le moment" , nb_abssences: 1},
    { label:"Elec",name: 'Electricité' ,coef:3,Interrogation:16 ,examen:0 ,controle_continu:0 ,remarque:"Aucune remarque our le moment" , nb_abssences: 0},

  ];

  return (
    <div className="App">
      <NavBarHome />
      <MarksTable marks={studentMarks} />
    </div>
  );
}

export default AcadimicData;
