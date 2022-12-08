// const barCanvas = document.getElementById("barCanvas");
// const barChart = new Chart(barCanvas, {
//   type: "bar",
//   data: {
//     labels: ["Marseille", "Paris", "Lyon", "Reims"],
//     datasets: [
//       {
//         data: [],
//       },
//     ],
//   },
// });

fetch(
  "https://data.culture.gouv.fr/api/v2/catalog/datasets/base-des-reliures-numerisees-de-la-bibliotheque-nationale-de-france"
) //Récupere les données de l'API
  .then((res) => res.json()) // Permet de lire le fichier.json
  .then((data) => console.log(data));
