const canvas = document.getElementById("doughnutChart");
const chartData = {
  labels: [2023, 2022, 2021, 2020, 2019, 2018, 2017],
  datasets: [
    {
      label: "Job",
      data: [500, 450, 300, 240, 100, 678, 200],
      backgroundColor: ["#FFA07A", "#FA8072", "#E9967A", "#F08080","#CD5C5C", "#FF7F50", "#DB7093"],
      borderColor: "#fff",
      borderWidth: 1,
    },
  ],
};
const doughnutChart = new Chart(canvas, {
  type: "doughnut",
  data: chartData,
  options: {
    responsive: true,
    maintainAspectRatio: true,
  },
});

