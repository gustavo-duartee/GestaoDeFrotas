import React, { useState, useEffect } from "react";
import { ModalCriarManutencao } from "../components/Manutencoes/ModalCriarManutencao";
import { ModalEditarManutencao } from "../components/Manutencoes/ModalEditarManutencao";
import { Sidebar } from "../components/Sidebar";
import api from "../services/api";
import { formatDatePreview } from "../functions";

export function Manutencoes() {
  const [filtro, setFiltro] = useState([]);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [manutencoes, setManutencoes] = useState([]);
  const [manutencaoId, setManutencaoId] = useState(null);

  const token = localStorage.getItem("token");

  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    api
      .get("api/Manutencoes", authorization)
      .then((response) => {
        setManutencoes(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter manutenção: ", error);
      });
  }, []);

  const searchManutencoes = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const dadosFiltrados = manutencoes.filter((item) => {
        return Object.values(item)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFiltro(dadosFiltrados);
    } else {
      setFiltro(manutencoes);
    }
  };

  const openEditModal = (id) => {
    setManutencaoId(id);
    setModalEditIsOpen(true); // Abre o modal de edição
  };

  const openCreateModal = () => {
    setModalCreateIsOpen(true); // Abre o modal de criação
  };

  const closeModal = () => {
    setModalCreateIsOpen(false); // Fecha o modal de criação
    setModalEditIsOpen(false); // Fecha o modal de edição
    setManutencaoId(null);
  };

  const editManutencao = async (id) => {
    try {
      console.log(`Editar manutancao com ID ${id}`);
      closeModal();
    } catch (error) {
      alert("Não foi possível editar a manutenção");
    }
  };

  const excluirManutencao = async (id) => {
    if (!window.confirm(`Deseja realmente excluir a manutenção ${id}?`)) {
      return;
    }
    try {
      await api.delete(`api/manutencoes/${id}`, authorization);
      alert("Manutencao excluido com sucesso!");
      window.location.reload();
    } catch (error) {
      let errorMessage = "Não foi possível deletar a manutenção";

      if (error.response) {
        const { data, status } = error.response;
        if (status === 400) {
          errorMessage = "Manutenção não encontrada";
        } else if (status >= 500) {
          errorMessage = "Falha na comunicação com o servidor";
        } else {
          errorMessage = data.message || errorMessage;
        }
      }
      alert(errorMessage);
    }
  };

  return (
    <div>
      <Sidebar />
      <div style={{ flex: 1, marginTop: "4rem", marginLeft: "16rem" }}>
        <div
          id="main-content"
          className="h-full w-full bg-gray-100 relative overflow-y-auto "
        >
          <main>
            <div className="pt-6 px-4">
              {/*Header da página*/}
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <h1 className="text-2xl font-medium tracking-tight text-gray-900">
                  Manutenções
                </h1>
                <div className="relative">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    onChange={(e) => searchManutencoes(e.target.value)}
                    id="table-search-users"
                    className="pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Pesquisar veículo"
                  />
                </div>
                <button
                  type="button"
                  onClick={openCreateModal}
                  className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Nova manutenção +
                </button>
              </div>

              {/* Corpo da página */}
              <div
                className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mb-20"
                style={{ maxHeight: "40rem", overflow: "auto" }}
              >
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  {/* Cabeçalho da tabela */}
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Data da Manutenção
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Próxima Manutenção
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Tipo da Manutenção
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Veículo
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Serviço
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Valor
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Descrição
                      </th>
                    </tr>
                  </thead>
                  {/* Linha da tabela */}
                  <tbody>
                    {searchInput.length > 1
                      ? filtro.map((manutencao) => (
                          <tr key={manutencao.id}>
                            <td className="px-6 py-4">
                              {manutencao.dt_manutencao}
                            </td>
                            <td className="px-6 py-4">
                              {manutencao.dt_prox_manutencao}
                            </td>
                            <td className="px-6 py-4">
                              {manutencao.tp_manutencao}
                            </td>
                            <td className="px-6 py-4">{manutencao.veiculo}</td>
                            <td className="px-6 py-4">{manutencao.servico}</td>
                            <td className="px-6 py-4">{manutencao.valor}</td>
                            <td className="px-6 py-4">
                              {manutencao.descricao}
                            </td>
                          </tr>
                        ))
                      : manutencoes.map((manutencao) => (
                          <tr key={manutencao.id}>
                            <td className="px-6 py-4">
                              {formatDatePreview(manutencao.dt_manutencao)}
                            </td>
                            <td className="px-6 py-4">
                              {formatDatePreview(manutencao.dt_prox_manutencao)}
                            </td>
                            <td className="px-6 py-4">
                              {manutencao.tp_manutencao}
                            </td>
                            <td className="px-6 py-4">{manutencao.veiculo}</td>
                            <td className="px-6 py-4">{manutencao.servico}</td>
                            <td className="px-6 py-4">{manutencao.valor}</td>
                            <td className="px-6 py-4">
                              {manutencao.descricao}
                            </td>
                            <div className="flex gap-2">
                              <button
                                type="button"
                                onClick={() => excluirManutencao(manutencao.id)}
                                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                Excluir
                              </button>
                              <button
                                type="button"
                                onClick={() => openEditModal(manutencao.id)}
                                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                              >
                                Editar
                              </button>
                            </div>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* Chamar modais pra tela */}
      <ModalEditarManutencao
        isOpen={modalEditIsOpen} // Passa o estado de abertura do modal de edição
        onRequestClose={closeModal} // Passa a função para fechar o modal de edição
        manutencaoId={manutencaoId}
        editManutencao={editManutencao}
      />
      <ModalCriarManutencao
        isOpen={modalCreateIsOpen} // Passa o estado de abertura do modal de criação
        onRequestClose={closeModal} // Passa a função para fechar o modal de criação
      />
    </div>
  );
}
