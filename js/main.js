const CHART = document.getElementById("line-chart");

Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(CHART, {
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
      // {
      //   label: 'Points',
      //   backgroundColor: 'rgba(0, 255, 255, 0.1)',
      //   borderColor: '#00FFFF',
      //   borderWidth: 2,
      //   data: [5, 100, 20, 70, 80],
      // }
    ]
  },
  options: {
    animation: {
      animateScale: false
    }
  }
});

