import { useState } from 'react';
import Logo from '../imgs/logo.png';
import { Link } from 'react-router-dom'; // Importando o Link do React Router

export function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Obtendo o email do usuário logado do localStorage
  const emailUsuario = localStorage.getItem('email');

  // Se o email não estiver disponível, você pode exibir algo como "Usuário não autenticado"
  if (!emailUsuario) {
    return <div>Usuário não autenticado</div>;
  }

  // Obtendo a inicial do email para mostrar no avatar
  const inicialEmail = emailUsuario.charAt(0).toUpperCase();

  // Função para alternar o estado do dropdown
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-300">
      <div className="px-2 py-2 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          {/* Divisão entre logo e informações do usuário */}
          <div className="flex items-center justify-start rtl:justify-end relative">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open sidebar</span>
            </button>
            <a href="/" className="flex items-center">
              <img src={Logo} alt="Logo" />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap"></span>
            </a>
          </div>

          {/* Seção com email do usuário e avatar */}
          <div className="flex items-center space-x-4">
            <span className="text-10 text-gray-900">{emailUsuario}</span>

            <button
              type="button"
              className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full text-white focus:ring-4 focus:ring-gray-300"
              aria-expanded="false"
              onClick={toggleDropdown} // Toggle do dropdown
            >
              <span className="text-lg font-bold">{inicialEmail}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown flutuante */}
      {dropdownOpen && (
        <div
          className="z-50 absolute top-full right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow-lg"
          id="dropdown-user"
        >
          <div className="px-4 py-3">
            <p className="text-sm text-gray-900">Usuário</p>
            <p className="text-sm font-medium text-gray-900 truncate">
              {emailUsuario}
            </p>
          </div>
          <ul className="py-1">
            <li>
              <Link
                to="/perfil" // Caminho para a tela de perfil
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Perfil
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Sair
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
