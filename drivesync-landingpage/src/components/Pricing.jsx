export function Princing() {
    return (

        <div class="bg-white py-24 sm:py-10">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Apresentação */}
                <div class="mx-auto max-w-2xl sm:text-center">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Confira nossos planos de acesso!</h2>
                    <p class="mt-6 text-lg leading-8 text-gray-600">Conferiu todos os planos e ficou com alguma dúvida? Entre em contato com nossos vendedores para que possamos sanar todas as suas dúvidas.</p>
                </div>

                <div class="flex flex-wrap justify-center gap-6 mt-10">

                    {/*Plano Básico */}
                    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                        <h5 class="mb-4 text-xl font-medium text-gray-500">Plano Básico</h5>
                        <div class="flex items-baseline text-gray-900">
                            <span class="text-3xl font-semibold">R$</span>
                            <span class="text-5xl font-bold tracking-tight">450</span>
                            <span class="ms-1 text-xl font-normal text-gray-500">/mês</span>
                        </div>
                        <ul role="list" class="space-y-5 my-7">
                            <li class="flex items-center">
                                <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500  ms-3">Cadastro e monitoramento de até 10 veículos</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Escolher plano</button>
                    </div>

                    {/*Plano Stardard */}
                    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                        <h5 class="mb-4 text-xl font-medium text-gray-500">Plano Standard</h5>
                        <div class="flex items-baseline text-gray-900">
                            <span class="text-3xl font-semibold">R$</span>
                            <span class="text-5xl font-bold tracking-tight">1000</span>
                            <span class="ms-1 text-xl font-normal text-gray-500">/mês</span>
                        </div>
                        <ul role="list" class="space-y-5 my-7">
                            <li class="flex items-center">
                                <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500  ms-3">Cadastro e monitoramento de até 25 veículos</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Escolher plano</button>
                    </div>


                    {/*Plano Premium */}
                    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
                        <h5 class="mb-4 text-xl font-medium text-gray-500">Plano Premium</h5>
                        <div class="flex items-baseline text-gray-900">
                            <span class="text-3xl font-semibold">R$</span>
                            <span class="text-5xl font-bold tracking-tight">1700</span>
                            <span class="ms-1 text-xl font-normal text-gray-500">/mês</span>
                        </div>
                        <ul role="list" class="space-y-5 my-7">
                            <li class="flex items-center">
                                <svg class="flex-shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                <span class="text-base font-normal leading-tight text-gray-500  ms-3">Cadastro e monitoramento ilimitado de veículos</span>
                            </li>
                        </ul>
                        <button type="button" class="text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Escolher plano</button>
                    </div>


                </div>

            </div>
        </div>


    )
}