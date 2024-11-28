import React, { useState } from 'react';
import api from '../services/api';
import { Sidebar } from '../components/Sidebar';

export function RegisterPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cargo, setCargo] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const [erroSenha, setErroSenha] = useState("");

    async function register(event) {
        event.preventDefault();

        const data = {
            email,
            nome,
            telefone,
            cargo,
            senha,
            confirmaSenha
        };

        if (senha !== confirmaSenha) {
            alert("As senhas não coincidem.");
            return;
        }
        try {
            const response = await api.post('/api/Account/CreateUser', data);
            console.log(response.data);
            alert("Usuário criado com sucesso!");
            clearFields();
        } catch (error) {
            console.error(error);
            alert("O registro falhou: " + (error.response?.data?.message || error.message));
            //alert("O registro falhou, pois a senha deve conter 1 caracter especial + ");
        }
    }

    const validarSenha = (senha) => {
        const senhaLimpa = senha.trim();
        const regexMaiuscula = /[A-Z]/;
        const regexNumero = /[0-9]/;
        const regexEspecial = /[^a-zA-Z0-9]/;
      
        // Verifica se a senha tem mais de 8 caracteres
        const tamanhoValido = senhaLimpa.length > 8;
      
        return (
          tamanhoValido &&
          regexMaiuscula.test(senhaLimpa) &&
          regexNumero.test(senhaLimpa) &&
          regexEspecial.test(senhaLimpa)
        );
      };
      

    function clearFields() {
        setEmail('');
        setSenha('');
        setConfirmaSenha('');
        setNome('');
        setTelefone('');
        setCargo('');
    }

    return (
        <>
            <Sidebar />
            <div className="flex w-full flex-col  justify-center min-h-screen px-4 sm:px-8 py-12 bg-gray-50" style={{ flex: 1, marginTop: "2rem", marginLeft: "16rem"}}>
                <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg p-6">
                    <h1 className="text-2xl font-medium text-gray-900 mb-6">Gerenciamento de Acessos</h1>
                    <form onSubmit={register} className="space-y-6">
                        <div className="grid grid-cols-1 gap-6">
                            {/* Informações pessoais */}
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações pessoais</h2>
                                <label htmlFor="nome" className="block text-sm font-medium text-gray-900 mb-3">Nome Completo</label>
                                <input
                                    id="nome"
                                    value={nome}
                                    onChange={e => setNome(e.target.value)}
                                    name="nome"
                                    type="text"
                                    className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
    
                            {/* Linha com Cargo e Telefone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="cargo" className="block text-sm font-medium text-gray-900 mb-3">Cargo</label>
                                    <input
                                        id="cargo"
                                        value={cargo}
                                        onChange={e => setCargo(e.target.value)}
                                        name="cargo"
                                        type="text"
                                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-900 mb-3">Telefone</label>
                                    <input
                                        id="telefone"
                                        value={telefone}
                                        onChange={e => setTelefone(e.target.value)}
                                        name="telefone"
                                        type="text"
                                        className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
    
                        {/* Informações de acesso */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-gray-900 mb-4">Informações de acesso</h2>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
                            <input
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                name="email"
                                type="email"
                                required
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <label htmlFor="senha" className="block text-sm font-medium text-gray-900">Senha</label>
                            <input
                                id="senha"
                                value={senha}
                                //setSenha
                                onChange={(e)=> {
                                    const senhaInput = e.target.value;
                                    setSenha(senhaInput);

                                if (!validarSenha(senhaInput)) {
                                    setErroSenha(
                                      "Senha inválida. A senha deve ter mais de 8 dígitos, conter pelo menos uma letra maiúscula, um número e um caractere especial."
                                    );
                                  } else {
                                    setErroSenha("");
                                  }
                                }}
                                name="senha"
                                type="password"
                                required
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                
                            />
                            {erroSenha && (
  <p className="text-red-500 text-sm">{erroSenha}</p>
)}
                            <label htmlFor="confirmaSenha" className="block text-sm font-medium text-gray-900">Confirmar Senha</label>
                            <input
                                id="confirmaSenha"
                                value={confirmaSenha}
                                onChange={e => setConfirmaSenha(e.target.value)}
                                name="confirmaSenha"
                                type="password"
                                required
                                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
    
                        {/* Permissões */}
                        {/* <div className="space-y-4">
                            <div className="flex items-start">
                                <input id="driver-checkbox" type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                                <div className="ml-2">
                                    <label htmlFor="driver-checkbox" className="text-sm font-medium text-gray-900">App DriveSync</label>
                                    <p className="text-sm text-gray-400">Permissão somente para acessar o aplicativo mobile e registrar viagens.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <input id="manager-checkbox" type="checkbox" className="w-5 h-5 text-blue-600 bg-gray-200 border-gray-300 rounded focus:ring-2 focus:ring-blue-500" />
                                <div className="ml-2">
                                    <label htmlFor="manager-checkbox" className="text-sm font-medium text-gray-900">DriveSync Web</label>
                                    <p className="text-sm text-gray-400">Permissão para acessar a plataforma DriveSync, realizar registros e consultas, exceto acessos de outros usuários.</p>
                                </div>
                            </div>
                        </div> */}
    
                        {/* Botões */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
                            <button
                                type="button"
                                onClick={clearFields}
                                className="w-full sm:w-auto bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
                            >
                                Limpar
                            </button>
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                                style={{
                                    display:
                                      erroSenha
                                        ? "none"
                                        : "block",
                                  }}
                            >                                
                                Registrar Usuário
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
    
}
