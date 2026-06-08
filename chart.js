let equityChartInstance = null;

export function initChart(canvasId) {
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    if (typeof Chart === 'undefined') {
        console.error("Chart.js library is not loaded from CDN.");
        return;
    }

    equityChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Start'],
            datasets: [{
                label: 'Cumulative RR',
                data: [0],
                borderColor: '#00d2ff',
                backgroundColor: 'rgba(0, 210, 255, 0.1)',
                borderWidth: 2,
                tension: 0.3,
                fill: true,
                pointBackgroundColor: '#b14bf4',
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { 
                    grid: { color: 'rgba(255, 255, 255, 0.05)' },
                    ticks: { color: '#a09cbb' }
                },
                x: { 
                    grid: { display: false },
                    ticks: { display: false }
                }
            }
        }
    });
}

export function updateChart(labels, data) {
    if (!equityChartInstance) return;
    equityChartInstance.data.labels = labels;
    equityChartInstance.data.datasets[0].data = data;
    equityChartInstance.update();
}
