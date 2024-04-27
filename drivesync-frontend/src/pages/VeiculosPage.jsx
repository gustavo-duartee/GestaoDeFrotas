import React, { useState, useEffect } from "react";
import { ModalComponent } from "../components/ModalCriarVeiculos";
import { ModalEditarVeiculo } from "../components/ModalEditarVeículo";
import { useNavigate } from "react-router-dom";

import api from '../services/api';

import { Sidebar } from "../components/Sidebar";

export function Veiculos() {
  const [veiculos, setVeiculos] = useState([]);
  const [modalCriarIsOpen, setModalCriarIsOpen] = useState(false);
  const [selectedVeiculoId, setSelectedVeiculoId] = useState(null);
  const [modalEditarIsOpen, setModalEditarIsOpen] = useState(false);

  const history = useNavigate();
  const token = localStorage.getItem('token');

  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    api.get('api/veiculos', authorization).then(
      response => {
        setVeiculos(response.data);
      }).catch(error => {
        console.error('Erro ao obter veículo: ', error);
      });
  }, []);

  async function editVeiculo(id) {
    try {
      setSelectedVeiculoId(id);
      setModalEditarIsOpen(true);
    } catch (error) {
      alert("Não foi possível editar o veículo")
    }
  }

  return (
    <div>
      <Sidebar />
      <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }} >

        <div id="main-content" className="h-full w-full bg-gray-100 relative overflow-y-auto ">
          <main>
            <div className="pt-6 px-4">

              {/* Título e Botão */}
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <h1 class="text-2xl font-medium tracking-tight text-gray-900">Veículos</h1>

                <div class="relative">
                  <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" id="table-search-users" class="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar pela placa" />
                </div>

                <button onClick={() => setModalCriarIsOpen(true)} type="button" class="text-white bg-gray-900 hover:bg-gray-700 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Novo Veículo +</button>
              </div>

              <ModalComponent
                isOpen={modalCriarIsOpen}
                onRequestClose={() => setModalCriarIsOpen(false)}
              />

              <ModalEditarVeiculo
                isOpen={modalEditarIsOpen}
                selectedVeiculoId={selectedVeiculoId}
                onRequestClose={() => setModalEditarIsOpen(false)}
              />

              <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white" style={{ maxHeight: "40rem", overflow: "auto" }}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500" style={{ height: "40rem" }}>

                  {/* Cabeçalho da tabela */}
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Placa
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Marca
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Modelo
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Ano
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Quilometragem
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Aquisição
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Tipo do Combustível
                          <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg></a>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <div className="flex items-center">
                          Status
                          <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg></a>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Editar</span>
                      </th>

                    </tr>
                  </thead>

                  {/* Linha da tabela */}
                  <tbody>
                    {veiculos.map(veiculo => (
                      <tr key={veiculo.id} className="bg-white border-b">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                          {veiculo.placa}
                        </th>
                        <td className="px-6 py-4">
                          {veiculo.marca}

                        </td>
                        <td className="px-6 py-4">
                          {veiculo.modelo}

                        </td>
                        <td className="px-6 py-4">
                          {veiculo.ano}

                        </td>
                        <td className="px-6 py-4">
                          {veiculo.quilometragem}
                        </td>
                        <td className="px-6 py-4">
                          {veiculo.dt_aquisicao}

                        </td>
                        <td className="px-6 py-4">
                          {veiculo.tp_combustivel}
                        </td>
                        <td className="px-6 py-4">
                          {veiculo.status}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Excluir</button>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button type="button" onClick={() => setModalEditarIsOpen(veiculo.id)} class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Editar</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
