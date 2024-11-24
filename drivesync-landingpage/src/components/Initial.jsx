import BackgroundImage from "../imgs/bus.png";

export function Initial() {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh", // Altura total da viewport
      }}
    >
      {/* Gradiente sobreposto do lado direito */}
      <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-80 z-0"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 z-0"></div>

      {/* Conteúdo posicionado no lado direito */}
      <div className="relative z-10 mx-auto grid mr-10 grid-cols-1 items-center px-4 py-24 sm:px-6 sm:py-20 h-full">
        <div className="ml-auto text-right max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Gerencie sua frota com facilidade e eficiência.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Com uma interface intuitiva e recursos poderosos, oferecemos as ferramentas necessárias para otimizar suas
            operações e garantir o máximo desempenho dos seus veículos.
          </p>

          <div className="grid grid-cols-1 gap-1 text-base font-semibold leading-7 sm:grid-cols-2 md:flex mt-10 justify-end">
            <button
              type="button"
              className="text-white bg-green-600 hover:bg-green-500 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              Solicitar acesso grátis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
