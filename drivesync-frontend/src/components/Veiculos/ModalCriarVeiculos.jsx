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
  const [cap_passageiros, setCapPassageiros] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nmr_chassi, setNmrChassi] = useState("");
  const [renavam, setRenavam] = useState("");
  const [cor, setCor] = useState("");
  const [erroAno, setErroAno] = useState("");
  const [erroDtAquisicao, setErroDtAquisicao] = useState("");
  const [erroPlaca, setErroPlaca] = useState("");
  const [erroRenavam, setErroRenavam] = useState("");
  const [erroChassi, setErroChassi] = useState("");
  const [erroCapacidade, setErroCapacidade] = useState("");
  const [erroQuilometragem, setErroQuilometragem] = useState("");

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
      cap_passageiros,
      categoria,
      nmr_chassi,
      renavam,
      cor,
    };

    try {
      await api.post("api/veiculos", data, authorization);
      alert("Veículo adicionado com sucesso!");
      history("/veiculos");
      window.location.reload();
    } catch (error) {
      alert(
        "Erro ao adicionar veículo. Verifique se os campos estão preenchidos corretamente.: " +
          error
      );
    }
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
  // const validarDataAquisicao = (data) => {
  //   const dataAtual = new Date().toISOString().split("T")[0]; // Formato 'YYYY-MM-DD' para comparar com o input

  //   if (data > dataAtual) {
  //     setErroDtAquisicao(
  //       "A data de aquisição não pode ser maior que a data atual."
  //     );
  //   } else {
  //     setErroDtAquisicao("");
  //   }
  // };

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
            Adicionar novo Ônibus
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
              <div className="col-span-1 mb-2 mr-3">
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
                    placeholder="Ex: Sprinter"
                  />
                </div>
              </div>

              <div className="col-span-1 mb-2">
                <label
                  htmlFor="placa"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Placa
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
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
                    value={placa}
                    name="placa"
                    id="placa"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ex.: MZT-6398"
                  />
                </div>
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
                  id="tp_combustivel"
                  onChange={(e) => setTpCombustivel(e.target.value)}
                  name="tp_combustivel"
                  className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected>
                    Selecione uma opção
                  </option>
                  <option value="Gasolina Comum">Gasolina Comum</option>
                  <option value="Etanol">Etanol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Flex">Flex</option>
                </select>
              </div>

              <div className="col-span-1 mb-2">
                <label
                  htmlFor="marca"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Fabricante
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setMarca(e.target.value)}
                    name="marca"
                    id="marca"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ex.: Mercedes Benz"
                  />
                </div>
              </div>

              <div className="col-span-1 mb-2 mr-3">
                <label
                  htmlFor="ano"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ano de fabricação
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
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
                    placeholder="Ex.: 2024"
                    min={1886}
                    max={anoAtual}
                  />
                  {erroAno && <p className="text-red-500 text-sm">{erroAno}</p>}
                </div>
              </div>

              <div className="col-span-1 mb-2">
                <label
                  htmlFor="quilometragem"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Quilometragem
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    onChange={(e) => {
                      const valor = e.target.value;
                      setQuilometragem(valor);
                      validarQuilometragem(valor);
                    }}
                    name="quilometragem"
                    id="quilometragem"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ex.: 78400"
                  />
                </div>
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
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="date"
                    // onChange={(e) => {
                    //   const dataSelecionada = e.target.value;
                    //   const dataAtual = new Date().toISOString().split("T")[0];

                    //   setDtAquisicao(dataSelecionada);

                    //   if (dataSelecionada > dataAtual) {
                    //     setErroDtAquisicao(
                    //       "A data de aquisição não pode ser maior que a data atual."
                    //     );
                    //   } else {
                    //     setErroDtAquisicao("");
                    //   }
                    // }}
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
                    name="dt_aquisicao"
                    id="dt_aquisicao"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {erroDtAquisicao && (
                  <p className="text-red-500 text-sm mt-1">{erroDtAquisicao}</p>
                )}
              </div>
              <div className="col-span-1 mb-2">
                <label
                  htmlFor="cap_passageiros"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cap. de Passageiros
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    onChange={(e) => {
                      const valor = e.target.value;
                      setCapPassageiros(valor);
                      validarCapacidade(valor);
                    }}
                    name="cap_passageiros"
                    id="cap_passageiros"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Ex.: 50"
                  />
                </div>
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
                  id="categoria"
                  onChange={(e) => setCategoria(e.target.value)}
                  name="categoria"
                  className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="" disabled selected>
                    Selecione uma opção
                  </option>
                  {/* https://www.portaldotransito.com.br/noticias/mobilidade-e-tecnologia/transporte-coletivo/qual-e-o-limite-de-passageiros-em-onibus-urbanos/ */}
                  {/* <option value="Urbano">Urbano</option>
                  <option value="Rodoviário">Rodoviário</option>
                  <option value="Micro-Õnibus">Micro-Ônibus</option> */}

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
              </div>
              <div className="col-span-1 mb-2">
                <label
                  htmlFor="cor"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cor
                </label>
                <select
                  id="cor"
                  onChange={(e) => setCor(e.target.value)}
                  name="cor"
                  className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="renavam"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Renavam
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
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
                    placeholder="Ex.: 12345678901"
                  />
                </div>
                {erroRenavam && (
                  <p className="text-red-500 text-sm">{erroRenavam}</p>
                )}
              </div>
              <div className="col-span-2 mb-2">
                <label
                  htmlFor="nmr_chassi"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Chassi
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
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
                    placeholder="Ex.: 9BD111060T5002156"
                  />
                </div>
                {erroChassi && (
                  <p className="text-red-500 text-sm">{erroChassi}</p>
                )}
              </div>
            </div>

            <div className="flex justify-between gap-2 mt-8">
              <button
                type="button"
                onClick={onRequestClose}
                className="w-1/2 flex justify-center items-center text-gray-900 border bg-white hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Cancelar
              </button>

              <button
                type="submit"
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
                {/* <svg
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
                </svg> */}
                Adicionar
              </button>
            </div>
          </form>
        </div>
      </div>
    </ReactModal>
  );
}
