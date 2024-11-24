import React, { useState } from 'react';
import Web from '../imgs/plataforma-web.png';

export function Quest() {
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const userData = {
            nome: formData.get('nome'),
            empresa: formData.get('empresa'),
            email: formData.get('email'),
        };

        try {
            const response = await fetch('http://localhost:5000/api/account/sendusercredentials', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                const result = await response.json();
                alert(result.Message || 'Credenciais enviadas com sucesso.');
            } else {
                const error = await response.json();
                alert(`Erro: ${error.message}`);
            }
        } catch (error) {
            alert('Erro ao conectar com o servidor.');
            console.error(error);
        }
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                        aria-hidden="true"
                    >
                        <circle
                            cx="512"
                            cy="512"
                            r="512"
                            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                            fillOpacity="0.7"
                        />
                        <defs>
                            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                                <stop stopColor="#7775D6" />
                                <stop offset="1" stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>

                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ficou interessado?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Preencha o formulário abaixo para receber suas credenciais de acesso ao sistema.
                        </p>
                        <form
                            className="mt-8 space-y-6"
                            onSubmit={handleFormSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="nome"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Nome Completo
                                </label>
                                <input
                                    type="text"
                                    name="nome"
                                    id="nome"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="empresa"
                                    className="block text-sm font-medium text-gray-300"
                                >
                                    Empresa
                                </label>
                                <input
                                    type="text"
                                    name="empresa"
                                    id="empresa"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>

                    <div className="relative mt-16 h-80 lg:mt-8">
                        <img
                            src={Web}
                            alt="Plataforma Web"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
