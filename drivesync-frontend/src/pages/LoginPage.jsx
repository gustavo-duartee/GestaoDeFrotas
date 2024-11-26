import miniLogo from '../imgs/mini-logo.png';
import api from '../services/api';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useNavigate();

    async function login(event) {
        event.preventDefault();

        const data = {
            email, senha
        };

        try {
            const response = await api.post('api/Account/LoginUser', data);

            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);

            history('/home');

        } catch (error) {
            alert("O login falhou " + error)
        }

        console.log(email, senha);

    }

    return (
        <>
            <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-gray-50">
                
                {/* Header do formulário */}
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-20 w-auto"
                        src={miniLogo}
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Entre na sua conta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={login}>
                        {/* Campo do e-mail */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900"> Email </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    onChange={e => setEmail(e.target.value)}
                                    name="email"
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black-400 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        {/* Campo da senha */}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"> Senha </label>
                                <div className="text-sm">
                                    <a href="#" className="font-semibold text-green-500 hover:text-green-700">
                                        Esqueceu sua senha?
                                    </a>
                                </div>
                            </div>
                            <div className="mt-2">
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
                        </div>

                        {/* Botão */}
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Entrar
                            </button>
                        </div>
                    </form>

                    {/* Textos do formulário */}
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Não possui uma conta?{' '}
                        <a href="#" className="font-semibold leading-6 text-green-500 hover:text-green-700">
                            Contate nossa equipe!
                        </a>
                    </p>
                </div>
            </div>
        </>
    )
}
