import ReactModal from "react-modal";

export function ModalDetailsMulta({ isOpen, onRequestClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Details Modal"
      className="modal fixed inset-0 flex items-center justify-center overflow-auto"
      overlayClassName="modal-overlay fixed inset-0 z-40 bg-black bg-opacity-40"
      shouldCloseOnOverlayClick
    >
      <div
        className="relative z-10"
        aria-labelledby="slide-over-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <div className="pointer-events-auto relative w-screen max-w-md mt-20 mb-2">
                <div className="flex h-full flex-col bg-white py-6 shadow-xl rounded-md">
                  {/* Header */}
                  <div className="px-4 sm:px-6 flex justify-items-center">
                    <div className="mr-2">
                      <button
                        type="button"
                        onClick={onRequestClose}
                        className="relative rounded-md text-gray-300 hover:text-gray-400 "
                      >
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>

                    <h2
                      className="text-base font-semibold text-gray-900 ml-3"
                      id="slide-over-title"
                    >
                      Detalhes da Multa
                    </h2>
                  </div>

                  <hr className="mt-3"></hr>

                  {/* Conteúdo */}
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <div className="col-span-2 mb-3 mt-3">
                      <label
                        for="name"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        ID da Viagem
                      </label>
                      <input
                        name="idviagem"
                        id="name"
                        className="placeholder-gray-500 bg-white border border-gray-200 text-sm rounded-lg w-full p-2.5"
                        placeholder="Siena"
                        disabled
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 mb-3">
                      <label
                        for="price"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Cogido
                      </label>
                      <input
                        name="codigo"
                        id="name"
                        className="placeholder-gray-500 bg-white border border-gray-200 text-sm rounded-lg w-full p-2.5"
                        placeholder="RKL9587"
                        disabled
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 mb-3">
                      <label
                        for="price"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Data da Multa
                      </label>
                      <input
                        name="dtmulta"
                        id="name"
                        className="placeholder-gray-500 bg-white border border-gray-200 text-sm rounded-lg w-full p-2.5"
                        placeholder="18/05/2020"
                        disabled
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 mb-3">
                      <label
                        for="price"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Tipo de infração
                      </label>
                      <input
                        name="tpinfracao"
                        id="name"
                        className="placeholder-gray-500 bg-white border border-gray-200 text-sm rounded-lg w-full p-2.5"
                        placeholder="Alta"
                        disabled
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 mb-3">
                      <label
                        for="price"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Valor
                      </label>
                      <input
                        name="valor"
                        id="name"
                        className="placeholder-gray-500 bg-white border border-gray-200 text-sm rounded-lg w-full p-2.5"
                        placeholder="2500"
                        disabled
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 mb-3">
                      <label
                        for="price"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Pontos na carteira
                      </label>
                      <input
                        name="ptscarteira"
                        id="name"
                        className="placeholder-gray-500 bg-white border border-gray-200 text-sm rounded-lg w-full p-2.5"
                        placeholder="13"
                        disabled
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 mb-3">
                      <label
                        for="price"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Descrição
                      </label>
                      <input
                        name="descricao"
                        id="name"
                        className="placeholder-gray-500 bg-white border border-gray-200 text-sm rounded-lg w-full p-2.5"
                        placeholder="Excesso de velocidade"
                        disabled
                      />
                    </div>

                    <div className="col-span-2 sm:col-span-1 mb-3">
                      <label
                        for="price"
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        Id do veiculo
                      </label>
                      <input
                        name="veiculoid"
                        id="name"
                        className="placeholder-gray-500 bg-white border border-gray-200 text-sm rounded-lg w-full p-2.5"
                        placeholder="2"
                        disabled
                      />
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="px-4 sm:px-6 py-2 flex gap-2">
                    <div className="flex-grow ">
                      <button
                        onClick={onRequestClose}
                        className="w-full text-black bg-white hover:bg-gray-50 border border-gray-300 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        Excluir
                      </button>
                    </div>
                    <div className="flex-grow">
                      <button
                        onClick={onRequestClose}
                        className="w-full text-white bg-gray-900 hover:bg-gray-700 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
