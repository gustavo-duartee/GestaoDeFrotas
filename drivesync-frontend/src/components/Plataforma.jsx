export function Plataforma() {
    return (
        <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">

            {/*Plataforma Web */}
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-9 mb-20">

                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="lg:max-w-lg">
                            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Plataforma de Gestão</h1>
                            <p class="mt-6 text-xl leading-8 text-gray-700">A plataforma é acessível via navegador e restringe o acesso a usuários com níveis específicos de permissão. Seu objetivo é centralizar o gerenciamento de dados cadastrados por motoristas por meio do aplicativo, além de administrar informações sobre funcionários e veículos da empresa.</p>
                        </div>
                    </div>
                </div>

                <div class=" p-10 lg:sticky lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img class=" max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem]" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
                </div>

                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                            <ul role="list" class="mt-0 space-y-5 text-gray-600">

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Cadastro de Veículos.</strong> Possibilita o registro de novos veículos na frota, incluindo detalhes como modelo, placa e ano.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Registro de Multas.</strong> Permite o registro de multas recebidas pelos veículos da frota, com informações como data, valor e descrição da infração.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                        <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Registro de Manutenções.</strong> Possibilita o registro de manutenções realizadas nos veículos, incluindo descrição dos serviços e peças substituidas.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                        <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Consulta de Viagens.</strong> Permite a visualização detalhada das viagens realizadas, incluindo informações como destinos, distâncias percorridas e custos associados.</span>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

            </div>


            {/*Plataforma Mobile */}
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-9">

                <div class="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="lg:max-w-lg">
                            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aplicativo de Gestão</h1>
                            <p class="mt-6 text-xl leading-8 text-gray-700">Exclusivo para motoristas em atividades pela empresa, o nosso aplicativo fornece uma ferramenta dinâmica para registro das viagens realizadas em nome da empresa, calculando gastos com combustível e fornecendo um mapa para o motorista.</p>
                        </div>
                    </div>
                </div>

                <div class="ml-12 mt-10 p-12 lg:sticky lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img class=" max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem]" src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" />
                </div>

                <div class="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                            <ul role="list" class="mt-0 space-y-5 text-gray-600">

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Iniciar Viagem.</strong> Permite o início de uma nova viagem, registrando dados como origem, destino e passageiros.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Encerrar Viagem.</strong> Facilita o encerramento de uma viagem em andamento, permitindo o registro de informações finais e despesas.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                        <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Autenticar Usuário.</strong> Garante acesso seguro ao aplicativo por meio da verificação das credenciais do motorista.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                        <path fill-rule="evenodd" d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" clip-rule="evenodd" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Consulta de Veículos.</strong> Permite a consulta de informações detalhadas sobre um veículo específico cadastrado no sistema.</span>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

            </div>
        </div>



    )
}