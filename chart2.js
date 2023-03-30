
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
