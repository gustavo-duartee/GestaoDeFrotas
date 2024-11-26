import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { formatDateEdit } from "../../functions";

export function ModalEditarManutencao({
  isOpen,
  onRequestClose,
  manutencaoId,
  editManutencao,
}) {
  const [id, setId] = useState(null);
  const [dt_manutencao, setDtManutencao] = useState("");
  const [dt_prox_manutencao, setProxDtManutencao] = useState("");
  const [tp_manutencao, setTpManutencao] = useState("");
  const [veiculo, setVeiculo] = useState("");
  const [veiculoId, setVeiculoId] = useState("");
  const [servico, setServico] = useState("");
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [getVeiculo, setVeiculos] = useState([]);

  const [erroDt_manutencao, setErroDt_manutencao] = useState("");
  const [erroDt_prox_manutencao, setErroDt_prox_manutencao] = useState("");
  const [erroValor, setErroValor] = useState("");

  const history = useNavigate();

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const opcoes = [
    "Manutenção Preventiva",
    "Manutenção Corretiva",
    "Manutenção Preditiva",
    "Manutenção Detectiva",
  ];

  useEffect(() => {
    if (manutencaoId) {
      loadManutencao();
    }
  }, [manutencaoId]);

  async function loadManutencao() {
    try {
      const response = await api.get(
        `api/Manutencoes/${manutencaoId}`,
        authorization
      );

      setId(response.data.id);
      setDtManutencao(response.data.dt_manutencao);
      setProxDtManutencao(response.data.dt_prox_manutencao);
      setTpManutencao(response.data.tp_manutencao);
      setVeiculo(response.data.veiculo);
      setVeiculoId(response.data.veiculoId);
      setServico(response.data.servico);
      setValor(response.data.valor);
      setDescricao(response.data.descricao);
    } catch (error) {
      alert("Erro ao recuperar o manutenção " + error);
      history("/manutencoes");
    }
  }

  const opcoesFiltradas = opcoes.filter((opcao) => opcao !== tp_manutencao);

  useEffect(() => {
    api
      .get("api/veiculos", authorization)
      .then((response) => {
        setVeiculos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter veiculo: ", error);
      });
  }, []);

  async function updateManutencao(event) {
    event.preventDefault();

    const data = {
      dt_manutencao,
      dt_prox_manutencao,
      tp_manutencao,
      veiculo,
      veiculoId,
      servico,
      valor,
      descricao,
    };

    try {
      data.id = id;
      await api.put(`api/Manutencoes/${id}`, data, authorization);
      editManutencao(id);
      alert("Manutenção atualizado com sucesso!");
      window.location.reload();
    } catch (error) {
      alert("Erro ao editar manutenção. ");
    }
    onRequestClose(); // Fechando o modal após a edição do manutenção
  }
  const validarValor = (valor) => {
    const numero = parseFloat(valor);
    if (isNaN(numero) || numero <= 0) {
      setErroValor("O valor deve ser maior ou igual a 1!");
    } else {
      setErroValor("");
    }
  };

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
          <h3 className="modal-title text-lg font-semibold text-gray-900">
            Editar manutenção
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
          <form className="p-4 md:p-5" onSubmit={updateManutencao}>
            <div className="grid mb-1 w-full">
              {/* Campos de edição habilitados para permitir a alteração */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="dt_manutencao"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Data da Manutenção
                  </label>
                  <input
                    required
                    type="date"
                    name="dt_manutencao"
                    id="dt_manutencao"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formatDateEdit(dt_manutencao)}
                    //onChange={(e) => setDtManutencao(e.target.value)}
                    onChange={(e) => {
                      const dataSelecionada = e.target.value;
                      const dataAtual = new Date();
                      const dataAtualSemHoras = new Date(
                        dataAtual.getFullYear(),
                        dataAtual.getMonth(),
                        dataAtual.getDate()
                      );

                      setDtManutencao(dataSelecionada);

                      if (new Date(dataSelecionada) > dataAtualSemHoras) {
                        setErroDt_manutencao(
                          "A data da manutenção não pode ser maior que a data atual."
                        );
                      } else {
                        setErroDt_manutencao("");
                      }
                    }}
                  />
                  {erroDt_manutencao && (
                    <p className="text-red-500 text-sm mt-1">
                      {erroDt_manutencao}
                    </p>
                  )}
                </div>
                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="dt_prox_manutencao"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Data da Próxima Manutenção
                  </label>
                  <input
                    required
                    type="date"
                    name="dt_prox_manutencao"
                    id="dt_prox_manutencao"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formatDateEdit(dt_prox_manutencao)}
                    //onChange={(e) => setProxDtManutencao(e.target.value)}
                    onChange={(e) => {
                      const dataSelecionada = e.target.value;
                      const dataAtual = new Date();
                      const dataAtualSemHoras = new Date(
                        dataAtual.getFullYear(),
                        dataAtual.getMonth(),
                        dataAtual.getDate()
                      );

                      setProxDtManutencao(dataSelecionada);

                      if (new Date(dataSelecionada) < dataAtualSemHoras) {
                        setErroDt_prox_manutencao(
                          "A data da próxima manutenção não pode ser menor que a data atual."
                        );
                      } else {
                        setErroDt_prox_manutencao("");
                      }
                    }}
                  />
                  {erroDt_prox_manutencao && (
                    <p className="text-red-500 text-sm mt-1">
                      {erroDt_prox_manutencao}
                    </p>
                  )}
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="tp_manutencao"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tipo da Manutenção
                  </label>
                  <select
                    id="tp_manutencao"
                    name="tp_manutencao"
                    onChange={(e) => setTpManutencao(e.target.value)}
                    placeholder="Selecione um tipo"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value={tp_manutencao}>{tp_manutencao}</option>
                    {opcoesFiltradas.map((opcao) => (
                      <option key={opcao} value={opcao}>
                        {opcao}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="veiculoId"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Veículo
                  </label>
                  <select
                    id="veiculoId"
                    name="veiculoId"
                    onChange={(e) => setVeiculoId(e.target.value)}
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    {/* Opção selecionada, que vem do banco de dados */}
                    <option value={veiculoId} selected>
                      {
                        getVeiculo.find((veiculo) => veiculo.id === veiculoId)
                          ?.marca
                      }{" "}
                      {
                        getVeiculo.find((veiculo) => veiculo.id === veiculoId)
                          ?.modelo
                      }
                    </option>

                    {/* Opções filtradas, excluindo a opção selecionada */}
                    {getVeiculo
                      .filter((veiculo) => veiculo.id !== veiculoId)
                      .map((veiculo) => (
                        <option key={veiculo.id} value={veiculo.id}>
                          {veiculo.marca} {veiculo.modelo}
                        </option>
                      ))}
                  </select>
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="servico"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Serviço
                  </label>
                  <input
                    required
                    type="text"
                    name="servico"
                    id="servico"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={servico}
                    onChange={(e) => setServico(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="valor"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Valor
                  </label>
                  <input
                    required
                    type="number"
                    name="valor"
                    id="valor"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={valor}
                    //onChange={(e) => setValor(e.target.value)}
                    onChange={(e) => {
                      const valor = e.target.value;
                      setErroValor(valor);
                      setValor(valor);
                      validarValor(valor);
                    }}
                  />
                  {erroValor && (
                    <p className="text-red-500 text-sm">{erroValor}</p>
                  )}
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="descricao"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Descrição
                  </label>
                  <input
                    required
                    type="text"
                    name="descricao"
                    id="descricao"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
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
