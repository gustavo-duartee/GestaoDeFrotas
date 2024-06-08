import React, { useState } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function ModalCriarManutencao({ isOpen, onRequestClose }) {

    const [dt_manutencao, setDtManutencao] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [servico, setServico] = useState('');
    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    const history = useNavigate();

    const token = localStorage.getItem('token');
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    async function saveManutencao(event) {
        event.preventDefault();

        // const id_veiculo = [];

        const data = {
            dt_manutencao,
            veiculo,
            servico,
            valor,
            descricao
        }

        try {
            await api.post('api/manutencoes', data, authorization);
            alert('Manutenção adicionado com sucesso!');
            history('/manutencoes');
            window.location.reload();
        } catch (error) {
            alert('Erro ao adicionar manutenção: ' + error);
        }
        console.log(data)
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Example Modal"
            className="modal fixed inset-0 flex items-center justify-center overflow-auto"
            overlayClassName="modal-overlay fixed inset-0 z-40 bg-black bg-opacity-40"
            shouldCloseOnOverlayClick
        >
            <div className="modal-content bg-white shadow-lg rounded-lg w-full max-w-md ">

                <div className="modal-header flex justify-between items-center px-6 py-4 bg-gray-50 rounded-t-lg">
                    <h3 className="modal-title text-lg font-semibold text-gray-900">Adicionar nova manutenção</h3>
                    <button onClick={onRequestClose} className="modal-close text-gray-500 hover:text-gray-700" >
                        <span className="sr-only">Fechar</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <hr></hr>

                <div className="modal-body px-5 py-0 ">
                    <form className="p-4 md:p-5" onSubmit={saveManutencao}>
                        <div className="grid mb-1 w-full">

                            <div className="col-span-2 mb-2">
                                <label htmlFor="dtManutencao" className="block text-sm font-medium leading-6 text-gray-900">Data da Manutenção</label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <input type="date" onChange={e => setDtManutencao(e.target.value)} name="dtManutencao" id="dtManutencao" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Digite a data da manutenção" />
                                </div>
                            </div>
                            <div className="col-span-2 mb-2">
                                <label htmlFor="pecasTrocadas" className="block text-sm font-medium leading-6 text-gray-900">Veículo</label>
                                <div className="relative mt-1 rounded-md shadow-sm">
                                    <input type="text" onChange={e => setVeiculo(e.target.value)} name="pecasTrocadas" id="pecasTrocadas" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Digite as peças trocadas na manutenção" />
                                </div>
                                <div className="col-span-2 mb-2">
                                    <label htmlFor="servico" className="block text-sm font-medium leading-6 text-gray-900">Serviço</label>
                                    <div className="relative mt-1 rounded-md shadow-sm">
                                        <input type="text" onChange={e => setServico(e.target.value)} name="servico" id="servico" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Digite a data da manutenção" />
                                    </div>
                                </div>
                                <div className="col-span-2 mb-2">
                                    <label htmlFor="valor" className="block text-sm font-medium leading-6 text-gray-900">Valor</label>
                                    <div className="relative mt-1 rounded-md shadow-sm">
                                        <input type="number" onChange={e => setValor(e.target.value)} name="valor" id="valor" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Digite o valor da manutenção" />
                                    </div>
                                </div>
                                <div className="col-span-2 mb-2">
                                    <label htmlFor="descricao" className="block text-sm font-medium leading-6 text-gray-900">Descrição</label>
                                    <div className="relative mt-1 rounded-md shadow-sm">
                                        <input type="text" onChange={e => setDescricao(e.target.value)} name="descricao" id="descricao" className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Digite a descrição da manutenção" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between gap-2 mt-8" >
                            <button type="button" className="w-1/2 flex justify-center items-center text-gray-900 border bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                Cancelar
                            </button>

                            <button type="submit" className="w-1/2 flex justify-center items-center text-white border bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd"></path>
                                </svg>
                                Adicionar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </ReactModal>
    );
}
