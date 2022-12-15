fetch(
  "https://www.data.gouv.fr/fr/datasets/prix-des-carburants-en-france-flux-instantane/"
) //Récupere les données de l'API
  .then((res) => res.json()) // Permet de lire le fichier.json
  .then((data) => console.log(data));

// //Pour la configuration
// const config = {
//   type: "line",
//   data: data,
//   options: {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: (ctx) => "Point Style: " + ctx.chart.data.datasets[0].pointStyle,
//       },
//     },
//   },
// };

// //Pour prendre les données

// const data = {
//   labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6"],
//   datasets: [
//     {
//       label: "Dataset",
//       data: Utils.numbers({ count: 6, min: -100, max: 100 }),
//       borderColor: Utils.CHART_COLORS.red,
//       backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
//       pointStyle: "circle",
//       pointRadius: 10,
//       pointHoverRadius: 15,
//     },
//   ],
// };
