import React, { useEffect, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export function Home() {
    const [manutencaoData, setManutencaoData] = useState([]);
    const [viagensData, setViagensData] = useState([]);
    const [multasData, setMultasData] = useState([]);

    useEffect(() => {
        // Substitua com as requisições reais para os endpoints
        fetch('/api/Manutencoes')
            .then((response) => response.json())
            .then((data) => setManutencaoData(data));

        fetch('/api/Viagens')
            .then((response) => response.json())
            .then((data) => setViagensData(data));

        fetch('/api/Multas')
            .then((response) => response.json())
            .then((data) => setMultasData(data));
    }, []);

    // Função para gerar os dados do gráfico de manutenções por veículo
    const manutencaoChartData = () => {
        const veiculos = manutencaoData.reduce((acc, manutencao) => {
            const veiculo = manutencao.veiculo;
            acc[veiculo] = (acc[veiculo] || 0) + 1;
            return acc;
        }, {});

        return {
            labels: Object.keys(veiculos),
            datasets: [
                {
                    label: 'Número de Manutenções',
                    data: Object.values(veiculos),
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    // Função para gerar os dados do gráfico de multas por veículo
    const multasChartData = () => {
        const veiculosMultas = multasData.reduce((acc, multa) => {
            const veiculoId = multa.veiculoid;
            acc[veiculoId] = (acc[veiculoId] || 0) + multa.valor;
            return acc;
        }, {});

        return {
            labels: Object.keys(veiculosMultas),
            datasets: [
                {
                    label: 'Valor das Multas',
                    data: Object.values(veiculosMultas),
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                },
            ],
        };
    };

    // Função para gerar os dados do gráfico de viagens por status
    const viagensChartData = () => {
        const statusCount = viagensData.reduce((acc, viagem) => {
            const status = viagem.status;
            acc[status] = (acc[status] || 0) + 1;
            return acc;
        }, {});

        return {
            labels: ['Ativas', 'Concluídas', 'Pendentes'],
            datasets: [
                {
                    label: 'Viagens por Status',
                    data: [statusCount[1] || 0, statusCount[2] || 0, statusCount[0] || 0],
                    backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)'],
                    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                    borderWidth: 1,
                },
            ],
        };
    };

    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 ml-64 mt-10 bg-gray-100 overflow-y-auto">
                <div id="main-content" className="h-full w-full">
                    <main className="h-full">
                        <div className="pt-6 px-4 h-full">
                            <div className="mt-4 w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 h-full">
                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold mb-4">Manutenções por Veículo</h2>
                                    <Bar data={manutencaoChartData()} options={{ responsive: true, maintainAspectRatio: false }} />
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold mb-4">Valor Total das Multas por Veículo</h2>
                                    <Bar data={multasChartData()} options={{ responsive: true, maintainAspectRatio: false }} />
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow">
                                    <h2 className="text-xl font-semibold mb-4">Viagens por Status</h2>
                                    <Bar data={viagensChartData()} options={{ responsive: true, maintainAspectRatio: false }} />
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
