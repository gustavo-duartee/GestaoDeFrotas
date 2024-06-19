import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const dataLine = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    datasets: [
        {
            label: 'RKL2938',
            data: [30, 20, 40, 50, 60, 70, 80, 60, 50, 40, 30, 20],
            borderColor: '#def4c6',
            backgroundColor: '#def4c6',
            fill: true,
        },
        {
            label: 'PJL9988',
            data: [15, 25, 35, 45, 55, 65, 75, 85, 65, 55, 45, 35],
            borderColor: '#1c7c54',
            backgroundColor: '#1c7c54',
            fill: true,
        },
        {
            label: 'JRI3348',
            data: [10, 15, 20, 25, 30, 35, 40, 30, 20, 10, 5, 0],
            borderColor: '#73e2a7',
            backgroundColor: '#73e2a7',
            fill: true,
        },
        {
            label: 'PPE2223',
            data: [5, 10, 15, 20, 25, 30, 35, 25, 20, 15, 10, 5],
            borderColor: '#1b512d',
            backgroundColor: '#1b512d',
            fill: true,
        },
    ],
};

const optionsLine = {
    responsive: true,
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Meses do Ano',
                color: '#666',
                font: {
                    family: 'Roboto',
                    size: 20,
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
                display: true,
                text: 'Número de Viagens',
                color: '#666',
                font: {
                    family: 'Roboto',
                    size: 20,
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
                    let label = context.dataset.label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += context.raw;
                    return label;
                },
            },
        },
    },
};

const LineChart = () => (
    <div className="w-full h-full">
        <Line data={dataLine} options={optionsLine} />
    </div>
);

export default LineChart;
