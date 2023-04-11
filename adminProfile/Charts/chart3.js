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


