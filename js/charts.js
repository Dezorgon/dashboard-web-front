

var myChart;
async function createPeriodChart()
{
    const ctx = document.getElementById('period-chart');
    const sel = document.getElementById('period').value;

    const [labels, data] = await get('/api/graph/orders', {'period': sel});

    if (typeof myChart !== 'undefined') {
        myChart.destroy();
    }
    myChart = new Chart(ctx, 
    {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'orders',
                data: data,
                backgroundColor: 'rgba(233, 237, 247, 1)',
                borderRadius: 8,
                borderSkipped: false,
                barPercentage: 0.7,
                borderColor: 'rgba(255, 99, 132, 1)',  
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    grid:{
        
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        color: 'rgba(163, 174, 208, 1)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            responsive: true,
        }
    });
}

createPeriodChart()
document.getElementById('period').addEventListener('change', createPeriodChart);

function createPieChart()
{
    const ctx = document.getElementById('pie-chart');
   
    var labels = ['Iphones', 'Macbooks', 'AirPods', 'Aboba', 'Boba'];
    var data = [5, 11, 8, 7, 2];
    
    var pieChart = new Chart(ctx, 
    {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'orders',
                data: data,
                backgroundColor: [
                    '#bc5090',
                    '#ff6361',
                    '#003f5c',
                    '#58508d',
                    '#ffa600',
                ],
                // borderRadius: 8,
                // borderSkipped: false,
                // barPercentage: 0.7,
                // borderColor: 'rgba(255, 99, 132, 1)',  
                borderWidth: 0
            }]
        },
        options: {
            scales: {
                y: {
                    display: false
                },
                x: {
                    grid:{
        
                        drawBorder: false,
                        display: false
                    },
                    ticks: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'right'
                },
            },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

createPieChart()
