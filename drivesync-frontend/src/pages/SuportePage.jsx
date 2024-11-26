import React from "react";
import { Sidebar } from "../components/Sidebar";

export function Suporte() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 mt-16 ml-64 p-8 bg-gray-100 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Suporte ao Usuário</h1>
                <p className="mb-4 text-gray-700">
                    Bem-vindo à central de suporte. Se precisar de ajuda, entre em contato conosco por um dos meios abaixo.
                </p>
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Contatos</h2>

                    {/* Primeiro bloco de contatos */}
                    <ul className="text-gray-600 space-y-2 mb-6">
                        <li>
                            <strong>Email:</strong> daniel@aedb.br
                        </li>
                        <li>
                            <strong>Telefone:</strong> (24) 3355-2302
                        </li>
                        <li>
                            <strong>WhatsApp:</strong> (11) 99911-2922
                        </li>
                    </ul>

                    {/* Segundo bloco de contatos */}
                    <ul className="text-gray-600 space-y-2 mb-6">
                        <li>
                            <strong>Email:</strong> gustavo.duarte@aedb.br
                        </li>
                        <li>
                            <strong>Telefone:</strong> (24) 3355-2304
                        </li>
                        <li>
                            <strong>WhatsApp:</strong> (11) 99816-1125
                        </li>
                    </ul>

                    {/* Terceiro bloco de contatos */}
                    <ul className="text-gray-600 space-y-2">
                        <li>
                            <strong>Email:</strong> mateus.santos@aedb.br
                        </li>
                        <li>
                            <strong>Telefone:</strong> (24) 3355-2305
                        </li>
                        <li>
                            <strong>WhatsApp:</strong> (11) 99811-5688
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-semibold mb-2">Cuidados</h2>
                    <ul className="list-disc list-inside text-gray-600">
                        <li>Verifique se está usando a versão mais recente do aplicativo.</li>
                        <li>Certifique-se de que sua conexão com a internet está ativa.</li>
                        <li>Entre em contato apenas pelos canais oficiais.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
