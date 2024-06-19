import GastoMensal from '../components/Graficos/GastoCombustivelMensal';
import DonutChart from '../components/Graficos/TiposDeVeiculos';
import LineChart from '../components/Graficos/ViagensPorVeiculo';
import { Sidebar } from '../components/Sidebar';

export function Home() {
    return (
        <div>
            <Sidebar />
            <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }} >

                <div id="main-content" className="h-full w-full bg-gray-100 relative overflow-y-auto ">
                    <main>
                        <div className="pt-6 px-4">

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                                {/* Consumo total de díesel */}
                                <div className="relative">
                                    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5.000L</span>
                                                <h3 className="text-base font-normal text-gray-500">Consumo total de díesel</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Espaço com cor e ícone Lucide */}
                                    <div className="absolute inset-0 flex items-end justify-end rounded-tr-lg p-2">
                                        
                                    </div>
                                </div>

                                {/* Consumo total de etanol */}
                                <div className="relative">
                                    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">9.000L</span>
                                                <h3 className="text-base font-normal text-gray-500">Consumo total de etanol</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Espaço com cor e ícone Lucide */}
                                    <div className="absolute inset-0 flex items-end justify-end rounded-tr-lg p-2">
                                        
                                    </div>
                                </div>

                                {/* Consumo total de gasolina comum */}
                                <div className="relative">
                                    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">13.000L</span>
                                                <h3 className="text-base font-normal text-gray-500">Consumo total de gasolina comum</h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Espaço com cor e ícone Lucide */}
                                    <div className="absolute inset-0 flex items-end justify-end rounded-tr-lg p-2">
                                        
                                    </div>
                                </div>
                            </div>

                            {/* Nível 2 */}
                            <div className="mt-4 w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">

                                {/* Gráfico de consumo de combustível por mês */}
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8 2xl:col-span-2 flex flex-col items-center justify-center">
                                    <div className="flex items-center justify-between mb-4 w-full">
                                        <h3 className="text-xl font-bold leading-none text-gray-900">Gastos com combustível por mês</h3>
                                    </div>
                                    <div id="main-chart" className="w-full h-96 flex items-center justify-center">
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
                                    <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Espaço para definir</h3>
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