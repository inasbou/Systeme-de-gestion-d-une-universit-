import ApexCharts from "react-apexcharts"; 
const AreaChart = () => {
  const chartOptions = {
    chart: {
      id: "vuechart-example",
      toolbar: { show: false },
      fontFamily: "gilroy",
    },
    title: {
      text: "Nombre des absences par departement",
      align: "left",
      margin: 0,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "gilroy",
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      width: 2,
      dashArray: 0,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
    },

    xaxis: {
      categories: ["Dim", "Lun", "Mar", "Mer", "Jeu"],
    },
    yaxis: {
      min: 0,

      tickAmount: 5,
    },
  };
  const series = [
    {
      name: "absences dept Informatique",
      data: [3, 0, 5, 12, 7],
    },
    {
      name: "absences dept Management",
      data: [5, 13, 1, 9, 3],
    },
  ];

  return (
    
    <div className="   h-full bg-white rounded-xl shadow-md justify-center">
      <ApexCharts
        options={chartOptions}
        series={series}
        type="area"
        width="100%"
        height={200}
      ></ApexCharts>
    </div>
   
    
  );
};

export default AreaChart;