import React, { useState, useEffect } from "react";
import { ModalComponent } from "../components/ModalCriarVeiculos";
import { ModalDetailsVeiculo } from "../components/ModalDetailsVeiculo";

import  axios  from "axios";

export function Veiculos() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDetailsIsOpen, setModalDetailsIsOpen] = useState(false);

  const baseUrl = "https://localhost:7298/api/veiculos";

  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data)
      }).catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    pedidoGet();
  })

  return (
    <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto ">
      <main>
        <div className="pt-6 px-4">
          <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
            <h1 class="text-2xl font-medium tracking-tight text-gray-900">Veículos</h1>
            <button onClick={() => setModalIsOpen(true)} type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Novo Veículo +</button>
          </div>

          <ModalComponent
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          />

          <ModalDetailsVeiculo
            isOpen={modalDetailsIsOpen}
            onRequestClose={() => setModalDetailsIsOpen(false)}
          />

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white" style={{ maxHeight: "40rem", overflow: "auto" }}>

            <table className="w-full text-sm text-left rtl:text-right text-gray-500">

              <thead className="text-xs text-gray-700 uppercase bg-gray-50 border">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Placa
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Marca
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Modelo
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Ano
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Quilometragem
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Aquisição
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Tipo do Combustível
                      <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg></a>
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <div className="flex items-center">
                      Status
                      <a href="#"><svg className="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg></a>
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Editar</span>
                  </th>

                </tr>
              </thead>

              <tbody>
                {data.map(veiculo => (
                  <tr key={veiculo.id} className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {veiculo.marca}
                    </th>
                    <td className="px-6 py-4">
                      {veiculo.modelo}
                    </td>
                    <td className="px-6 py-4">
                      {veiculo.ano}
                    </td>
                    <td className="px-6 py-4">
                      {veiculo.placa}
                    </td>
                    <td className="px-6 py-4">
                      {veiculo.quilometragem}
                    </td>
                    <td className="px-6 py-4">
                      {veiculo.tp_combustivel}
                    </td>
                    <td className="px-6 py-4">
                      {veiculo.dt_aquisicao}
                    </td>
                    <td className="px-6 py-4">
                      {veiculo.status}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => setModalDetailsIsOpen(true)} type="button" class="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Visualizar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
