import { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar';
import api from "../services/api";

export function Profile() {
    const emailUsuario = localStorage.getItem('email');
    const [userData, setUserData] = useState({
        nome: 'Usuário Teste',
        cargo: 'Cargo não fornecido',
        telefone: 'Telefone não fornecido',
        lockoutEnd: null,
        descricao: 'Descrição não fornecida'
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!emailUsuario) {
            console.warn("Nenhum email encontrado no localStorage. Redirecionando para a página de login.");
            window.location.href = '/login';
        }
    }, [emailUsuario]);

    const fetchUserData = async (email) => {
        try {
            const response = await api.get(`/api/Account/GetUserByEmail/${email}`);
            console.log("Resposta recebida da API:", response);

            if (response.status === 200) {
                const data = response.data;
                console.log("Dados do usuário obtidos da API:", data);

                setUserData({
                    nome: data.nome || 'Usuário Teste',
                    cargo: data.cargo || 'Cargo não fornecido',
                    telefone: data.telefone || 'Telefone não fornecido',
                    lockoutEnd: data.lockoutEnd || null,
                    descricao: data.descricao || 'Descrição não fornecida'
                });
            } else {
                console.error(`Erro ao buscar dados do usuário. Status da API: ${response.status}`);
            }
        } catch (error) {
            console.error('Erro ao buscar dados do usuário. Detalhes:', error);
        } finally {
            setLoading(false);
            console.log("Finalizado o carregamento dos dados do usuário.");
        }
    };

    useEffect(() => {
        if (emailUsuario) {
            console.log("Chamando fetchUserData para o email:", emailUsuario);
            fetchUserData(emailUsuario);
        }
    }, [emailUsuario]);

    if (loading) {
        console.log("Carregando os dados do usuário...");
        return <div>Carregando...</div>;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 p-8 ml-64 mt-10">
                <div className="bg-white p-8 rounded-lg shadow-lg mt-24" style={{ minHeight: '70vh' }}>
                    {/* Cabeçalho do Perfil */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Estatísticas de Perfil */}
                        <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            {/* Você pode adicionar estatísticas aqui, se necessário */}
                        </div>

                        {/* Avatar do Usuário */}
                        <div className="relative">
                            <div className="w-48 h-48 bg-gray-800 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <span className="text-6xl font-bold text-white">
                                    {emailUsuario ? emailUsuario[0].toUpperCase() : 'U'}
                                </span>
                            </div>
                        </div>

                        {/* Botões de Ação */}
                        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
                            {/* Botões de ação */}
                        </div>
                    </div>

                    {/* Informações do Usuário */}
                    <div className="mt-32 text-center border-b pb-12">
                        <h1 className="text-4xl font-medium text-gray-700 mt-6">{userData.nome}</h1>
                        <p className="font-light text-gray-600 mt-4">{emailUsuario}</p>
                        <p className="mt-8 text-gray-500">{userData.cargo}</p>
                        <p className="mt-4 text-gray-500">{userData.telefone}</p>
                    </div>

                    {/* Descrição do Usuário */}
                    <div className="mt-16 flex flex-col justify-center items-center">
                        <p className="text-gray-600 text-center font-light lg:px-16">
                            {userData.descricao}
                        </p>
                        <button
                            className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 mt-8 w-48"
                            onClick={() => {
                                localStorage.clear();
                                window.location.href = '/';
                            }}
                        >
                            Sair
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
