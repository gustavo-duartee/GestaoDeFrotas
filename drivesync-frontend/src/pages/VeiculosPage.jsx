import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import {ModalEditarVeiculo} from '../components/ModalEditarVeiculos'; // Importe o componente do modal
import api from '../services/api';

export function Veiculos() {
  const [searchInput, setSearchInput] = useState('');
  const [filtro, setFiltro] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [veiculoId, setVeiculoId] = useState(null);

  const token = localStorage.getItem('token');
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  useEffect(() => {
    api.get('api/veiculos', authorization)
      .then(response => {
        setVeiculos(response.data);
      })
      .catch(error => {
        console.error('Erro ao obter veículo: ', error);
      });
  }, []);

  const searchVeiculos = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const dadosFiltrados = veiculos.filter((item) => {
        return Object.values(item).join('').toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      });
      setFiltro(dadosFiltrados);
    }
    else {
      setFiltro(veiculos);
    }
  }

  const openEditModal = (id) => {
    setVeiculoId(id);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
    setVeiculoId(null);
  }

  const editVeiculo = async (id) => {
    try {
      console.log(`Editar veículo com ID: ${id}`);
      closeModal();
    } catch (error) {
      alert("Não foi possível editar o veículo")
    }
  }

  const excluirVeiculo = async (id) => {
    if (!window.confirm(`Deseja realmente excluir o veículo ${id}?`)) {
      return;
    }

    try {
      await api.delete(`api/veiculos/${id}`, authorization);
      alert("Veiculo excluído com sucesso!");
      window.location.reload();
    } catch (error) {
      let errorMessage = "Não foi possível deletar o veículo";

      if (error.response) {
        const { data, status } = error.response;
        if (status === 400) {
          errorMessage = "Veículo não encontrado";
        } else if (status >= 500) {
          errorMessage = "Falha na comunicação com o servidor";
        } else {
          errorMessage = data.message || errorMessage;
        }
      }

      alert(errorMessage);
    }
  }

  return (
    <div>
      <Sidebar />
      <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }} >
        <div id="main-content" className="h-full w-full bg-gray-100 relative overflow-y-auto ">
          <main>
            <div className="pt-6 px-4">
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <h1 class="text-2xl font-medium tracking-tight text-gray-900">Veículos</h1>
                <div class="relative">
                  <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" onChange={(e) => searchVeiculos(e.target.value)} id="table-search-users" class="pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500" placeholder="Pesquisar pela placa" />
                </div>
                <button type="button" class="text-white bg-gray-900 hover:bg-gray-700 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Novo Veículo +</button>
              </div>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mb-20" style={{ maxHeight: "40rem", overflow: "auto" }}>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
                    <tr>
                      <th scope="col" className="px-6 py-3">Placa</th>
                      <th scope="col" className="px-6 py-3">Marca</th>
                      <th scope="col" className="px-6 py-3">Modelo</th>
                      <th scope="col" className="px-6 py-3">Ano</th>
                      <th scope="col" className="px-6 py-3">Quilometragem</th>
                      <th scope="col" className="px-6 py-3">Aquisição</th>
                      <th scope="col" className="px-6 py-3">Tipo do Combustível</th>
                      <th scope="col" className="px-6 py-3">Status</th>
                      <th scope="col" className="px-6 py-3">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchInput.length > 1 ? (
                      filtro.map(veiculo => (
                        <tr key={veiculo.id} className="bg-white border-b">
                          <td className="px-6 py-4">{veiculo.placa}</td>
                          <td className="px-6 py-4">{veiculo.marca}</td>
                          <td className="px-6 py-4">{veiculo.modelo}</td>
                          <td className="px-6 py-4">{veiculo.ano}</td>
                          <td className="px-6 py-4">{veiculo.quilometragem}</td>
                          <td className="px-6 py-4">{veiculo.dt_aquisicao}</td>
                          <td className="px-6 py-4">{veiculo.tp_combustivel}</td>
                          <td className="px-6 py-4">{veiculo.status}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex gap-2">
                              <button type="button" onClick={() => excluirVeiculo(veiculo.id)} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Excluir</button>
                              <button type="button" onClick={() => openEditModal(veiculo.id)} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Editar</button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      veiculos.map(veiculo => (
                        <tr key={veiculo.id} className="bg-white border-b">
                          <td className="px-6 py-4">{veiculo.placa}</td>
                          <td className="px-6 py-4">{veiculo.marca}</td>
                          <td className="px-6 py-4">{veiculo.modelo}</td>
                          <td className="px-6 py-4">{veiculo.ano}</td>
                          <td className="px-6 py-4">{veiculo.quilometragem}</td>
                          <td className="px-6 py-4">{veiculo.dt_aquisicao}</td>
                          <td className="px-6 py-4">{veiculo.tp_combustivel}</td>
                          <td className="px-6 py-4">{veiculo.status}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex gap-2">
                              <button type="button" onClick={() => excluirVeiculo(veiculo.id)} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Excluir</button>
                              <button type="button" onClick={() => openEditModal(veiculo.id)} className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Editar</button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
      <ModalEditarVeiculo
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        veiculoId={veiculoId}
        editVeiculo={editVeiculo}
      />
    </div>
  );
}
