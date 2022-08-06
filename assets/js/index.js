(async () => {
  let response = await axios.get("https://api.covid19api.com/summary");

  getData(response.data.Global);
  loadPizza(response.data.Global);
})();
const urlValores =
  "https://api.covid19api.com/total/dayone/country/brazil/status/deaths";

function loadPizza(json) {
  let totalData = [json.NewConfirmed, json.NewDeaths, json.NewRecovered];

  let gpizza = new Chart(document.getElementById("pizza"), {
    type: "pie",
    data: {
      labels: ["Confirmados", "Recuperados", "Mortes"],
      datasets: [
        {
          data: totalData,
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
        },
      ],
    },
    options: {
      response: true,
      plugin: {
        legend: {
          position: "top",
        },
        title: {
          text: "Casos Globais",
        },
      },
    },
  });
}

//função lindona add item.
function getData(json) {
  document.getElementById("confirmed").innerHTML =
    json.TotalConfirmed.toLocaleString("PT");
  document.getElementById("death").innerHTML =
    json.TotalDeaths.toLocaleString("PT");
  document.getElementById("recovered").innerHTML =
    json.TotalRecovered.toLocaleString("PT");

  document.getElementById("date").innerHTML = json.Date;
}

function valorFiltrado() {}
