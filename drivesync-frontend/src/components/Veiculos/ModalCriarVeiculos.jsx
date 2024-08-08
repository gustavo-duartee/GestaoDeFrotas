import React, { useState } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function ModalCriarVeiculo({ isOpen, onRequestClose }) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [placa, setPlaca] = useState("");
  const [quilometragem, setQuilometragem] = useState("");
  const [tp_combustivel, setTpCombustivel] = useState("");
  const [dt_aquisicao, setDtAquisicao] = useState("");

  const history = useNavigate();

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function saveVeiculo(event) {
    event.preventDefault();

    const status = "Disponível";

    const data = {
      marca,
      modelo,
      ano,
      placa,
      quilometragem,
      tp_combustivel,
      dt_aquisicao,
      status,
    };

    try {
      await api.post("api/veiculos", data, authorization);
      alert("Veículo adicionado com sucesso!");
      history("/veiculos");
      window.location.reload();
    } catch (error) {
      alert("Erro ao adicionar veículo: " + error);
    }
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
          <h3 className="modal-title text-lg font-semibold text-gray-900">
            Adicionar novo veículo
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

        <hr></hr>

        <div className="modal-body px-5 py-0 ">
          <form className="p-4 md:p-5" onSubmit={saveVeiculo}>
            <div className="grid mb-1 w-full">
              <div className="col-span-2 mb-2">
                <label
                  htmlFor="modelo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Modelo
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setModelo(e.target.value)}
                    name="modelo"
                    id="modelo"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o modelo"
                  />
                </div>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="placa"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Placa
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setPlaca(e.target.value)}
                    name="placa"
                    id="placa"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite a placa"
                  />
                </div>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="tp_combustivel"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Tipo do Combustível
                </label>
                <select
                  id="tp_combustivel"
                  onChange={(e) => setTpCombustivel(e.target.value)}
                  name="tp_combustivel"
                  className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="Gasolina Comum">Gasolina Comum</option>
                  <option value="Etanol">Etanol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Flex">Flex</option>
                </select>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="marca"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Marca
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setMarca(e.target.value)}
                    name="marca"
                    id="marca"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite a marca"
                  />
                </div>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="ano"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ano
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    onChange={(e) => setAno(e.target.value)}
                    name="ano"
                    id="ano"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o ano"
                  />
                </div>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="quilometragem"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Quilometragem
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    onChange={(e) => setQuilometragem(e.target.value)}
                    name="quilometragem"
                    id="quilometragem"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite a quilometragem"
                  />
                </div>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="dt_aquisicao"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Data de Aquisição
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="date"
                    onChange={(e) => setDtAquisicao(e.target.value)}
                    name="dt_aquisicao"
                    id="dt_aquisicao"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite a data"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-2 mt-8">
              <button
                type="button"
                className="w-1/2 flex justify-center items-center text-gray-900 border bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="w-1/2 flex justify-center items-center text-white border bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                <svg
                  className="me-1 -ms-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  ></path>
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
