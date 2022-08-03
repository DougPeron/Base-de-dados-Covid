function fetchJson(url, options) {
  return fetch(url, options).then((r) => {
    if (r.ok) {
      return r.json();
    } else {
      throw new Error(r.statusText);
    }
  });
}
const urlMatriz =
  "https://api.covid19api.com/total/dayone/country/brazil/status/deaths";

async function init() {
  [filteredUrl] = await Promise.all([fetchJson(`${urlMatriz}`)]);

  filterValueToGraph(filteredUrl);
}
init();

let linhas = new Chart(document.getElementById("linhas"), {
  type: "line",
  data: {
    labels: [65, 59, 80, 81, 56, 55, 40],
    datasets: [
      {
        label: "My First Dataset",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
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
        text: "venda de veiculos",
      },
    },
  },
});
//função lindona add item.
/*function getData(item) {
  gpizza.data.datasets[0].data.push(item);
  gpizza.data.datasets[0].data.push(item);
  gpizza.data.datasets[0].data.push(item);

  gpizza.update();
}*/

function filterValueToGraph(filteredUrl) {
  let arrayFiltered = [];
  let filteredRenderVal = [];
  if ((filteredUrl.deaths = true)) {
    for (let death of filteredUrl) {
      arrayFiltered.push(death.deaths);
    }
    let y = 0;
    for (let x of arrayFiltered) {
      y += 1;
      filteredRenderVal.push(arrayFiltered[y] - x);
    }
  }
  if ((filteredUrl.confirmados = true)) {
    for (let confirmado of filteredUrl) {
      arrayFiltered.push(confirmado.confirmados);
    }
    let y = 0;
    for (let x of arrayFiltered) {
      y += 1;
      filteredRenderVal.push(arrayFiltered[y] - x);
    }
  }
  if ((filteredUrl.recuperados = true));
  {
    for (let recuperado of filteredUrl) {
      arrayFiltered.push(recuperado.recuperados);
    }
    let y = 0;
    for (let x of arrayFiltered) {
      y += 1;
      filteredRenderVal.push(arrayFiltered[y] - x);
    }
  }
  console.log(filteredRenderVal);
}
