function convertir() {
    const m = document.querySelector("#monedas")
    const c = document.querySelector("#cantidad")
    const v = document.querySelector("#resultado")
    
    let vc = parseFloat(c.value) * parseInt(m.value);

    v.value = vc.toFixed(2);

    renderGrafica()
}



async function getDatos() {
    try {

        const res = await fetch("https://api.gael.cloud/general/public/monedas");
        const data = await res.json();
        console.log(data);
        const e = document.querySelector("#monedas");

        let html = '';
        for (let moneda of data) {
            html += `<option value="${moneda.Valor}">${moneda.Nombre}</option>`;
    }

        e.innerHtml= html;
    } catch (e) {
    }
}
getDatos()