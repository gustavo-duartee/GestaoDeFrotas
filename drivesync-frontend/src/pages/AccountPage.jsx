import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";
import { ModalCriarAccount } from "../components/Accounts/ModalCriarAccounts";
import { ModalEditarAccount } from "../components/Accounts/ModalEditarAccounts";
import api from "../services/api";

export function Accounts() {
  const [searchInput, setSearchInput] = useState("");
  const [filtro, setFiltro] = useState([]);
  const [Accounts, setAccounts] = useState([]);
  const [modalCreateIsOpen, setModalCreateIsOpen] = useState(false);
  //const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
  const [AccountId, setAccountId] = useState(null);

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    api
      .get("api/Account", authorization)
      .then((response) => {
        setAccounts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter Account: ", error);
      });
  }, []);

  const searchAccounts = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const dadosFiltrados = Accounts.filter((item) => {
        return Object.values(item)
          .join("")
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase());
      });
      setFiltro(dadosFiltrados);
    } else {
      setFiltro(Accounts);
    }
  };

  const openEditModal = (id) => {
    setAccountId(id);
    setModalEditIsOpen(true); // Abre o modal de edição
  };

  const openCreateModal = () => {
    setModalCreateIsOpen(true); // Abre o modal de criação
  };

  const closeModal = () => {
    setModalCreateIsOpen(false); // Fecha o modal de criação
    setModalEditIsOpen(false); // Fecha o modal de edição
    setAccountId(null);
  };

  const editAccount = async (id) => {
    try {
      console.log(`Editar Account com ID: ${id}`);
      closeModal();
    } catch (error) {
      alert("Não foi possível editar a Account");
    }
  };

  const excluirAccount = async (id) => {
    if (!window.confirm(`Deseja realmente excluir a Account ${id}?`)) {
      return;
    }

    try {
      await api.delete(`api/Account/${id}`, authorization);
      alert("Account excluído com sucesso!");
      window.location.reload();
    } catch (error) {
      let errorMessage = "Não foi possível deletar a Account";

      if (error.response) {
        const { data, status } = error.response;
        if (status === 400) {
          errorMessage = "Account não encontrado";
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
              {/* Header da página */}
              <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <h1 className="text-2xl font-medium tracking-tight text-gray-900">
                  Accounts
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
                    onChange={(e) => searchAccounts(e.target.value)}
                    id="table-search-users"
                    className="pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-white focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Pesquisar Account"
                  />
                </div>
                <button
                  type="button"
                  onClick={openCreateModal}
                  className="text-white bg-gray-900 hover:bg-gray-700 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Nova Account +
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
                        Nome
                      </th>
                      <th scope="col" className="px-6 py-3">
                        CNPJ
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Endereço
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Telefone
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Data Cadastro
                      </th>
                    </tr>
                  </thead>
                  {/* Linha da tabela */}
                  <tbody>
                    {searchInput.length > 1
                      ? filtro.map((Account) => (
                          <tr key={Account.id} className="bg-white border-b">
                            <td className="px-6 py-4">{Account.nome}</td>
                            <td className="px-6 py-4">{Account.CNPJ}</td>
                            <td className="px-6 py-4">{Account.endereco}</td>
                            <td className="px-6 py-4">{Account.telefone}</td>
                            <td className="px-6 py-4">{Account.email}</td>
                            <td className="px-6 py-4">
                              {Account.data_cadastro}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => excluirAccount(Account.id)}
                                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  Excluir
                                </button>
                                <button
                                  type="button"
                                  onClick={() => openEditModal(Account.id)}
                                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  Editar
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      : Accounts.map((Account) => (
                          <tr key={Account.id} className="bg-white border-b">
                            <td className="px-6 py-4">{Account.nome}</td>
                            <td className="px-6 py-4">{Account.cnpj}</td>
                            <td className="px-6 py-4">{Account.endereco}</td>
                            <td className="px-6 py-4">{Account.telefone}</td>
                            <td className="px-6 py-4">{Account.email}</td>
                            <td className="px-6 py-4">
                              {Account.data_cadastro}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <div className="flex gap-2">
                                {/* <button
                                  type="button"
                                  onClick={() => excluirAccount(Account.id)}
                                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  Excluir
                                </button>
                                <button
                                  type="button"
                                  onClick={() => openEditModal(Account.id)}
                                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  Editar
                                </button> */}
                              </div>
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

      {/* Chamando os modais na tela */}
      <ModalEditarAccount
        isOpen={modalEditIsOpen} // Passa o estado de abertura do modal de edição
        onRequestClose={closeModal} // Passa a função para fechar o modal de edição
        AccountId={AccountId}
        editAccount={editAccount}
      />
      <ModalCriarAccount
        isOpen={modalCreateIsOpen} // Passa o estado de abertura do modal de criação
        onRequestClose={closeModal} // Passa a função para fechar o modal de criação
      />
    </div>
  );
}