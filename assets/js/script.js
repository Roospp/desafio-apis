let res = "";
function convertir() {
  const m = document.querySelector("#monedas");
  const c = document.querySelector("#cantidad");
  const v = document.querySelector("#resultado");

  let vc = parseFloat(c.value) * parseInt(m.value);

  v.innerHTML = currencyFormatDE(vc);

  renderGrafica(res);
}

function currencyFormatDE(num) {
  return (
    num
      .toFixed(0)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " CLP "
  );
}

async function getDatos() {
  try {
    res = await fetch("https://api.gael.cloud/general/public/monedas", {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    const data = await res.json();

    let e = document.querySelector("#monedas");

    let html = "";
    for (let moneda of data) {
      html += `<option value="${moneda.Valor}">${moneda.Nombre}</option>`;
    }

    e.innerHTML = html;
  } catch (e) {}
}
getDatos();
