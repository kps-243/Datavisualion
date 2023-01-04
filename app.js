fetch(
  "https://public.opendatasoft.com/api/records/1.0/search/?dataset=prix_des_carburants_j_7&q=&facet=cp&facet=pop&facet=city&facet=automate_24_24&facet=fuel&facet=shortage&facet=update&facet=services&facet=brand&refine.pop=R"
) //Récupere les données de l'API
  .then((res) => res.json()) // Permet de lire le fichier.json
  .then((data) => console.log(data));

let prix = data.records;
for (prix = 0; prix < prix.length; prix++) {
  console.log(prix);
}
