import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { formatDateEdit } from "../../functions";

export function ModalEditarVeiculo({
  isOpen,
  onRequestClose,
  veiculoId,
  editVeiculo,
}) {
  const [id, setId] = useState(null);
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState(0);
  const [placa, setPlaca] = useState("");
  const [quilometragem, setQuilometragem] = useState(0);
  const [tp_combustivel, setTpCombustivel] = useState("");
  const [dt_aquisicao, setDtAquisicao] = useState("");
  const [status, setStatus] = useState("");
  const [cap_passageiros, setCapPassageiros] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nmr_chassi, setNmrChassi] = useState("");
  const [renavam, setRenavam] = useState("");
  const [cor, setCor] = useState("");

  const [erroQuilometragem, setErroQuilometragem] = useState("");
  const [erroCapacidade, setErroCapacidade] = useState("");
  const [erroPlaca, setErroPlaca] = useState("");
  const [erroChassi, setErroChassi] = useState("");
  const [erroRenavam, setErroRenavam] = useState("");
  const [erroAno, setErroAno] = useState("");
  const [erroDtAquisicao, setErroDtAquisicao] = useState("");

  const history = useNavigate();

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (veiculoId) {
      loadVeiculo();
    }
  }, [veiculoId]);

  async function loadVeiculo() {
    try {
      const response = await api.get(
        `api/veiculos/${veiculoId}`,
        authorization
      );

      setId(response.data.id);
      setMarca(response.data.marca);
      setModelo(response.data.modelo);
      setAno(response.data.ano);
      setPlaca(response.data.placa);
      setQuilometragem(response.data.quilometragem);
      setTpCombustivel(response.data.tp_combustivel);
      setDtAquisicao(response.data.dt_aquisicao);
      setStatus(response.data.status);
      setCapPassageiros(response.data.cap_passageiros);
      setCategoria(response.data.categoria);
      setNmrChassi(response.data.nmr_chassi);
      setRenavam(response.data.renavam);
      setCor(response.data.cor);
    } catch (error) {
      alert("Erro ao recuperar o veículo " + error);
      history("/veiculos");
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
      status,
      cap_passageiros,
      categoria,
      nmr_chassi,
      renavam,
      cor,
    };

    try {
      data.id = id;
      await api.put(`api/veiculos/${id}`, data, authorization);
      editVeiculo(id);
      alert("Veiculo atualizado com sucesso!");
      window.location.reload();
    } catch (error) {
      alert(`Erro ao editar o veículo ${id}.`);
    }
    onRequestClose(); // Fechando o modal após a edição do veículo
  }

  const validarPlaca = (placa) => {
    const placaLimpa = placa.replace(/\s/g, "").toUpperCase();
    const regexPlacaAntiga = /^[A-Z]{3}-\d{4}$/;
    const regexPlacaNova = /^[A-Z]{3}\d{1}[A-Z]{1}\d{2}$/;

    return regexPlacaAntiga.test(placaLimpa) || regexPlacaNova.test(placaLimpa);
  };

  const anoAtual = new Date().getFullYear();

  const validarChassi = (chassi) => {
    const chassiLimpo = chassi.replace(/\s/g, "").toUpperCase();

    const regexChassi = /^[A-HJ-NPR-Z0-9]{17}$/;

    return regexChassi.test(chassiLimpo);
  };
  const validarRenavam = (renavam) => {
    const regexRenavam = /^\d{11}$/;
    return regexRenavam.test(renavam);
  };
  const validarCapacidade = (valor) => {
    const numero = parseInt(valor, 10);
    if (isNaN(numero) || numero < 1 || numero > 160) {
      setErroCapacidade("Capacidade deve ser um número entre 1 e 160.");
    } else {
      setErroCapacidade("");
    }
  };
  const validarQuilometragem = (valor) => {
    const numero = parseFloat(valor);
    if (isNaN(numero) || numero < 0) {
      setErroQuilometragem("Quilometragem deve ser maior ou igual a 1!");
    } else {
      setErroQuilometragem("");
    }
  };

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
            Editar Ônibus
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
          <form className="p-4 md:p-5" onSubmit={updateVeiculo}>
            <div className="grid mb-1 w-full">
              {/* Campos de edição habilitados para permitir a alteração */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="modelo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Modelo
                  </label>
                  <input
                    type="text"
                    name="modelo"
                    id="modelo"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                  />
                </div>
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="placa"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Placa
                  </label>
                  <input
                    type="text"
                    name="placa"
                    id="placa"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={placa}
                    onChange={(e) => {
                      const placaInput = e.target.value;
                      setPlaca(placaInput);
                      if (!validarPlaca(placaInput)) {
                        setErroPlaca(
                          "Placa inválida. Formato esperado: AAA-1234 ou ABC1D23."
                        );
                      } else {
                        setErroPlaca("");
                      }
                    }}
                  />
                  {erroPlaca && (
                    <p className="text-red-500 text-sm">{erroPlaca}</p>
                  )}
                </div>
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="tp_combustivel"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tipo do Combustível
                  </label>
                  <select
                    name="tp_combustivel"
                    id="tp_combustivel"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={tp_combustivel}
                    onChange={(e) => setTpCombustivel(e.target.value)}
                  >
                    <option value="Gasolina Comum">Gasolina Comum</option>
                    <option value="Etanol">Etanol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Flex">Flex</option>
                  </select>
                </div>
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="marca"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Fabricante
                  </label>
                  <input
                    type="text"
                    name="marca"
                    id="marca"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                  />
                </div>
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="ano"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ano de fabricação
                  </label>
                  <input
                    type="number"
                    onChange={(e) => {
                      const anoInput = parseInt(e.target.value, 10);
                      setAno(e.target.value);
                      if (anoInput < 1886 || anoInput > anoAtual) {
                        setErroAno(
                          "Ano inválido. Deve ser entre 1886 e o ano atual."
                        );
                      } else {
                        setErroAno("");
                      }
                    }}
                    name="ano"
                    id="ano"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={ano}
                    placeholder="Ex.: 2020"
                  />
                  {erroAno && <p className="text-red-500 text-sm">{erroAno}</p>}
                </div>
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="quilometragem"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Quilometragem
                  </label>
                  <input
                    type="number"
                    name="quilometragem"
                    id="quilometragem"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={quilometragem}
                    onChange={(e) => {
                      const valor = e.target.value;
                      setQuilometragem(valor);
                      validarQuilometragem(valor);
                    }}
                  />
                  {erroQuilometragem && (
                    <p className="text-red-500 text-sm">{erroQuilometragem}</p>
                  )}
                </div>
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="dt_aquisicao"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Data de Aquisição
                  </label>
                  <input
                    type="date"
                    name="dt_aquisicao"
                    id="dt_aquisicao"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={formatDateEdit(dt_aquisicao)}
                    onChange={(e) => {
                      const dataSelecionada = e.target.value;
                      const dataAtual = new Date();
                      const dataAtualSemHoras = new Date(
                        dataAtual.getFullYear(),
                        dataAtual.getMonth(),
                        dataAtual.getDate()
                      );

                      setDtAquisicao(dataSelecionada);

                      if (new Date(dataSelecionada) > dataAtualSemHoras) {
                        setErroDtAquisicao(
                          "A data de aquisição não pode ser maior que a data atual."
                        );
                      } else {
                        setErroDtAquisicao("");
                      }
                    }}
                  />
                  {erroDtAquisicao && (
                    <p className="text-red-500 text-sm mt-1">
                      {erroDtAquisicao}
                    </p>
                  )}
                </div>
                <div className="col-span-1 mb-2">
                  <label
                    htmlFor="cap_passageiros"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cap. de passageiros
                  </label>
                  <input
                    type="number"
                    name="cap_passageiros"
                    id="cap_passageiros"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={cap_passageiros}
                    onChange={(e) => {
                      const valor = e.target.value;
                      setCapPassageiros(valor);
                      validarCapacidade(valor);
                    }}
                  />
                  {erroCapacidade && (
                    <p className="text-red-500 text-sm">{erroCapacidade}</p>
                  )}
                </div>
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="categoria"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Categoria
                  </label>
                  <select
                    name="categoria"
                    id="categoria"
                    onChange={(e) => setCategoria(e.target.value)}
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="Micro-ônibus">Micro-ônibus</option>
                    <option value="Miniônibus">Miniônibus</option>
                    <option value="Midiônibus">Midiônibus</option>
                    <option value="Ônibus básico">Ônibus básico</option>
                    <option value="Ônibus padron">Ônibus padron</option>
                    <option value="Ônibus articulado">Ônibus articulado</option>
                    <option value="Ônibus biarticulado">
                      Ônibus biarticulado
                    </option>
                  </select>
                </div>{" "}
                <div className="col-span-1 mb-2">
                  <label
                    htmlFor="cor"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cor
                  </label>
                  <select
                    id="cor"
                    type="text"
                    onChange={(e) => setCor(e.target.value)}
                    name="cor"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={cor}
                  >
                    <option value="" disabled selected>
                      Selecione uma cor
                    </option>
                    <option value="Amarelo">Amarelo</option>
                    <option value="Branco">Branco</option>
                    <option value="Laranja">Laranja</option>
                    <option value="Preto">Preto</option>
                    <option value="Roxo">Roxo</option>
                    <option value="Verde">Verde</option>
                    <option value="Vermelho">Vermelho</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div className="col-span-1 mb-2">
                  <label
                    htmlFor="renavam"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Renavam
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="number"
                      onChange={(e) => {
                        const renavamInput = e.target.value;
                        setRenavam(renavamInput);
                        if (!validarRenavam(renavamInput)) {
                          setErroRenavam(
                            "Renavam inválido. Deve ter 11 dígitos."
                          );
                        } else {
                          setErroRenavam("");
                        }
                      }}
                      name="renavam"
                      id="renavam"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={renavam}
                      placeholder="Ex.: 96985826040"
                    />
                    {erroRenavam && (
                      <p className="text-red-500 text-sm">{erroRenavam}</p>
                    )}
                  </div>
                </div>
                <div className="col-span-1 mb-2 mr-3">
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Status
                  </label>
                  <select
                    name="status"
                    id="status"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Em uso">Em uso</option>
                    <option value="Disponivel">Disponível</option>
                    <option value="Manutencao">Manutenção</option>
                  </select>
                </div>
                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="nmr_chassi"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Número do Chassi
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm">
                    <input
                      type="string"
                      onChange={(e) => {
                        const chassiInput = e.target.value;
                        setNmrChassi(chassiInput);
                        if (!validarChassi(chassiInput)) {
                          setErroChassi(
                            "Chassi inválido. Formato esperado: 17 caracteres (sem I, O, Q)."
                          );
                        } else {
                          setErroChassi("");
                        }
                      }}
                      name="nmr_chassi"
                      id="nmr_chassi"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={nmr_chassi}
                      placeholder="Ex.: 9BD111060T5002156"
                    />
                    {erroChassi && (
                      <p className="text-red-500 text-sm">{erroChassi}</p>
                    )}
                  </div>
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
                id="btnSalvar"
                className="w-1/2 flex justify-center items-center text-white border bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                style={{
                  display:
                    erroPlaca ||
                    erroAno ||
                    erroCapacidade ||
                    erroQuilometragem ||
                    erroRenavam ||
                    erroChassi ||
                    erroDtAquisicao
                      ? "none"
                      : "block",
                }}
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
