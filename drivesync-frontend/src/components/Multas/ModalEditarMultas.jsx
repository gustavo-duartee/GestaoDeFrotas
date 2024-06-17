import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

export function ModalEditarMulta({
  isOpen,
  onRequestClose,
  multaId,
  editMulta,
}) {
  const [id, setId] = useState(null);
  //const [idviagem, setIdViagem] = useState(0);
  const [codigo, setCodigo] = useState("");
  const [dtmulta, setDtMulta] = useState("");
  const [tpinfracao, setTpInfracao] = useState("");
  const [valor, setValor] = useState(0);
  const [ptscarteira, setPtsCarteira] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [veiculoid, setVeiculoId] = useState(0);

  const history = useNavigate();

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (multaId) {
      loadMulta();
    }
  }, [multaId]);

  async function loadMulta() {
    try {
      const response = await api.get(`api/multas/${multaId}`, authorization);

      setId(response.data.id);
      //setIdViagem(response.data.idviagem);
      setCodigo(response.data.codigo);
      setDtMulta(response.data.dtmulta);
      setTpInfracao(response.data.tpinfracao);
      setValor(response.data.valor);
      setPtsCarteira(response.data.ptscarteira);
      setDescricao(response.data.descricao);
      setVeiculoId(response.data.veiculoid);
    } catch (error) {
      alert("Erro ao recuperar a multa " + error);
      history("/multas");
    }
  }

  async function updateMulta(event) {
    event.preventDefault();

    const data = {
      // idviagem,
      codigo,
      dtmulta,
      tpinfracao,
      valor,
      ptscarteira,
      descricao,
      veiculoid,
    };

    try {
      data.id = id;
      await api.put(`api/multas/${id}`, data, authorization);
      editMulta(id);
      alert("Multa atualizado com sucesso!");
      window.location.reload();
    } catch (error) {
      alert("Erro ao editar multa. ");
    }
    onRequestClose(); // Fechando o modal após a edição do multa
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Editar multa"
      className="modal fixed inset-0 flex items-center justify-center overflow-auto"
      overlayClassName="modal-overlay fixed inset-0 z-40 bg-black bg-opacity-40"
      shouldCloseOnOverlayClick
    >
      <div className="modal-content bg-white shadow-lg rounded-lg w-full max-w-md">
        <div className="modal-header flex justify-between items-center px-6 py-4 bg-gray-50 rounded-t-lg">
          <h3 className="modal-title text-lg font-semibold text-gray-900">
            Editar multa
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
          <form className="p-4 md:p-5" onSubmit={updateMulta}>
            <div className="grid mb-1 w-full">
              {/* Campos de edição habilitados para permitir a alteração */}
              <div className="grid grid-cols-2 gap-4">
                {/* <div className="col-span-2 mb-2">
                  <label
                    htmlFor="idViagem"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Id da viagem
                  </label>
                  <input
                    type="text"
                    name="idViagem"
                    id="idViagem"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={idViagem}
                    onChange={(e) => setIdViagem(e.target.value)}
                  />
                </div> */}

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="codigo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Codigo
                  </label>
                  <input
                    type="text"
                    name="codigo"
                    id="codigo"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="dtmulta"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Data da multa
                  </label>
                  <input
                    type="date"
                    name="dtmulta"
                    id="dtmulta"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={dtmulta}
                    onChange={(e) => setDtMulta(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="tpinfracao"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tipo de Infração
                  </label>
                  <input
                    type="text"
                    name="tpinfracao"
                    id="tpinfracao"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={tpinfracao}
                    onChange={(e) => setTpInfracao(e.target.value)}
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
                    type="number"
                    name="valor"
                    id="valor"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="ptscarteira"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Pontos na Carteira
                  </label>
                  <input
                    type="text"
                    name="ptscarteira"
                    id="ptscarteira"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
                    value={ptscarteira}
                    onChange={(e) => setPtsCarteira(e.target.value)}
                  />
                </div>

                <div className="col-span-2 mb-2">
                  <label
                    htmlFor="descricao"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Descrição
                  </label>
                  <input
                    type="text"
                    name="descricao"
                    id="descricao"
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 placeholder-gray-400"
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
