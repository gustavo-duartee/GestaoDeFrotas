import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function ModalCriarMulta({ isOpen, onRequestClose }) {
  //const [idviagem, setIdViagem] = useState(0);
  const [codigo, setCodigo] = useState("");
  const [dtmulta, setDtMulta] = useState("");
  const [tpinfracao, setTpInfracao] = useState("");
  const [valor, setValor] = useState(0);
  //const [ptscarteira, setPtsCarteira] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [veiculoid, setVeiculoId] = useState(0);
  const [getVeiculo, setVeiculos] = useState([]);
  const [veiculo, setVeiculo] = useState([]);

  const [erroCodigo, setErroCodigo] = useState("");
  const [erroDataMulta, setErroDataMulta] = useState("");
  const [erroValor, setErroValor] = useState("");

  const history = useNavigate();

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function saveMulta(event) {
    event.preventDefault();

    const status = "Disponível";

    const data = {
      //idviagem,
      codigo,
      dtmulta,
      tpinfracao,
      valor,
      //ptscarteira,
      descricao,
      veiculoid,
    };

    try {
      await api.post("api/multas", data, authorization);
      alert("Multa adicionada com sucesso!");
      history("/multas");
      window.location.reload();
    } catch (error) {
      alert("Erro ao adicionar multa: " + error);
    }
  }

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
  const onChange = (e) => {
    const [idVeiculo, veiculoName] = e.target.value.split(",");
    setVeiculo(veiculoName);
    setVeiculoId(idVeiculo);
    console.log("Veiculo ID: ", idVeiculo);
  };
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
      contentLabel="Example Modal"
      className="modal fixed inset-0 flex items-center justify-center overflow-auto"
      overlayClassName="modal-overlay fixed inset-0 z-40 bg-black bg-opacity-40"
      shouldCloseOnOverlayClick
    >
      <div className="modal-content bg-white shadow-lg rounded-lg w-full max-w-md ">
        <div className="modal-header flex justify-between items-center px-6 py-4 bg-gray-50 rounded-t-lg">
          <h3 className="modal-title text-lg font-semibold text-gray-900">
            Adicionar nova multa
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
          <form className="p-4 md:p-5" onSubmit={saveMulta}>
            <div className="grid mb-1 w-full">
              {/* <div className="col-span-2 mb-2">
                <label
                  htmlFor="idViagem"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  idViagem
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setIdViagem(e.target.value)}
                    name="idViagem"
                    id="idViagem"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o ID viagem"
                  />
                </div>
              </div> */}
              <div className="col-span-2 mb-2">
                <label
                  htmlFor="veiculo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Veículo
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <select
                    id="veiculo"
                    onChange={onChange}
                    name="veiculo"
                    className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="" disable selected>
                      Selecione um veículo
                    </option>
                    {getVeiculo.map((veiculo) => (
                      <option
                        value={
                          veiculo.id +
                          "," +
                          veiculo.marca +
                          " " +
                          veiculo.modelo
                        }
                      >
                        {veiculo.marca} {veiculo.modelo}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-span-2 mb-2">
                <label
                  htmlFor="codigo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Codigo
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => {
                      const codigoInput = e.target.value;
                      const regex = /^\d{3}-\d{2}$/;
                      if (regex.test(codigoInput)) {
                        setCodigo(codigoInput);
                        setErroCodigo("");
                      } else {
                        setErroCodigo(
                          "Código inválido. Formato esperado: 123-45."
                        );
                      }
                    }}
                    name="codigo"
                    id="codigo"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o codigo"
                  />
                  {erroCodigo && (
                    <p className="text-red-500 text-sm">{erroCodigo}</p>
                  )}
                </div>
              </div>
              <div className="col-span-2 mb-2">
                <label
                  htmlFor="dtmulta"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Data da Infração
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="date"
                    // onChange={(e) => {
                    //   const dataSelecionada = e.target.value;
                    //   const dataAtual = new Date().toISOString().split("T")[0];

                    //   setDtMulta(dataSelecionada);

                    //   if (dataSelecionada > dataAtual) {
                    //     setErroDataMulta(
                    //       "A data da infração não pode ser maior que a data atual."
                    //     );
                    //   } else {
                    //     setErroDataMulta("");
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

                      setDtMulta(dataSelecionada);

                      if (new Date(dataSelecionada) > dataAtualSemHoras) {
                        setErroDataMulta(
                          "A data da manutenção não pode ser maior que a data atual."
                        );
                      } else {
                        setErroDataMulta("");
                      }
                    }}
                    name="dtmulta"
                    id="dtmulta"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {erroDataMulta && (
                  <p className="text-red-500 text-sm mt-1">{erroDataMulta}</p>
                )}
              </div>
              <div className="col-span-2 mb-2">
                <label
                  htmlFor="tpinfracao"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Categoria
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <select
                    onChange={(e) => setTpInfracao(e.target.value)}
                    name="tpinfracao"
                    id="tpinfracao"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="" disabled selected>
                      Selecione uma opção
                    </option>
                    <option value="Leve">Leve</option>
                    <option value="Média">Média</option>
                    <option value="Grave">Grave</option>
                    <option value="Gravíssima">Gravíssima</option>
                  </select>
                </div>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="valor"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Valor
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    onChange={(e) => {
                      const valor = e.target.value;
                      setErroValor(valor);
                      setValor(valor);
                      validarValor(valor);
                    }} //setValor(e.target.value)}
                    name="valor"
                    id="valor"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o valor"
                  />
                </div>
                {erroValor && (
                  <p className="text-red-500 text-sm">{erroValor}</p>
                )}
              </div>

              {/* <div className="col-span-2 mb-2">
                <label
                  htmlFor="ptscarteira"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Pontos na Carteira
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    onChange={(e) => setPtsCarteira(e.target.value)}
                    name="ptscarteira"
                    id="ptscarteira"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite quantos pontos na carteira"
                  />
                </div>
              </div> */}

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="descricao"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Descrição
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setDescricao(e.target.value)}
                    name="descricao"
                    id="descricao"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite a descrição"
                  />
                </div>
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
                  display: erroCodigo || erroDataMulta ? "none" : "block",
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
