import { Sidebar } from '../components/Sidebar';

export function Home() {
    return (
        <div>
            <Sidebar />
            <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }} >

                <div id="main-content" className="h-full w-full bg-gray-100 relative overflow-y-auto ">
                    <main>
                        <div className="pt-6 px-4">

                            {/* Nível 2 */}
                            <div className="mt-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                                {/* Consumo total de díesel */}
                                <div className="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">0,00</span>
                                            <h3 className="text-base font-normal text-gray-500">Consumo total de díesel</h3>
                                        </div>
                                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                            0.0%
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Consumo total de etanol */}
                                <div className="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">0,00</span>
                                            <h3 className="text-base font-normal text-gray-500">Consumo total de etanol</h3>
                                        </div>
                                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                            0.0%
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Consumo total de gasolina comum */}
                                <div className="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">0,00</span>
                                            <h3 className="text-base font-normal text-gray-500">Consumo total de gasolina comum</h3>
                                        </div>
                                        <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                                            -0.0%
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Nível 1 */}
                            <div className="mt-4 w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">

                                {/* Gráfico de consumo de combustível por mês */}
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex-shrink-0">
                                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$00,00</span>
                                            <h3 className="text-base font-normal text-gray-500">Gastos com combustível por mês</h3>
                                        </div>
                                    </div>
                                    <div id="main-chart"></div>
                                </div>

                                {/* Tabela com lista de últimas viagens */}
                                <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8 ">
                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">Últimas viagens</h3>
                                            <span className="text-base font-normal text-gray-500">Lista de registro de viagens mais recentes</span>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">Ver todas</a>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-8">
                                        <div className="overflow-x-auto rounded-lg">
                                            <div className="align-middle inline-block min-w-full">
                                                <div className="shadow overflow-hidden sm:rounded-lg">
                                                    <table className="min-w-full divide-y divide-gray-200">
                                                        <thead className="bg-gray-50">
                                                            <tr>
                                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                    Início x Destino
                                                                </th>
                                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                    Data
                                                                </th>
                                                                <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                    Veículo
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="bg-white">
                                                            <tr>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                </td>
                                                            </tr>
                                                            <tr className="bg-gray-50">
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                </td>
                                                            </tr>
                                                            <tr className="bg-gray-50">
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                </td>
                                                            </tr>
                                                            <tr className="bg-gray-50">
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                                </td>
                                                                <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>



                            {/* Nível 3 */}
                            <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">

                                {/* Total de viagens por veículo */}
                                <div className="bg-white shadow-md  rounded-lg mb-4 p-4 sm:p-6 h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold leading-none text-gray-900">Total de viagens por veículo</h3>
                                        <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                                            Ver todos
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <ul role="list" className="divide-y divide-gray-200">
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            Placa
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            <a href="">Modelo</a>
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                                        0
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            Placa
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            <a href="">Modelo</a>
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                                        0
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            Placa
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            <a href="">Modelo</a>
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                                        0
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            Placa
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            <a href="">Modelo</a>
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                                        0
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="py-3 sm:py-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-sm font-medium text-gray-900 truncate">
                                                            Placa
                                                        </p>
                                                        <p className="text-sm text-gray-500 truncate">
                                                            <a href="">Modelo</a>
                                                        </p>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                                                        0
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* A definir */}
                                <div className="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                    <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Espaço para definir</h3>
                                    <div className="block w-full overflow-x-auto">
                                        <table className="items-center w-full bg-transparent border-collapse">
                                            <thead>
                                                <tr>
                                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Coluna 1</th>
                                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Coluna 2</th>
                                                    <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Coluna 3</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-100">
                                                <tr className="text-gray-500">
                                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                </tr>
                                                <tr className="text-gray-500">
                                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                </tr>
                                                <tr className="text-gray-500">
                                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                </tr>
                                                <tr className="text-gray-500">
                                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                </tr>
                                                <tr className="text-gray-500">
                                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                </tr>
                                                <tr className="text-gray-500">
                                                    <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                    <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                </tr>
                                            </tbody>
                                        </table>
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