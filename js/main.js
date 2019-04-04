const CHART = document.getElementById("line-chart");

Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(CHART, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    datasets: [
      {
        label: 'Number Per Month',
        backgroundColor: '#00FF00',
        borderColor: '#00FF00',
        borderWidth: 2,
        data: [10, 20, 55, 30],
      }
    ]
  }
});

