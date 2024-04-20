export function Home() {
    return (
        <div>
            <div id="main-content" class="h-full w-full bg-gray-100 relative overflow-y-auto ">
                <main>
                    <div class="pt-6 px-4">

                        {/* Nível 2 */}
                        <div class="mt-2 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">

                            {/* Consumo total de díesel */}
                            <div class="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">0,00</span>
                                        <h3 class="text-base font-normal text-gray-500">Consumo total de díesel</h3>
                                    </div>
                                    <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                        0.0%
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Consumo total de etanol */}
                            <div class="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">0,00</span>
                                        <h3 class="text-base font-normal text-gray-500">Consumo total de etanol</h3>
                                    </div>
                                    <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                                        0.0%
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Consumo total de gasolina comum */}
                            <div class="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">0,00</span>
                                        <h3 class="text-base font-normal text-gray-500">Consumo total de gasolina comum</h3>
                                    </div>
                                    <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                                        -0.0%
                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Nível 1 */}
                        <div class="mt-4 w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">

                            {/* Gráfico de consumo de combustível por mês */}
                            <div class="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
                                <div class="flex items-center justify-between mb-4">
                                    <div class="flex-shrink-0">
                                        <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$00,00</span>
                                        <h3 class="text-base font-normal text-gray-500">Gastos com combustível por mês</h3>
                                    </div>
                                </div>
                                <div id="main-chart"></div>
                            </div>

                            {/* Tabela com lista de últimas viagens */}
                            <div class="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <div class="mb-4 flex items-center justify-between">
                                    <div>
                                        <h3 class="text-xl font-bold text-gray-900 mb-2">Últimas viagens</h3>
                                        <span class="text-base font-normal text-gray-500">Lista de registro de viagens mais recentes</span>
                                    </div>
                                    <div class="flex-shrink-0">
                                        <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2">Ver todas</a>
                                    </div>
                                </div>
                                <div class="flex flex-col mt-8">
                                    <div class="overflow-x-auto rounded-lg">
                                        <div class="align-middle inline-block min-w-full">
                                            <div class="shadow overflow-hidden sm:rounded-lg">
                                                <table class="min-w-full divide-y divide-gray-200">
                                                    <thead class="bg-gray-50">
                                                        <tr>
                                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Início x Destino
                                                            </th>
                                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Data
                                                            </th>
                                                            <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                                Veículo
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody class="bg-white">
                                                        <tr>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-gray-50">
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-gray-50">
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            </td>
                                                        </tr>
                                                        <tr class="bg-gray-50">
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                            </td>
                                                            <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
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
                        <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">

                            {/* Total de viagens por veículo */}
                            <div class="bg-white shadow-md  rounded-lg mb-4 p-4 sm:p-6 h-full">
                                <div class="flex items-center justify-between mb-4">
                                    <h3 class="text-xl font-bold leading-none text-gray-900">Total de viagens por veículo</h3>
                                    <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                                        Ver todos
                                    </a>
                                </div>
                                <div class="flow-root">
                                    <ul role="list" class="divide-y divide-gray-200">
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate">
                                                        Placa
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate">
                                                        <a href="">Modelo</a>
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                                    0
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate">
                                                        Placa
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate">
                                                        <a href="">Modelo</a>
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                                    0
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate">
                                                        Placa
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate">
                                                        <a href="">Modelo</a>
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                                    0
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate">
                                                        Placa
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate">
                                                        <a href="">Modelo</a>
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                                    0
                                                </div>
                                            </div>
                                        </li>
                                        <li class="py-3 sm:py-4">
                                            <div class="flex items-center space-x-4">
                                                <div class="flex-shrink-0">
                                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Imagem veículo" />
                                                </div>
                                                <div class="flex-1 min-w-0">
                                                    <p class="text-sm font-medium text-gray-900 truncate">
                                                        Placa
                                                    </p>
                                                    <p class="text-sm text-gray-500 truncate">
                                                        <a href="">Modelo</a>
                                                    </p>
                                                </div>
                                                <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                                    0
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* A definir */}
                            <div class="bg-white shadow-md  rounded-lg p-4 sm:p-6 xl:p-8 ">
                                <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Espaço para definir</h3>
                                <div class="block w-full overflow-x-auto">
                                    <table class="items-center w-full bg-transparent border-collapse">
                                        <thead>
                                            <tr>
                                                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Coluna 1</th>
                                                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Coluna 2</th>
                                                <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Coluna 3</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-gray-100">
                                            <tr class="text-gray-500">
                                                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                            </tr>
                                            <tr class="text-gray-500">
                                                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                            </tr>
                                            <tr class="text-gray-500">
                                                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                            </tr>
                                            <tr class="text-gray-500">
                                                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                            </tr>
                                            <tr class="text-gray-500">
                                                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                            </tr>
                                            <tr class="text-gray-500">
                                                <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Dado</th>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
                                                <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">0</td>
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
    );
}