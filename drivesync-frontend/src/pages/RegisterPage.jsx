import React, { useState } from 'react';
import api from '../services/api';
import { Sidebar } from '../components/Sidebar';

export function RegisterPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    async function register(event) {
        event.preventDefault();

        const data = {
            email,
            senha,
            confirmaSenha
        };

        try {
            const response = await api.post('/api/Account/CreateUser', data);
            console.log(response.data);
            alert("Usuário criado com sucesso!");
            clearFields();
        } catch (error) {
            alert("O registro falhou " + error);
        }
    }

    function clearFields() {
        setEmail('');
        setSenha('');
        setConfirmaSenha('');
    }

    return (
        <>
            <Sidebar />
            <div style={{ flex: 1, marginTop: '4rem', marginLeft: '16rem' }}>
                <div className="h-full w-full bg-gray-100 relative overflow-y-auto">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
                        <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                            <h1 className="text-2xl font-medium tracking-tight text-gray-900">Gerenciamento de Acessos</h1>
                        </div>
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white mb-10" style={{ overflow: "auto" }}>

                            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
                                <ul className="flex flex-wrap -mb-px">
                                    <li className="me-2">
                                        <a href="#" className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Usuários</a>
                                    </li>
                                    <li className="me-2">
                                        <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active" aria-current="page">Novo Usuário</a>
                                    </li>
                                    <li className="me-2">
                                        <a href="#" className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Permissões</a>
                                    </li>
                                    <li className="me-2">
                                        <a href="#" className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Assinaturas</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-5 mb-5 sm:mx-auto sm:w-full sm:max-w-4xl">
                                <div className="relative overflow-x-auto sm:rounded-lg bg-white mb-20" style={{ overflow: "auto" }}>
                                    <div className="mt-20 mb-20 sm:mx-auto sm:w-full sm:max-w-4xl">
                                        <form className="space-y-6" onSubmit={register}>
                                            <div className="flex space-x-8">
                                                {/* Informações pessoais */}
                                                <div className="flex-1 space-y-6">
                                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações pessoais</h2>
                                                    <div className="flex space-x-4">
                                                        <div className="flex-1">
                                                            <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">Primeiro Nome:</label>
                                                            <input
                                                                id="firstName"
                                                                name="firstName"
                                                                type="text"
                                                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                                                style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} // Adicionando padding
                                                            />
                                                        </div>
                                                        <div className="flex-1">
                                                            <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Segundo Nome:</label>
                                                            <input
                                                                id="lastName"
                                                                name="lastName"
                                                                type="text"
                                                                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                                                style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} // Adicionando padding
                                                            />
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <label htmlFor="empresa" className="block text-sm font-medium leading-6 text-gray-900">Empresa:</label>
                                                        <input
                                                            id="empresa"
                                                            name="empresa"
                                                            type="text"
                                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                                            style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} // Adicionando padding
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="cargo" className="block text-sm font-medium leading-6 text-gray-900">Cargo:</label>
                                                        <input
                                                            id="cargo"
                                                            name="cargo"
                                                            type="text"
                                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                                            style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} // Adicionando padding
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="telefone" className="block text-sm font-medium leading-6 text-gray-900">Telefone:</label>
                                                        <input
                                                            id="telefone"
                                                            name="telefone"
                                                            type="text"
                                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                                            style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem' }} // Adicionando padding
                                                        />
                                                    </div>
                                                </div>

                                                {/* Informações de acesso */}
                                                <div className="flex-1 space-y-6">
                                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações de acesso</h2>
                                                    <div>
                                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email:</label>
                                                        <input
                                                            id="email"
                                                            value={email}
                                                            onChange={e => setEmail(e.target.value)}
                                                            name="email"
                                                            type="email"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha:</label>
                                                        <input
                                                            id="password"
                                                            value={senha}
                                                            onChange={e => setSenha(e.target.value)}
                                                            name="password"
                                                            type="password"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">Confirmar senha:</label>
                                                        <input
                                                            id="confirmPassword"
                                                            value={confirmaSenha}
                                                            onChange={e => setConfirmaSenha(e.target.value)}
                                                            name="confirmPassword"
                                                            type="password"
                                                            required
                                                            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                    <div className="space-y-4">
                                                    <div className="flex items-start">
                                                        <input id="admin-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-green-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                                        <div className="ml-2">
                                                            <label htmlFor="admin-checkbox" className="text-sm font-medium text-gray-900">Administrador</label>
                                                            <p className="text-sm text-gray-400">Permissão para acessar todas as funcionalidades do sistema.</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <input id="driver-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-green-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                                        <div className="ml-2">
                                                            <label htmlFor="driver-checkbox" className="text-sm font-medium text-gray-900">Motorista</label>
                                                            <p className="text-sm text-gray-400">Permissão somente para acessar o aplicativo mobile e registrar viagens.</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start">
                                                        <input id="manager-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-green-500 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                                        <div className="ml-2">
                                                            <label htmlFor="manager-checkbox" className="text-sm font-medium text-gray-900">Gestor</label>
                                                            <p className="text-sm text-gray-400">Permissão para acessar a plataforma DriveSync, realizar registros e consultas, exceto acessos de outros usuários.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>

                                            <div className="flex space-x-4">
                                                <button
                                                    type="button" // Mudança para type="button"
                                                    onClick={clearFields} // Chama clearFields ao invés de onSubmit
                                                    className="flex w-full justify-center rounded-md bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                                                >
                                                    Limpar
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                                                >
                                                    Registrar Usuário
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
