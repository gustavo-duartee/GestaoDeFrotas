import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
);

// Exemplo de dados dos motoristas e quantidades de viagens
const motoristas = [
    { nome: 'João', viagens: 15 },
    { nome: 'Maria', viagens: 22 },
    { nome: 'Carlos', viagens: 10 },
    { nome: 'Ana', viagens: 18 },
];

const dataBar = {
    labels: motoristas.map(motorista => motorista.nome),  // Nomes dos motoristas como labels
    datasets: [
        {
            label: 'Quantidade de Viagens',
            data: motoristas.map(motorista => motorista.viagens),  // Quantidade de viagens de cada motorista
            backgroundColor: [
                '#def4c6',
                '#1c7c54',
                '#73e2a7',
                '#1b512d',
            ],
            borderColor: '#000', // Cor das bordas das barras
            borderWidth: 1,
        },
    ],
};

const optionsBar = {
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
                label: function (context) {
                    let label = context.label || '';
                    if (label) {
                        label += ': ';
                    }
                    label += context.raw; // Exibe o valor exato
                    return label;
                },
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true, // Garantir que o eixo Y comece em zero
        },
    },
};

const BarChart = () => (
    <div className="w-full h-full">
        <Bar data={dataBar} options={optionsBar} />
    </div>
);

export default BarChart;
