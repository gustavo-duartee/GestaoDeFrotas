import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import LoginPage from './pages/LoginPage';
import { Veiculos } from './pages/VeiculosPage';
import { Home } from './pages/HomePage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path="/veiculos" element={<Veiculos />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}