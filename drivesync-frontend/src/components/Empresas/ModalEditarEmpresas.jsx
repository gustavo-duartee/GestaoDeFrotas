import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

export function ModalEditarEmpresa({
  isOpen,
  onRequestClose,
  empresaId,
  editEmpresa,
}) {
  const [id, setId] = useState(null);
  const [nome, setNome] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data_cadastro, setData_cadastro] = useState("");

  const history = useNavigate();

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (empresaId) {
      loadEmpresa();
    }
  }, [empresaId]);

  async function loadEmpresa() {
    try {
      const response = await api.get(
        `api/empresas/${empresaId}`,
        authorization
      );

      setId(response.data.id);
      setNome(response.data.nome);
      setCNPJ(response.data.cnpj);
      setEndereco(response.data.endereco);
      setEmail(response.data.email);
      setTelefone(response.data.telefone);
      setData_cadastro(response.data.data_cadastro);
    } catch (error) {
      alert("Erro ao recuperar a empresa " + error);
      history("/empresas");
    }
  }

  async function updateEmpresa(event) {
    event.preventDefault();

    const data = {
      nome,
      cnpj,
      endereco,
      email,
      telefone,
      data_cadastro,
    };

    try {
      data.id = id;
      await api.put(`api/empresas/${id}`, data, authorization);
      editEmpresa(id);
      alert("Empresa atualizado com sucesso!");
      window.location.reload();
    } catch (error) {
      alert("Erro ao editar empresa. ");
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
          <h3 className="modal-title text-lg font-semibold text-gray-900">
            Editar empresa
          </h3>
          <button
            onClick={onRequestClose}
            className="modal-close text-gray-500 hover:text-gray-700"
          >
            <span className="sr-only">Fechar</span>
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <hr />

        <div className="modal-body px-5 py-0 ">
          <form className="p-4 md:p-5" onSubmit={updateEmpresa}>
            <div className="grid mb-1 w-full">
              {/* Campos de edição habilitados para permitir a alteração */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="nome"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="cnpj"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    CNPJ
                  </label>
                  <input
                    type="text"
                    name="cnpj"
                    id="cnpj"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={cnpj}
                    onChange={(e) => setCNPJ(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="endereco"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Endereco
                  </label>
                  <input
                    type="text"
                    name="endereco"
                    id="endereco"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="telefone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Telefone
                  </label>
                  <input
                    type="number"
                    name="telefone"
                    id="telefone"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="data_cadastro"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Data de Cadastro
                  </label>
                  <input
                    type="date"
                    name="data_cadastro"
                    id="data_cadastro"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={data_cadastro}
                    onChange={(e) => setData_cadastro(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-2 mt-8">
              <button
                onClick={onRequestClose}
                className="w-1/2 flex justify-center items-center text-gray-900 border bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="w-1/2 flex justify-center items-center text-white border bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </ReactModal>
  );
}
