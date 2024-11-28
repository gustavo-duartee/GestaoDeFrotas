import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Sidebar } from '../components/Sidebar';

export function UsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await api.get('/api/Account/GetAllUsers');
                setUsers(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
                alert("Erro ao carregar a lista de usuários.");
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    const excluiUser = async (id) => {
        if (!window.confirm(`Deseja realmente excluir o usuário?`)) {
          return;
        }
      
        try {
          const response = await api.delete(`api/Account/Delete/${id}`);
          alert("Usuário excluído com sucesso!");
 
          window.location.reload();
        } catch (error) {
          let errorMessage = "Não foi possível deletar o usuário";
          console.log(error)
          if (error.response) {
            const { data, status } = error.response;
            if (status === 400) {
              errorMessage = "Usuário não encontrado";
            } else if (status >= 500) {
              errorMessage = "Falha na comunicação com o servidor";
            } else {
              errorMessage = data.message || errorMessage;
            }
          }
          
          alert(errorMessage);
        }
      };
      

    return (
        <>
            <Sidebar />
            <div className="flex flex-col lg:flex-row lg:ml-64 mt-8 px-6 py-12 bg-gray-50">
                <div className="w-full bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-medium text-gray-900 mb-6">Usuários Cadastrados</h1>

                    {loading ? (
                        <p className="text-center text-gray-500">Carregando usuários...</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full table-auto border-collapse border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        {/* <th className="px-4 py-2 border border-gray-300 text-left">ID</th> */}
                                        <th className="px-4 py-2 border border-gray-300 text-left">Nome</th>
                                        <th className="px-4 py-2 border border-gray-300 text-left">Email</th>
                                        <th className="px-4 py-2 border border-gray-300 text-left">Cargo</th>
                                        <th className="px-4 py-2 border border-gray-300 text-left">Telefone</th>
                                        {/* <th className="px-4 py-2 border border-gray-300 text-left">Status</th> */}
                                        <th className="px-4 py-2 border border-gray-300 text-left">Ações</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map(user => (
                                        <tr key={user.id} className="hover:bg-gray-50">
                                            {/* <td className="px-4 py-2 border border-gray-300">{user.id}</td> */}
                                            <td className="px-4 py-2 border border-gray-300">{user.nome || "N/A"}</td>
                                            <td className="px-4 py-2 border border-gray-300">{user.email}</td>
                                            <td className="px-4 py-2 border border-gray-300">{user.cargo || "N/A"}</td>
                                            <td className="px-4 py-2 border border-gray-300">{user.telefone || "N/A"}</td>
                                            {/* <td className="px-4 py-2 border border-gray-300">
                                                {user.lockoutEnabled ? "Bloqueado" : "Ativo"}
                                            </td> */}
                                            <td className="px-4 py-2 border border-gray-300">
                                            <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={() => excluiUser(user.id)}
                                  className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                                >
                                  Excluir
                                </button>                    
                              </div>
                              </td>
                                        </tr>
                                    ))}
                                </tbody>
                                
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
