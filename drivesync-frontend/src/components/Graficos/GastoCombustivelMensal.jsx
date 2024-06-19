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

// Registro dos componentes do Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const data = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
        {
            label: 'Gasolina Comum',
            data: [150, 141, 145, 152, 300, 280, 125, 260, 125, 125, 125, 125],
            backgroundColor: '#1b512d',
            borderColor: '#1b512d',
            borderWidth: 1,
        },
        {
            label: 'Diesel',
            data: [150, 141, 145, 152, 135, 125, 125, 125, 125, 125, 125, 125],
            backgroundColor: '#b1cf5f',
            borderColor: '#b1cf5f',
            borderWidth: 1,
        },
        {
            label: 'Etanol',
            data: [150, 141, 145, 152, 135, 125, 125, 125, 125, 125, 125, 125],
            backgroundColor: '#1c7c54',
            borderColor: '#1c7c54',
            borderWidth: 1,
        },
        {
            label: 'Gasolina Aditivada',
            data: [150, 141, 145, 152, 135, 125, 125, 125, 125, 125, 125, 125],
            backgroundColor: '#73e2a7',
            borderColor: '#73e2a7',
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false, // Garante que o gráfico ocupe 100% do contêiner
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Meses do Ano',
                color: '#666',
                font: {
                    family: 'Roboto',
                    size: 16,
                },
            },
            ticks: {
                color: '#666',
                font: {
                    family: 'Inter, sans-serif',
                    size: 14,
                },
                callback: function(value, index, values) {
                    return data.labels[index];
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
                display: true,
                text: 'Gastos em R$',
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
                callback: function(value) {
                    return '$' + value;
                },
            },
            grid: {
                color: 'rgba(200, 200, 200, 0.3)',
            },
        },
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                color: '#666',
                font: {
                    family: 'Roboto',
                    size: 14,
                },
            },
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: function(context) {
                    return context.dataset.label + ': $' + context.parsed.y;
                },
            },
        },
    },
};

const MyChart = () => (
    <div className="w-full h-full">
        <Bar data={data} options={options} />
    </div>
);

export default MyChart;
