const barCanvas = document.getElementById("barCanvas").getContext("2d");
const barCanvasData = {
  type: "bar",
  data: {
    labels: ["Congo", "Nigeria", "Mali", "Maroc", "Tunisie"],
  },
  datasets: [
    {
      data: [200, 150, 240, 400, 120],
    },
  ],
};

new Chart(barCanvas).Line(barCanvasData);
