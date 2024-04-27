import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export function ModalEditarVeiculo({ isOpen, onRequestClose, veiculoId, editVeiculo }) {
    const [id, setId] = useState(null);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState(0);
    const [placa, setPlaca] = useState('');
    const [quilometragem, setQuilometragem] = useState(0);
    const [tp_combustivel, setTpCombustivel] = useState('');
    const [dt_aquisicao, setDtAquisicao] = useState('');
    const [status, setStatus] = useState('');

    const history = useNavigate();

    const token = localStorage.getItem('token');
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        if (veiculoId) {
            loadVeiculo();
        }
    }, [veiculoId]);

    async function loadVeiculo() {
        try {
            const response = await api.get(`api/veiculos/${veiculoId}`, authorization);

            setId(response.data.id);
            setMarca(response.data.marca);
            setModelo(response.data.modelo);
            setAno(response.data.ano);
            setPlaca(response.data.placa);
            setQuilometragem(response.data.quilometragem);
            setTpCombustivel(response.data.tp_combustivel);
            setDtAquisicao(response.data.dt_aquisicao);
            setStatus(response.data.status);
        } catch (error) {
            alert('Erro ao recuperar o veículo ' + error);
            history('/veiculos');
        }
    }

    async function updateVeiculo(event) {
        event.preventDefault();

        const data = {
            marca,
            modelo,
            ano,
            placa,
            quilometragem,
            tp_combustivel,
            dt_aquisicao,
            status
        }

        try {
            data.id = id;
            await api.put(`api/veiculos/${id}`, data, authorization);
            editVeiculo(id); // Chamando a função passada como prop para informar que o veículo foi editado
        } catch (error) {
            alert('Erro ao editar veículo. ');
        }
        onRequestClose(); // Fechando o modal após a edição do veículo
    }

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Editar Veículo"
            className="modal fixed inset-0 flex items-center justify-center overflow-auto"
            overlayClassName="modal-overlay fixed inset-0 z-40 bg-black bg-opacity-40"
            shouldCloseOnOverlayClick
        >
            <div className="modal-content bg-white shadow-lg rounded-lg w-full max-w-md">
                <div className="modal-header flex justify-between items-center px-6 py-4 bg-gray-50 rounded-t-lg">
                    <h3 className="modal-title text-lg font-semibold text-gray-900">Editar veículo</h3>
                    <button onClick={onRequestClose} className="modal-close text-gray-500 hover:text-gray-700">
                        <span className="sr-only">Fechar</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <hr />

                <div className="modal-body px-5 py-0 ">
                    <form className="p-4 md:p-5" onSubmit={updateVeiculo}>
                        <div className="grid mb-1 w-full">
                            {/* Campos de edição habilitados para permitir a alteração */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="col-span-2 mb-2">
                                    <label htmlFor="marca" className="block text-sm font-medium leading-6 text-gray-900">Marca</label>
                                    <input type="text" name="marca" id="marca" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={marca} onChange={(e) => setMarca(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="modelo" className="block text-sm font-medium leading-6 text-gray-900">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="ano" className="block text-sm font-medium leading-6 text-gray-900">Ano</label>
                                    <input type="number" name="ano" id="ano" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={ano} onChange={(e) => setAno(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="placa" className="block text-sm font-medium leading-6 text-gray-900">Placa</label>
                                    <input type="text" name="placa" id="placa" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={placa} onChange={(e) => setPlaca(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="quilometragem" className="block text-sm font-medium leading-6 text-gray-900">Quilometragem</label>
                                    <input type="number" name="quilometragem" id="quilometragem" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={quilometragem} onChange={(e) => setQuilometragem(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="tp_combustivel" className="block text-sm font-medium leading-6 text-gray-900">Tipo do Combustível</label>
                                    <input type="text" name="tp_combustivel" id="tp_combustivel" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={tp_combustivel} onChange={(e) => setTpCombustivel(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="dt_aquisicao" className="block text-sm font-medium leading-6 text-gray-900">Data de Aquisição</label>
                                    <input type="date" name="dt_aquisicao" id="dt_aquisicao" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={dt_aquisicao} onChange={(e) => setDtAquisicao(e.target.value)} />
                                </div>

                                <div className="col-span-2 mb-2">
                                    <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">Status</label>
                                    <input type="text" name="status" id="status" className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400" value={status} onChange={(e) => setStatus(e.target.value)} />
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
