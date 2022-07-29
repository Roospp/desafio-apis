function prepararConfiguracionParaLaGrafica(monedas) {
    // Creamos las variables necesarias para el objeto de configuración
    const tipoDeGrafica = "line";
    const nombresDeLasMonedas = monedas.map((moneda) => moneda.Codigo);
    const titulo = "Monedas";
    const colorDeLinea = "red";
    const valores = monedas.map((moneda) => {
        const valor = moneda.Valor.replace(",", ".");
        return Number(valor);
    });
    // Creamos el objeto de configuración usando las variables anteriores
    const config = {
        type: tipoDeGrafica,
        data: {
            labels: nombresDeLasMonedas,
            datasets: [{
                label: titulo,
                backgroundColor: colorDeLinea,
                data: valores
            }
            ]
        }
    };
    return config;
}

let myChart;

async function renderGrafica(valores) {
    if (myChart) {
        myChart.destroy();
    }
    let config = await prepararConfiguracionParaLaGrafica(valores);
    let chartDOM = document.getElementById("myChart");
    
    myChart = new Chart(chartDOM, config);
}

