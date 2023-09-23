import React from 'react'
import ReactApexChart from 'react-apexcharts';
import AreaChart from '../Components/AreaChart'
import DeptInfoStst from '../Components/DeptInfoStst';
import DeptManStat from '../Components/DeptManStat';
import NavBarHome from '../Components/NavBarHome';

const Dashboard = () => {
  const best_ranked_info = [
    {
      id: 1,
      name: "Ouael Ali",
      email: "mohemd.ali@gmail.com",
      grade: "L1 informatique",
      moyenne:15.35  ,
      src: "/icons/medalD.png",
    },
    {
      id: 2,
      name: "Aya Meradji ",
      email: "aya.ibrahim@gmail.com",
      grade: "L2 informatique",
      moyenne:14.85 ,
      src: "/icons/medalA.png",
    },
    {
      id: 3,
      name: "Walid  Ibrahim ",
      email: "ahmed.ibrahim@gmail.com",
      grade: "L1 informatique",
      moyenne:14.49 ,
      src: "/icons/medalB.png",
    },
  ];
  const best_ranked_manag = [
    {
      id: 1,
      name: " Ines Salhi",
      email: "moath.salhi@gmail.com",
      grade: "L3 Management",
      src: "/icons/medalD.png",
    },
    {
      id: 2,
      name: "Dajebr Idris  ",
      email: "djaber.idris@gmail.com",
      grade: "L2 Management",
      src: "/icons/medalA.png",
    },
    {
      id: 3,
      name: "Amina  Bouzid ",
      email: "amina.bouzid@gmail.com",
      grade: "L2 Management",
      src: "/icons/medalB.png",
    },
  ];
  const pieData = {
    options: {
      labels: ['informatique', 'management'],
    },
    series: [27, 31],
  };
  return (
    <div className='flex flex-col gap-10  '>
      <NavBarHome/>
      <h2  className=" text-4xl text-blue font-medium p-2 mx-5">Statistiques</h2>
       <div className=" justify-center gap-8 flex flex-row  ">
    <div className='shadow-md rounded-xl flex flex-row text-center items-center  p-7'>
    <p className=" text-4xl text-blue font-medium p-2 mx-5">51</p>
    <p className=" text-lg  p-2  mx-5">Proffesseurs</p>
   
    </div><div className='shadow-md rounded-xl flex flex-row text-center items-center  p-7'>
    <p className=" text-4xl text-blue font-medium p-2 mx-5">24</p>
    <p className=" text-lg  p-2  mx-5">Année d'experience</p>
   
    </div><div className='shadow-md rounded-xl flex flex-row text-center items-center  p-7'>
    <p className=" text-4xl text-blue  font-medium p-2 mx-5">452</p>
    <p className=" text-lg  p-2  mx-5">Etudinats</p>
   
    </div><div className='shadow-md rounded-xl flex flex-row text-center items-center  p-7'>
    <p className=" text-4xl text-blue font-medium p-2 mx-5">+1700</p>
    <p className=" text-lg  p-2  mx-5">Diplomés</p>
   
    </div><div className='shadow-md rounded-xl flex flex-row text-center items-center  p-7'>
    <p className=" text-4xl text-blue font-medium p-2 mx-5">21</p>
    <p className=" text-lg  p-2  mx-5">Staff</p>
   
    </div></div>
        <div className=" flex flex-row  gap-5">
    <div className="  w-2/3 h-full bg-white rounded-xl shadow-md justify-center">
      <AreaChart />
       
    </div>
    <div className=" w-1/3 shadow-md rounded-xl flex flex-row ">
    <div>
    <p className=" text-xl  font-medium p-2 mx-5">nb des abssences cette semaine : 58 étudiants</p>
    <p className=" text-lg  p-2  mx-5">nb des abssences (dept informatique) : 27 étudiants</p>
    <p className=" text-lg  p-2  mx-5">nb des abssences (dept management) :  31 étudiants</p>
    </div>
    <div className='my-10'><ReactApexChart
        options={pieData.options}
        series={pieData.series}
        type="pie"
        height={300}
        width={300}
      /></div>
    </div>
    </div>
       
      <div  className='flex flex-row gap-5'> <DeptInfoStst/> <DeptManStat/></div>

        </div>
   
  )
}

export default Dashboard
