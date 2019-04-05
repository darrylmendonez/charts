const BARCHART = document.getElementById("bar-chart");

Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(BARCHART, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'March', 'April'],
    datasets: [
      {
        label: 'Number Per Month',
        backgroundColor: '#ADFF2F',
        borderColor: '#ADFF2F',
        borderWidth: 2,
        data: [10, 20, 55, 30],
      }
    ]
  }
});
