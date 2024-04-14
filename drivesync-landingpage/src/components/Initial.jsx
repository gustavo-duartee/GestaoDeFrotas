import Map from '../imgs/white-car-map.svg';

export function Initial() {
    return (
        <div class="bg-white">
            <div class="mx-auto grid max-w-7xl grid-cols-1 items-center gap-x-20 px-4 py-24 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">

                <div class="mx-auto max-w-2xl lg:mx-0">
                    <h2 class="text-4xl font-bold tracking-tight text-black-700 sm:text-6xl">Gerencie sua frota com facilidade e eficiência.</h2>
                    <p class="mt-6 text-lg leading-8 text-black-700">O Drive Sync é a solução completa para o gerenciamento eficiente da sua frota de veículos. Com uma interface intuitiva e recursos poderosos, oferecemos as ferramentas necessárias para otimizar suas operações e garantir o máximo desempenho dos seus veículos.</p>

                    <div class="grid grid-cols-1 gap-1 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex mt-10">
                        <button type="button" class="text-white bg-green-600 hover:bg-green-500 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Fale com um vendedor</button>
                        <button type="button" class="text-black bg-white border border-green-700 hover:bg-green-50 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Ver planos</button>
                    </div>
                </div>

                <div class="mx-auto mt-0  max-w-2xl lg:mx-0 lg:max-w-none">
                    <div class="grid grid-rows-1 lg:gap-8">
                        <img src={Map} alt="Mapa" class="rounded-lg" />
                    </div>
                </div>

            </div>
        </div>
    )

}