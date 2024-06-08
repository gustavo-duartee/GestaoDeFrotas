import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

export function ModalEditarManutencao({ isOpen, onRequestClose, manutencaoId, editManutencao }) {
    const [id, setId] = useState(null);
    const [dt_manutencao, setDtManutencao] = useState('');
    const [veiculo, setVeiculo] = useState('');
    const [servico, setServico] = useState('');
    const [valor, setValor] = useState(0);
    const [descricao, setDescricao] = useState('');

    const history = useNavigate();

    const token = localStorage.getItem('token');
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        if (manutencaoId) {
            loadManutencao();
        }
    }, [manutencaoId]);

    async function loadManutencao() {
        try {
            const response = await api.get(`api/Manutencoes/${manutencaoId}`, authorization);

            setId(response.data.id);
            setDtManutencao(response.data.dt_manutencao);
            setVeiculo(response.data.veiculo);
            setServico(response.data.servico);
            setValor(response.data.valor);
            setDescricao(response.data.descricao);

        } catch (error) {
            alert('Erro ao recuperar o manutenção ' + error);
            history('/manutencoes');
        }
    }

    async function updateManutencao(event) {
        event.preventDefault();


        const data = {
            dt_manutencao,
            veiculo,
            servico,
            valor,
            descricao
        }

        try {
            data.id = id;
            await api.put(`api/Manutencoes/${id}`, data, authorization);
            editManutencao(id);
            alert("Manutenção atualizado com sucesso!");
            window.location.reload();
        } catch (error) {
            alert('Erro ao editar manutenção. ');
        }
        onRequestClose(); // Fechando o modal após a edição do manutenção
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Editar Manutenção"
            className="modal fixed inset-0 flex items-center justify-center overflow-auto"
            overlayClassName="modal-overlay fixed inset-0 z-40 bg-black bg-opacity-40"
            shouldCloseOnOverlayClick
        >
            <div className="modal-content bg-white shadow-lg rounded-lg w-full max-w-md">
                <div className="modal-header flex justify-between items-center px-6 py-4 bg-gray-50 rounded-t-lg">
                    <h3 className="modal-title text-lg font-semibold text-gray-900">Editar manutenção</h3>
                    <button onClick={onRequestClose} className="modal-close text-gray-500 hover:text-gray-700">
                        <span className="sr-only">Fechar</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <hr />

                <div className="modal-body px-5 py-0 ">
                    <form className="p-4 md:p-5" onSubmit={updateManutencao}>
                        <div className="grid mb-1 w-full">
                            {/* Campos de edição habilitados para permitir a alteração */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 mb-2">
                                    <label htmlFor="dt_manutencao" className="block text-sm font-medium leading-6 text-gray-900">Data de Manutenção</label>
                                    <input required type="date" name="dt_manutencao" id="dt_manutencao" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={dt_manutencao} onChange={(e) => setDtManutencao(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="veiculo" className="block text-sm font-medium leading-6 text-gray-900">Veículo</label>
                                    <input required type="text" name="veiculo" id="veiculo" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={veiculo} onChange={(e) => setVeiculo(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="servico" className="block text-sm font-medium leading-6 text-gray-900">Serviço</label>
                                    <input required type="text" name="servico" id="servico" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={servico} onChange={(e) => setServico(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="valor" className="block text-sm font-medium leading-6 text-gray-900">Valor</label>
                                    <input required type="text" name="valor" id="valor" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={valor} onChange={(e) => setValor(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="descricao" className="block text-sm font-medium leading-6 text-gray-900">Descrição</label>
                                    <input required type="text" name="descricao" id="descricao" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                </div>

                            </div>

                        </div>

                        <div className="flex justify-between gap-2 mt-8">
                            <button onClick={onRequestClose} className="w-1/2 flex justify-center items-center text-gray-900 border bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                Cancelar
                            </button>

                            <button type="submit" className="w-1/2 flex justify-center items-center text-white border bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                Salvar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </ReactModal>
    );
}
