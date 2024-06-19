import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const dataDonut = {
    labels: ['Carros', 'Caminhões', 'Motos', 'Ônibus'],
    datasets: [
        {
            label: 'Tipos de Veículos',
            data: [30, 25, 20, 25],
            backgroundColor: [
                '#2ECC71', // Verde
                '#27AE60', // Verde mais escuro
                '#4CAF50', // Verde claro
                '#3498DB', // Azul claro
            ],
            borderWidth: 1,
        },
    ],
};

const optionsDonut = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: '#666',
                font: {
                    family: 'Inter, sans-serif',
                    size: 14,
                },
            },
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: function(context) {
                    let label = context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += context.raw.toFixed(2); // Mostra o valor exato ao invés de percentual
                    return label;
                },
            },
        },
    },
};

const DonutChart = () => (
    <div className="w-max h-max">
        <Doughnut data={dataDonut} options={optionsDonut} />
    </div>
);

export default DonutChart;
