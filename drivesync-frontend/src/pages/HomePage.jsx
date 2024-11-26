import GastoMensal from '../components/Graficos/GastoCombustivelMensal';
import DonutChart from '../components/Graficos/TiposDeVeiculos';
import LineChart from '../components/Graficos/ViagensPorVeiculo';
import SideBarChart from '../components/Graficos/ConsumoPorVeiculo';
import { Sidebar } from '../components/Sidebar';

export function Home() {
    return (
        <div className="flex min-h-screen">
            <Sidebar />
            <div style={{ flex: 1, marginTop: '3rem', marginLeft: '16rem' }} >
                <div id="main-content" className="bg-gray-100 relative overflow-y-auto h-full">
                    <main>
                        <div className="pt-6 px-4">

                            {/* Nível 2 - Gráficos principais */}
                            {/* Nível 2 - Gráficos principais */}
                            <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                                {/* Gráfico de consumo de combustível por mês */}
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8 flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-between mb-4 w-full">
                                        <h3 className="text-xl font-bold leading-none text-gray-900">Veículos que mais consumiram combustível</h3>
                                    </div>
                                    <div id="main-chart" className="w-full h-72 md:h-96">
                                        <SideBarChart />
                                    </div>
                                </div>

                                {/* Tipos de veículos */}
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8 flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-between mb-4 w-full">
                                        <h3 className="text-xl font-bold leading-none text-gray-900">Viagens por motorista</h3>
                                    </div>
                                    <div id="main-chart" className="w-full h-72 md:h-96">
                                        <DonutChart />
                                    </div>
                                </div>
                            </div>


                            {/* Nível 3 - Gráficos secundários */}
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">

                                {/* Total de viagens por veículo */}
                                <div className="bg-white shadow-md rounded-lg mb-4 p-4 sm:p-6 h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold leading-none text-gray-900">Consumo de combustível gasto por mês</h3>
                                        <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                                            Ver todos
                                        </a>
                                    </div>
                                    <div className="w-full h-72 md:h-96">
                                        <GastoMensal />
                                    </div>
                                </div>

                                {/* Quantidade de viagens por veículo */}
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8">
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
