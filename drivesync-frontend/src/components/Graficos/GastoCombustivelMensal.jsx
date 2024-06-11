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
            data: [150, 141, 145, 152, 135, 125, 125, 125, 125, 125, 125, 125],
            backgroundColor: 'rgba(26, 86, 219, 0.2)',
            borderColor: '#1A56DB',
            borderWidth: 2,
        },
        {
            label: 'Diesel',
            data: [150, 141, 145, 152, 135, 125, 125, 125, 125, 125, 125, 125],
            backgroundColor: 'rgba(126, 59, 242, 0.2)',
            borderColor: '#7E3BF2',
            borderWidth: 2,
        },
        {
            label: 'Etanol',
            data: [150, 141, 145, 152, 135, 125, 125, 125, 125, 125, 125, 125],
            backgroundColor: 'rgba(126, 59, 242, 0.2)',
            borderColor: '#7E3BF2',
            borderWidth: 2,
        },
        {
            label: 'Gasolina Aditivada',
            data: [150, 141, 145, 152, 135, 125, 125, 125, 125, 125, 125, 125],
            backgroundColor: 'rgba(126, 59, 242, 0.2)',
            borderColor: '#7E3BF2',
            borderWidth: 2,
        },
    ],
};

const options = {
    responsive: true,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Meses do Ano',
                color: '#666',
                font: {
                    family: 'Inter, sans-serif',
                    size: 20,
                    weight: 'bold',
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
                text: 'Gastos em $',
                color: '#666',
                font: {
                    family: 'Inter, sans-serif',
                    size: 20,
                    weight: 'bold',
                },
            },
            ticks: {
                color: '#666',
                font: {
                    family: 'Inter, sans-serif',
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
                    family: 'Inter, sans-serif',
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
