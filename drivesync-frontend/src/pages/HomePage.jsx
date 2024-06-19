import GastoMensal from '../components/Graficos/GastoCombustivelMensal';
import DonutChart from '../components/Graficos/TiposDeVeiculos';
import LineChart from '../components/Graficos/ViagensPorVeiculo';
import SideBarChart from '../components/Graficos/ConsumoPorVeiculo';
import { Sidebar } from '../components/Sidebar';

import { Droplet, Fuel, Car } from 'lucide-react';

export function Home() {

    const cards = [
        {
            id: 1,
            title: 'Díesel',
            amount: '5.000L',
            color: 'bg-green-400',
            icon: <Droplet className="w-16 h-16 text-white" />,
        },
        {
            id: 2,
            title: 'Etanol',
            amount: '9.000L',
            color: 'bg-green-600',
            icon: <Fuel className="w-16 h-16 text-white" />,
        },
        {
            id: 3,
            title: 'Gasolina Comum',
            amount: '13.000L',
            color: 'bg-green-800',
            icon: <Car className="w-16 h-16 text-white" />,
        },
    ];

    return (
        <div>
            <Sidebar />
            <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }} >

                <div id="main-content" className="h-full w-full bg-gray-100 relative overflow-y-auto ">
                    <main>
                        <div className="pt-6 px-4">

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                                {cards.map((card) => (
                                    <div key={card.id} className="relative">
                                        <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0">
                                                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{card.amount}</span>
                                                    <h3 className="text-base font-normal text-gray-500">{card.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Espaço com cor e ícone Lucide */}
                                        <div className={`absolute top-0 right-0 p-2 rounded-lg ${card.color} flex items-center justify-center h-full w-52`}>
                                            {card.icon}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Nível 2 */}
                            <div className="mt-4 w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">

                                {/* Gráfico de consumo de combustível por mês */}
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2 flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-between mb-4 w-full">
                                        <h3 className="text-xl font-bold leading-none text-gray-900">Veículos que mais consumiram combusítel</h3>
                                    </div>
                                    <div id="main-chart" className="w-full h-full">
                                        <SideBarChart />
                                    </div>
                                </div>



                                {/* Tipos de veículos */}
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Tipos de veículos</h3>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="/veiculos" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">Ver todos</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center mt-8">
                                        <div className="overflow-hidden rounded-lg">
                                            <div className="shadow overflow-hidden sm:rounded-lg">
                                                <DonutChart />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* Nível 3 */}
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">

                                {/* Total de viagens por veículo */}
                                <div className="bg-white shadow-md rounded-lg mb-4 p-4 sm:p-6 h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold leading-none text-gray-900">Consumo de combustível gasto por mês</h3>
                                        <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                                            Ver todos
                                        </a>
                                    </div>
                                    <div className="w-full h-96">
                                        <GastoMensal />
                                    </div>
                                </div>


                                {/* A definir */}
                                <div className="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                    <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Quantidade de viagens por veículo</h3>
                                    <div className="block w-full overflow-x-auto">
                                        <LineChart />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}