const apiUrl =
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=prix_des_carburants_j_7&q=&facet=cp&facet=pop&facet=city&facet=automate_24_24&facet=fuel&facet=shortage&facet=update&facet=services&facet=brand&refine.pop=R";
fetch(apiUrl) //Récupere les données de l'API
  .then((res) => res.json()) // Permet de lire le fichier.json
  .then((data) => {
    var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    var yValues = [55, 49, 44, 24, 15];
    var barColors = ["red", "green", "blue", "orange", "brown"];

    new Chart("prixVille", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: barColors,
            data: yValues,
          },
        ],
      },
    });
  });
