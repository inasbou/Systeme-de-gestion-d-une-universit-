import React from 'react' ;
import ReactApexChart from 'react-apexcharts';
import { useState } from 'react';


const DeptInfoStst = () => {

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
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Nombre des etudiant',
      data: [49, 52, 56],
    }],
    options: {
      chart: {
        height: 250,
       
        type: 'bar',
      },
     
    },
  });
  const pieData = {
    options: {
      labels: ['Male', 'Female'],
    },
    series: [87, 70],
  };
  return (
    <div className='flex flex-col p-5 rounded-xl shadow-md bg-slate-50 hover:shadow-lg   '>
  <div>
      <h2 className=" text-2xl text-center text-blue">Les  mieux classés :Dept Informatique  </h2>
      {best_ranked_info.map((best) => (
        <div className=" w-full h-[49px] border-[1px] border-neutral-10 bg-white rounded-md inline-flex flex-row items-center transition-all    my-2">
          <div className=" p-8 inline-flex flex-row items-center">
            <p className="truncate text-primary font-medium text-md">
              
              <div className="h-10 w-10">
                <img src={best.src} alt="medal" />
              </div>
            </p>
          </div>

          <p className="w-[11%] truncate font-medium text-sm text-gray-900">
            {best.name}
          </p>
          <div className="w-[27%] px-5 inline-flex flex-row items-center">
            <p className="truncate text-primary font-medium text-md">
              {best.email}
            </p>
          </div>
          <p className="w-[20%] px-5 truncate font-medium text-sm text-gray-900">
            {best.grade}
          </p>
          <div className="w-[7.33%] truncate grid">
            <p className="px-[7px] py-[2px] m-auto bg-gray-50 rounded-sm font-medium text-sm text-neutral-70">
              {best.moyenne}
            </p>
          </div>
        </div>
      ))}
    </div>
    <div className='flex flex-row gap-20'> 
    <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
        width={250}
      /> 
      <ReactApexChart
        options={pieData.options}
        series={pieData.series}
        type="pie"
        height={350}
        width={450}
      /></div>
    </div>
  )
}

export default DeptInfoStst