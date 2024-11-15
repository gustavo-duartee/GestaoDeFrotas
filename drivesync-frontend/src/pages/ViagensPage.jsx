import React, { useState, useEffect } from "react";
import { Sidebar } from "../components/Sidebar";

export function Viagens() {
    const [viagens, setViagens] = useState([]);
    const [selectedViagem, setSelectedViagem] = useState(null);

    // Simulação de carregamento dos dados das viagens
    useEffect(() => {
        const fetchViagens = async () => {
            setViagens([
                {
                    id: 1,
                    localizacaoInicio: "Rio de Janeiro",
                    localizacaoEncerramento: "Rio de Janeiro",
                    dataInicio: "2023-11-10",
                    dataEncerramento: "2023-11-10",
                    status: "Concluída",
                    motoristaId: "Daniel Peralba",
                    veiculoId: "1023",
                    marca: "Volkswagen",
                    modelo: "e-Bus",
                    observacoesInicio: "Checklist OK",
                    observacoesEncerramento: "Tudo certo.",

                    quilometragemInicial: "20.000",
                    quilometragemFinal: "25.000",

                    nivelCombustivelInicial: "98",
                    nivelCombustivelFinal: "100",

                    temperaturaMotorInicial: "10",
                    temperaturaMotorFinal: "56"
                },
            ]);
        };

        fetchViagens();
    }, []);

    const handleSelectViagem = (viagem) => {
        setSelectedViagem(viagem);
    };

    return (
        <div>
            <Sidebar />
            <div className="flex h-screen" style={{ flex: 1, marginTop: "4rem", marginLeft: "16rem" }}>
                {/* Painel lateral com cards das viagens */}
                <aside className="w-100 bg-gray-100 p-4 border-r border-gray-300 overflow-y-auto">
                    <h2 className="text-xl font-semibold mb-4">Viagens</h2>

                    <input
                        type="text"
                        id="table-search-users"
                        className="ps-4 mb-3 text-sm text-gray-900 rounded-lg shadow w-80 bg-white focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Pesquisar veículo"
                    />

                    {viagens.map((viagem) => (
                        <div
                            key={viagem.id}
                            className="bg-white p-4 mb-4 rounded-lg shadow cursor-pointer hover:bg-gray-50"
                            onClick={() => handleSelectViagem(viagem)}
                        >
                            <h3 className="text-lg font-semibold">{viagem.localizacaoInicio} - {viagem.localizacaoEncerramento}</h3>
                            <p className="text-gray-600">{viagem.marca} {viagem.modelo}</p>
                            <p className="text-gray-500 text-sm">{viagem.dataEncerramento}</p>
                            <p className={`text-sm ${viagem.status === "Em andamento" ? "text-yellow-500" : "text-green-500"}`}>
                                {viagem.status}
                            </p>
                        </div>
                    ))}
                </aside>

                {/* Exibição dos detalhes da viagem selecionada */}
                <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
                    {selectedViagem ? (
                        <div className="bg-white p-6 rounded-lg shadow">
                            <p className="text-lg">
                                <h1 className="text-2xl font-semibold text-gray-700 mb-0">{selectedViagem.localizacaoInicio} - {selectedViagem.localizacaoEncerramento}</h1>
                            </p>
                            <p className="text-lg">
                                <h3 className="text-2xl font-semibold mb-4"># {selectedViagem.veiculoId} - {selectedViagem.marca} {selectedViagem.modelo}</h3>
                            </p>
                            <p className="text-lg">
                                <h4 className="font-medium text-lg text-gray-700">Motorista {selectedViagem.motoristaId}</h4>
                            </p>
                            <p className="text-lg">
                                <h4 className="font-medium text-lg text-gray-700">{selectedViagem.status}</h4>
                            </p>

                            {/* Exibição dos detalhes da viagem selecionada */}
                            <div className="flex-1 bg-white mt-10 ">
                                {selectedViagem ? (
                                    <>
                                        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Detalhes da Viagem #{selectedViagem.id}</h2>

                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <h4 className="font-medium text-lg text-gray-700">Destino:</h4>
                                                <p className="text-gray-600">{selectedViagem.localizacaoEncerramento}</p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <h4 className="font-medium text-lg text-gray-700">Data:</h4>
                                                <p className="text-gray-600">{selectedViagem.dataInicio} - {selectedViagem.dataEncerramento}</p>
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <h4 className="font-medium text-lg text-gray-700">Status:</h4>
                                                <p className={`text-lg ${selectedViagem.status === "Em andamento" ? "text-yellow-500" : "text-green-500"}`}>{selectedViagem.status}</p>
                                            </div>
                                        </div>

                                        {/* Detalhes do checklist */}
                                        <div className="mt-8 space-y-6">
                                            <h3 className="text-xl font-semibold text-gray-700">Checklist de Início</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-600">Observações:</p>
                                                    <p className="text-gray-600">{selectedViagem.observacoesInicio}</p>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-600">Quilometragem Inicial:</p>
                                                    <p className="text-gray-600">{selectedViagem.quilometragemInicial} km</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 space-y-6">
                                            <h3 className="text-xl font-semibold text-gray-700">Detalhes do Veículo</h3>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-600">Motorista:</p>
                                                    <p className="text-gray-600">{selectedViagem.motoristaId}</p>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-600">Veículo:</p>
                                                    <p className="text-gray-600">{selectedViagem.veiculoId}</p>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-600">Nível de Combustível:</p>
                                                    <p className="text-gray-600">{selectedViagem.nivelCombustivelInicial}% - {selectedViagem.nivelCombustivelFinal}%</p>
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <p className="text-gray-600">Temperatura do Motor:</p>
                                                    <p className="text-gray-600">{selectedViagem.temperaturaMotorInicial}°C - {selectedViagem.temperaturaMotorFinal}°C</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <p className="text-gray-600">Selecione uma viagem para ver os detalhes.</p>
                                )}
                            </div>
                        </div>


                    ) : (
                        <p className="text-gray-600">Selecione uma viagem para ver os detalhes.</p>
                    )}
                </main>
            </div>
        </div>
    );
}
