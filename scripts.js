
function mostrarKPI() {
    const valor = document.getElementById('kpiSelect').value;
    const descripcion = document.getElementById('descripcionKPI');
    if (valor === 'CTR') {
        descripcion.textContent = "El CTR mide la efectividad de los clics sobre las impresiones de una campaña publicitaria.";
    } else if (valor === 'Rebote') {
        descripcion.textContent = "La tasa de rebote representa el porcentaje de usuarios que abandonan el sitio tras ver una sola página.";
    } else if (valor === 'Adquisicion') {
        descripcion.textContent = "La adquisición muestra cuántos usuarios han llegado por distintas campañas o fuentes.";
    } else if (valor === 'Sentimiento') {
        descripcion.textContent = "El análisis de sentimiento muestra la proporción de opiniones positivas, negativas y neutrales.";
    }
}

// CTR Chart
const ctx1 = document.getElementById('ctrChart').getContext('2d');
new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
        datasets: [{
            label: 'CTR (%)',
            data: [2.5, 3.1, 2.8, 3.6],
            borderColor: '#008080',
            backgroundColor: 'rgba(0,128,128,0.1)',
            fill: true,
            tension: 0.4
        }]
    }
});

// Rebote Chart
const ctx2 = document.getElementById('reboteChart').getContext('2d');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
        datasets: [{
            label: 'Tasa de Rebote (%)',
            data: [55, 48, 60, 40],
            backgroundColor: ['#4DB6AC', '#81C784', '#FFB74D', '#BA68C8']
        }]
    }
});

// Adquisición Chart
const ctx3 = document.getElementById('adqChart').getContext('2d');
new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Orgánico', 'Pago', 'Referido', 'Directo'],
        datasets: [{
            label: 'Usuarios',
            data: [120, 90, 50, 80],
            backgroundColor: ['#64B5F6', '#E57373', '#AED581', '#FFD54F']
        }]
    }
});

// Sentimiento Chart
const ctx4 = document.getElementById('sentimChart').getContext('2d');
new Chart(ctx4, {
    type: 'pie',
    data: {
        labels: ['Positivo', 'Negativo', 'Neutral'],
        datasets: [{
            label: 'Análisis de Sentimiento',
            data: [60, 25, 15],
            backgroundColor: ['#4CAF50', '#F44336', '#FFEB3B']
        }]
    }
});
