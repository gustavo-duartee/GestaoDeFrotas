import React, { useState } from "react";
import ReactModal from "react-modal";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export function ModalCriarEmpresa({ isOpen, onRequestClose }) {
  const [nome, setNome] = useState("");
  const [cnpj, setCNPJ] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [data_cadastro, setData_cadastro] = useState("");

  const [erroCNPJ, setErroCNPJ] = useState("");
  const [erroEmail, setErroEmail] = useState("");

  const history = useNavigate();

  const token = localStorage.getItem("token");
  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  async function saveEmpresa(event) {
    event.preventDefault();

    const status = "Disponível";

    const data = {
      nome,
      cnpj,
      endereco,
      email,
      telefone,
      data_cadastro,
    };

    try {
      await api.post("api/empresas", data, authorization);
      alert("Empresa adicionada com sucesso!");
      history("/empresas");
      window.location.reload();
    } catch (error) {
      alert("Erro ao adicionar empresa: " + error);
      console.log(error);
    }
  }
  function validarCNPJ(cnpj) {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]+/g, "");

    // Verifica se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) return false;

    // Elimina CNPJs inválidos conhecidos
    if (/^(\d)\1+$/.test(cnpj)) return false;

    // Cálculo do primeiro dígito verificador
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(0)) return false;

    // Cálculo do segundo dígito verificador
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2) pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
    if (resultado != digitos.charAt(1)) return false;

    return true;
  }
  function validarEmailComplexo(email) {
    const regexEmailComplexo =
      /^(?![_.-])[A-Za-z0-9._%+-]+(?<![_.-])@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/;
    return regexEmailComplexo.test(email);
  }

  // const handleCNPJChange = (e) => {
  //   const valor = e.target.value;
  //   setCNPJ(valor);

  //   if (valor.length === 14 || valor.length === 18) {
  //     // Tamanho esperado para CNPJ com ou sem formatação
  //     if (!validarCNPJ(valor)) {
  //       setErroCNPJ("CNPJ inválido.");
  //     } else {
  //       setErroCNPJ("");
  //     }
  //   } else {
  //     setErroCNPJ("O CNPJ deve ter 14 dígitos.");
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
            Adicionar nova empresa
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
          <form className="p-4 md:p-5" onSubmit={saveEmpresa}>
            <div className="grid mb-1 w-full">
              <div className="col-span-2 mb-2">
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nome
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => setNome(e.target.value)}
                    name="nome"
                    id="nome"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o nome"
                  />
                </div>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="cnpj"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  CNPJ
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => {
                      const valor = e.target.value;
                      setCNPJ(valor);

                      if (valor.length === 14 || valor.length === 18) {
                        // Tamanho esperado para CNPJ com ou sem formatação
                        if (!validarCNPJ(valor)) {
                          setErroCNPJ("CNPJ inválido.");
                        } else {
                          setErroCNPJ("");
                        }
                      } else {
                        setErroCNPJ("O CNPJ deve ter 14 dígitos.");
                      }
                    }}
                    name="cnpj"
                    id="cnpj"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o CNPJ"
                  />
                </div>
                {erroCNPJ && (
                  <p className="text-red-500 text-sm mt-1">{erroCNPJ}</p>
                )}
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
                  id="endereco"
                  onChange={(e) => setEndereco(e.target.value)}
                  name="endereco"
                  className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Digite o endereço"
                />
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="text"
                    onChange={(e) => {
                      const valor = e.target.value;
                      setEmail(valor);

                      if (valor && !validarEmailComplexo(valor)) {
                        setErroEmail("Email inválido. Verifique o formato.");
                      } else {
                        setErroEmail("");
                      }
                    }}
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o email"
                  />
                </div>
                {erroEmail && (
                  <p className="text-red-500 text-sm mt-1">{erroEmail}</p>
                )}
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="telefone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Telefone
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="number"
                    onChange={(e) => setTelefone(e.target.value)}
                    name="telefone"
                    id="telefone"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite o telefone"
                  />
                </div>
              </div>

              <div className="col-span-2 mb-2">
                <label
                  htmlFor="data_cadastro"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Data de Cadastro
                </label>
                <div className="relative mt-1 rounded-md shadow-sm">
                  <input
                    type="date"
                    onChange={(e) => setData_cadastro(e.target.value)}
                    name="data_cadastro"
                    id="data_cadastro"
                    className="block w-full rounded-md border-0 py-1.5 pl-3 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Digite a data de cadastro"
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
