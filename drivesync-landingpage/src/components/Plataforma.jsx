import Web from '../imgs/plataforma-web.png';
import Mobile from '../imgs/plataforma-mobile.png';

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
                    <img class="max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem]" src={Web} alt="" />
                </div>

                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                            <ul role="list" class="mt-0 space-y-5 text-gray-600">

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Cadastro de Veículos.</strong> Possibilita o registro de novos veículos na frota, incluindo detalhes como modelo, placa e ano.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Registro de Multas.</strong> Permite o registro de multas recebidas pelos veículos da frota, com informações como data, valor e descrição da infração.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Registro de Manutenções.</strong> Possibilita o registro de manutenções realizadas nos veículos, incluindo descrição dos serviços e peças substituidas.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Consulta de Viagens.</strong> Permite a visualização detalhada das viagens realizadas, incluindo informações como destinos, distâncias percorridas e custos associados.</span>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>

            </div>


            {/*Plataforma Mobile */}
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-9 mb-0">

                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="lg:max-w-lg">
                            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Aplicativo de Gestão</h1>
                            <p class="mt-6 text-xl leading-8 text-gray-700">Exclusivo para motoristas em atividades pela empresa, o nosso aplicativo fornece uma ferramenta dinâmica para registro das viagens realizadas em nome da empresa, calculando gastos com combustível e fornecendo um mapa para o motorista.</p>
                        </div>
                    </div>
                </div>

                <div class="p-10 lg:sticky lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img class="max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[45rem]" src={Mobile} alt="" />
                </div>

                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">

                            <ul role="list" class="mt-0 space-y-5 text-gray-600">

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Iniciar Viagem.</strong> Permite o início de uma nova viagem, registrando dados como origem, destino e passageiros.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Encerrar Viagem.</strong> Facilita o encerramento de uma viagem em andamento, permitindo o registro de informações finais e despesas.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span><strong class="font-semibold text-gray-900">Autenticar Usuário.</strong> Garante acesso seguro ao aplicativo por meio da verificação das credenciais do motorista.</span>
                                </li>

                                <li class="flex gap-x-3">
                                    <svg class="mt-1 h-5 w-5 flex-none text-green-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
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