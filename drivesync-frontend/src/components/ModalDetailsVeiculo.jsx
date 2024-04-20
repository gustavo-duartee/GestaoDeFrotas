import ReactModal from "react-modal";

export function ModalDetailsVeiculo({ isOpen, onRequestClose }) {
    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Details Modal"
            className="modal fixed inset-0 flex items-center justify-center overflow-auto"
            overlayClassName="modal-overlay fixed inset-0 z-40 bg-black bg-opacity-40"
            shouldCloseOnOverlayClick
        >
            <div className="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto relative w-screen max-w-md mt-20 mb-2">

                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl rounded-md">
                                    <div className="px-4 sm:px-6 flex justify-items-center">
                                        <div className="mr-2">
                                            <button type="button" onClick={onRequestClose} className="relative rounded-md text-gray-300 hover:text-gray-400 ">
                                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>

                                        <h2 className="text-base font-semibold text-gray-900 ml-3" id="slide-over-title">Detalhes do veículo</h2>
                                    </div>

                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        {/* Conteúdo */}
                                    </div>

                                    <div className="px-4 sm:px-6 py-2 flex gap-2">
                                        <div className="flex-grow ">
                                            <button onClick={onRequestClose} className="w-full text-red-600 bg-white hover:bg-gray-50 border border-rose-500 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Excluir</button>
                                        </div>
                                        <div className="flex-grow">
                                            <button onClick={onRequestClose} className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Editar</button>
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
