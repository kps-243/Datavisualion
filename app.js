const barCanvas = document.getElementById("barCanvas");
const barChart = new Chart(barCanvas, {
  type: "bar",
  data: {
    labels: ["Marseille", "Paris", "Lyon", "Reims"],
    datasets: [
      {
        data: [],
      },
    ],
  },
});
