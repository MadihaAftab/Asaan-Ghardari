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
