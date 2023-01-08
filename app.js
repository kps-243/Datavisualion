const apiUrl =
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=prix_des_carburants_j_7&q=&facet=cp&facet=pop&facet=city&facet=automate_24_24&facet=fuel&facet=shortage&facet=update&facet=services&facet=brand&refine.pop=R";

fetch(apiUrl) //Récupere les données de l'API
  .then((res) => res.json()) // Permet de lire le fichier.json
  .then((data) => {
    console.log(data);
    const ctx = document.getElementById("prixVille").getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [
          data.records[0].fields.city,
          data.records[1].fields.city,
          data.records[2].fields.city,
          data.records[3].fields.city,
          data.records[4].fields.city,
          data.records[5].fields.city,
          data.records[6].fields.city,
          data.records[7].fields.city,
          data.records[8].fields.city,
          data.records[9].fields.city,
        ],
        datasets: [
          {
            label: "Comparaison des prix de l'essence ",
            data: [
              data.records[0].fields.price_gazole,
              data.records[1].fields.price_gazole,
              data.records[2].fields.price_gazole,
              data.records[3].fields.price_gazole,
              data.records[4].fields.price_gazole,
              data.records[5].fields.price_gazole,
              data.records[6].fields.price_gazole,
              data.records[7].fields.price_gazole,
              data.records[8].fields.price_gazole,
              data.records[9].fields.price_gazole,
            ], // Les données seront remplies lorsque la première requête à l'API sera effectuée
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  })
  .catch((error) => {
    console.error(error);
  });
