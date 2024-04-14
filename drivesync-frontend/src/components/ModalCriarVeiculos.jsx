import { useState } from "react";
import ReactModal from "react-modal";

import  axios  from "axios";

export function ModalComponent({ isOpen, onRequestClose }) {

    const baseUrl = "https://localhost:7298/api/veiculos";
    const [data, setData] = useState([]);

    const [veiculoSelecionado, setVeiculoSelecionado] = useState({
        id: '',
        marca: '',
        modelo: '',
        ano: '',
        placa: '',
        quilometragem: '',
        tp_combustivel: '',
        dt_aquisicao: '',
        status: ''
    })

    const handleChange = e=>{
        const {name, value} = e.target;
        setVeiculoSelecionado({
            ...veiculoSelecionado, [name]:value
        });
        console.log(veiculoSelecionado);
    }

    const pedidoPost = async () => {
        delete veiculoSelecionado.id;
        veiculoSelecionado.idade=parseInt(veiculoSelecionado.placa);
            await axios.post(baseUrl, veiculoSelecionado)
          .then(response => {
            setData(data.concat(response.data));
            onRequestClose();
          }).catch(error => {
            console.log(error);
          })
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
            <div className="modal-content bg-white shadow-lg rounded-lg">

                <div className="modal-header flex justify-between items-center px-6 py-4 bg-gray-50 rounded-t-lg">
                    <h3 className="modal-title text-lg font-semibold text-gray-900">Adicionar novo veículo</h3>
                    <button className="modal-close text-gray-500 hover:text-gray-700" onClick={onRequestClose}>
                        <span className="sr-only">Close</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="modal-body px-6 py-4">
                    <form class="p-4 md:p-5">
                        <div class="grid gap-4 mb-4 grid-cols-2">

                            <div class="col-span-2">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Modelo</label>
                                <input type="text" name="modelo" id="name" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Digite o modelo" required="" />
                            </div>

                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Placa</label>
                                <input type="number" name="placa" onChange={handleChange} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Digite a placa" required="" />
                            </div>

                            <div class="col-span-2 sm:col-span-1">
                                <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Tipo do Combustível</label>
                                <select id="category" name="tp_combustivel" onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5">
                                    <option selected="">Selecione um tipo</option>
                                    <option value="Gasolina Comum">Gasolina Comum</option>
                                    <option value="Etanol">Etanol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="Flex">Flex</option>
                                </select>
                            </div>

                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Marca</label>
                                <input type="number" name="marca" onChange={handleChange} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Digite a marca" required="" />
                            </div>

                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Ano</label>
                                <input type="number" name="ano" onChange={handleChange} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Digite o ano" required="" />
                            </div>

                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Quilometragem</label>
                                <input type="number" name="quilometragem" onChange={handleChange} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Digite a quilometragem atual" required="" />
                            </div>

                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Aquisição</label>
                                <input type="number" name="dt_aquisicao" onChange={handleChange} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Digite a data" required="" />
                            </div>

                            <div class="col-span-2 sm:col-span-1">
                                <label for="price" class="block mb-2 text-sm font-medium text-gray-900">Aquisição</label>
                                <input type="number" value={"D"} name="status" onChange={handleChange} id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Digite a data" required="" />
                            </div>

                        </div>

                        <div className="flex justify-between gap-4" style={{ marginTop: '3rem' }} onClick={onRequestClose}>
                            <button type="button" className="w-1/2 flex justify-center items-center text-gray-900 border bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
                                Cancelar
                            </button>

                            <button type="submit" onClick={()=>pedidoPost()} className="w-1/2 flex justify-center items-center text-white border bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">
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
