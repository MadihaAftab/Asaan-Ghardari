//chart no 01 on admin dashboard
const xValues = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const yValues = [1237,8343,1238,5689,9839,2349,5610,1100,1443,1476,1500,3456];

new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      label: "Sales Data",
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(128, 0, 0, 1)",
      borderColor: "rgba(128,0,0,0.2)",
      data: yValues
    }]
  },
  options: {
    legend: {display: true},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

//chart no 02 on admin dashboard
const ctx = document.getElementById("Barchart").getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [2023, 2022, 2021, 2020, 2019, 2018, 2017],
          datasets: [{
            label: 'Customers',
            backgroundColor: 'rgba(233, 150, 122, 1)',
            borderColor: "rgba(128,0,0,0.2)",
            data: [300, 400, 200, 475, 250, 100, 175],
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
              }
            }]
          }
        },
      });

//chart no 03 on admin dashboard
document.addEventListener("DOMContentLoaded", function(event) {
  const ctx = document.getElementById("pieChart").getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ["Booked", "Unbooked", "Completed"],
          datasets: [{
            label: 'Jobs',
            backgroundColor: ['rgba(226, 130, 106, 1)','rgba(255, 160, 122, 1)','rgba(214, 137, 118, 1)'],
            borderColor: 'rgba(128,0,0,0.2)',
            data: [130, 70, 380],
          }]
        },
      });
});

//chart no 04 on admin dashboard
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