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
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <div className="pointer-events-auto relative w-screen max-w-md">
                                
                                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                    <button type="button" onClick={onRequestClose} className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                                        <span className="absolute -inset-2.5"></span>
                                        <span className="sr-only">Close panel</span>
                                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div className="px-4 sm:px-6">
                                        <h2 className="text-base font-semibold leading-6 text-gray-900" id="slide-over-title">Panel title</h2>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        {/* Your content */}
                                    </div>
                                    <div className="px-4 sm:px-6 py-2">
                                        <button onClick={onRequestClose} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Fechar</button>
                                    </div>
                                    <div className="px-4 sm:px-6 py-2">
                                        <button onClick={onRequestClose} className="text-white bg-red-600 hover:bg-red-800 focus:ring-1 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Excluir</button>
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
