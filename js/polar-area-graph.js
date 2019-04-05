const POLARAREACHART = document.getElementById("polar-area-chart");

Chart.defaults.scale.ticks.beginAtZero = true;

let polarAreaChart = new Chart(POLARAREACHART, {
  type: 'polarArea',
  data: {
    labels: ['Strength', 'Skill', 'Health', 'Speed', 'Luck'],
    datasets: [
      {
        label: 'Points',
        backgroundColor: ['#f1c40f', '#e67e22', '#16a085', '#2980b9', '#8e44ad'],
        borderWidth: 2,
        data: [10, 20, 55, 30, 10],
      },
    ]
  },
  options: {
    animation: {
      animateScale: false
    }
  }
});
