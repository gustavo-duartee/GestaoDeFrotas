import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import api from "../services/api";
import { useNavigate, useParams } from "react-router-dom";

export function ModalEditarVeiculo({ isOpen, veiculo, onRequestClose }) {
    const [id, setId] = useState(null);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [ano, setAno] = useState(0);
    const [placa, setPlaca] = useState('');
    const [quilometragem, setQuilometragem] = useState(0);
    const [tp_combustivel, setTpCombustivel] = useState('');
    const [dt_aquisicao, setDtAquisicao] = useState('');
    const [status, setStatus] = useState('');

    const { veiculoId } = useParams();
    const history = useNavigate();

    const token = localStorage.getItem('token');
    const authorization = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {
        if (veiculoId === '0') {
            return;
        } 
    }, veiculoId)


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
        } catch {
            alert('Erro ao recuperar o veículo ');
            history('/veiculos');
        }
    }

    async function updateVeiculo(event) {
        event.preventDefault();

        const data = {
            id,
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
            data.id= id;
            await api.put(`api/veiculos/${id}`, data, authorization);
        } catch (error) {
            alert('Erro ao editar veículo. ');
        }
        fecharModalEditar();
    }

    function fecharModalEditar() {
        onRequestClose();
    }

    return (
        <ReactModal
            isOpen={isOpen}
            contentLabel="Example Modal"
            className="modal fixed inset-0 flex items-center justify-center overflow-auto"
            overlayClassName="modal-overlay fixed inset-0 z-40 bg-black bg-opacity-40"
            shouldCloseOnOverlayClick
        >
            <div className="modal-content bg-white shadow-lg rounded-lg w-full max-w-md ">

                <div className="modal-header flex justify-between items-center px-6 py-4 bg-gray-50 rounded-t-lg">
                    <h3 className="modal-title text-lg font-semibold text-gray-900">Editar veículo</h3>
                    <button className="modal-close text-gray-500 hover:text-gray-700" onClick={fecharModalEditar}>
                        <span className="sr-only">Fechar</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <hr></hr>

                <div className="modal-body px-5 py-0 ">
                    <form class="p-4 md:p-5" onSubmit={updateVeiculo}>
                        <div class="grid mb-1 w-full">

                            <div class="col-span-2 mb-2">
                                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Modelo</label>
                                <div class="relative mt-1 rounded-md shadow-sm">
                                    <input disabled type="text" name="price" id="name" class="w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={modelo} onChange={e => setModelo(e.target.value)} />
                                </div>
                            </div>

                            <div class="col-span-2 mb-2">
                                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Placa</label>
                                <div class="relative mt-1 rounded-md shadow-sm">
                                    <input disabled type="text" name="price" id="name" class=" w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={placa} onChange={e => setPlaca(e.target.value)} />
                                </div>
                            </div>

                            <div class="col-span-2 mb-2">
                                <label for="category" class="block text-sm font-medium leading-6 text-gray-900">Tipo do Combustível</label>
                                <input disabled type="text" name="price" id="name" class=" w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        value={tp_combustivel} onChange={e => setTpCombustivel(e.target.value)} />
                            </div>

                            <div class="col-span-2 mb-2">
                                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Marca</label>
                                <div class="relative mt-1 rounded-md shadow-sm">
                                    <input disabled type="text" name="price" id="name" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={marca} onChange={e => setMarca(e.target.value)} />
                                </div>
                            </div>

                            <div class="col-span-2 mb-2">
                                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Ano</label>
                                <div class="relative mt-1 rounded-md shadow-sm">
                                    <input disabled type="number" name="price" id="name" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={ano} onChange={e => setAno(e.target.value)} />
                                </div>
                            </div>

                            <div class="col-span-2 mb-2">
                                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Quilometragem</label>
                                <div class="relative mt-1 rounded-md shadow-sm">
                                    <input disabled type="number" name="price" id="name" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={quilometragem} onChange={e => setQuilometragem(e.target.value)} />
                                </div>
                            </div>

                            <div class="col-span-2 mb-2">
                                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Data de Aquisição</label>
                                <div class="relative mt-1 rounded-md shadow-sm">
                                    <input disabled type="date" name="price" id="name" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                                        value={dt_aquisicao} onChange={e => setDtAquisicao(e.target.value)} />
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-between gap-2 mt-8">
                            <button onClick={fecharModalEditar} type="button" className="w-1/2 flex justify-center items-center text-gray-900 border bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                Cancelar
                            </button>

                            <button type="submit" onClick={updateVeiculo} className="w-1/2 flex justify-center items-center text-white border bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                Salvar
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        </ReactModal>
    );
}
