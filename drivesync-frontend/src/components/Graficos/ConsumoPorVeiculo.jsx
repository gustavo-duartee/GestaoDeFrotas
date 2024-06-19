import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const dataBar = {
    labels: ['RKL2938', 'PJL9988', 'JRI3348', 'PPE2223'],
    datasets: [
        {
            label: 'Consumo de Combustível (L)',
            data: [5000, 7000, 3000, 6000],
            backgroundColor: [
                '#1b512d',
                '#b1cf5f',
                '#1c7c54',
                '#73e2a7',
            ],
        },
    ],
};

const optionsBar = {
    responsive: true,
    indexAxis: 'y', // Configuração para barras horizontais
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Consumo de Combustível (L)',
                color: '#666',
                font: {
                    family: 'Roboto',
                    size: 18,
                },
            },
            ticks: {
                color: '#666',
                font: {
                    family: 'Roboto',
                    size: 14,
                },
            },
            grid: {
                display: true,
                color: 'rgba(200, 200, 200, 0.3)',
            },
        },
        y: {
            display: true,
            title: {
                display: false,
            },
            ticks: {
                color: '#666',
                font: {
                    family: 'Roboto',
                    size: 14,
                },
            },
            grid: {
                color: 'rgba(200, 200, 200, 0.3)',
            },
        },
    },
    plugins: {
        legend: {
            display: false, // Esconde a legenda para gráficos de barras laterais
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: function(context) {
                    return `${context.label}: ${context.raw}L`;
                },
            },
        },
    },
};

const SideBarChart = () => (
    <div className="w-full h-full">
        <Bar data={dataBar} options={optionsBar} />
    </div>
);

export default SideBarChart;
