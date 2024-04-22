import { MapPinned, ReceiptText, LayoutDashboard, BadgeInfo, UserRound, Settings, CarFront } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Header } from './HeaderBar';


export function Sidebar() {
  return (
    <div className="main">

      <Header />

      <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-300 sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
            <ul class="space-y-2 font-medium" style={{ flex: 1, marginTop: '2rem' }}>
              <li>
                <Link to="/home" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <LayoutDashboard />
                  <span class="ms-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/viagens" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <MapPinned />
                  <span class="flex-1 ms-3 whitespace-nowrap">Viagens</span>
                </Link>
              </li>
              <li>
                <Link to="/veiculos" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <CarFront />
                  <span class="flex-1 ms-3 whitespace-nowrap">Veículos</span>
                </Link>
              </li>
              <li>
                <Link to="/multas" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <ReceiptText />
                  <span class="flex-1 ms-3 whitespace-nowrap">Multas</span>
                </Link>
              </li>
              <li>
                <Link to="/manutencoes" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <Settings />
                  <span class="flex-1 ms-3 whitespace-nowrap">Manutenções</span>
                </Link>
              </li>
              <li>
                <Link to="/funcionarios" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <UserRound />
                  <span class="flex-1 ms-3 whitespace-nowrap">Funcionários</span>
                </Link>
              </li>
              <hr className="my-3" />
              <li>
                <Link to="/suporte" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <Settings />
                  <span class="flex-1 ms-3 whitespace-nowrap">Suporte</span>
                </Link>
              </li>
              <li>
                <Link to="/ajuda" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                  <BadgeInfo />
                  <span class="flex-1 ms-3 whitespace-nowrap">Ajuda</span>
                </Link>
              </li>
            </ul>
        </div>
      </aside>
    </div>
  );
}



