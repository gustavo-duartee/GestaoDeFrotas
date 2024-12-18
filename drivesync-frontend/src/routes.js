import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import { Veiculos } from './pages/VeiculosPage';
import { Manutencoes } from './pages/ManutencoesPage';
import { Home } from './pages/HomePage';
import { Empresas } from './pages/EmpresasPage';
import { RegisterPage } from './pages/RegisterPage';
import { Multas } from './pages/MultasPage';
import { Viagens } from './pages/ViagensPage';
import { UsersPage } from './pages/UsersPage';
import { Suporte } from './pages/SuportePage';
import {Profile} from './pages/PerfiPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/veiculos" element={<Veiculos />} />
            <Route path="/manutencoes" element={<Manutencoes />} />
            <Route path="/home" element={<Home />} />
            <Route path="/empresas" element={<Empresas />} />
            <Route path="/registro" element={<RegisterPage />} />
            <Route path="/multas" element={<Multas />} />
            <Route path="/viagens" element={<Viagens />} />
            <Route path="/usuarios" element={<UsersPage />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/perfil" element={<Profile />} />
        </Routes>
    );
}
