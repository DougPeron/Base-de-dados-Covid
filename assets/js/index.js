function fetchJson(url, options) {
  return fetch(url, options).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error(r.statusText);
    }
  });
}
const urlMatriz = "https://api.covid19api.com/summary";
const urlValores =
  "https://api.covid19api.com/total/dayone/country/brazil/status/deaths";

async function init() {
  [summary] = await Promise.all([fetchJson(`${urlMatriz}`)]);
  var confirmados = 0;
  var recuperados = 0;
  var mortes = 0;
  confirmados = summary.Global.TotalConfirmed;
  recuperados = summary.Global.TotalRecovered;
  mortes = summary.Global.TotalDeaths;
  getData(confirmados, recuperados, mortes);
}
init();

let gpizza = new Chart(document.getElementById("pizza"), {
  type: "pie",
  data: {
    labels: ["Confirmados", "Recuperados", "Mortes"],
    datasets: [
      {
        data: [],
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
//função lindona add item.
function getData(confirmados, recuperados, mortes) {
  gpizza.data.datasets[0].data.push(confirmados);
  gpizza.data.datasets[0].data.push(recuperados);
  gpizza.data.datasets[0].data.push(mortes);

  var conf = confirmados;
  document.getElementById("confirmed").innerHTML = conf;
  var morte = mortes;
  document.getElementById("death").innerHTML = morte;
  var recup = recuperados;
  document.getElementById("recovered").innerHTML = recup;
  gpizza.update();
}
function valorFiltrado() {}
