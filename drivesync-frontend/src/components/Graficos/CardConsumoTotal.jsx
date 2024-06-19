import React from 'react';
import { Droplet, Fuel, Car } from 'lucide-react'; // Importação de ícones garantidos

const cards = [
    {
        id: 1,
        title: 'Díesel',
        amount: '5.000L',
        color: 'bg-green-500',
        icon: <Droplet className="w-6 h-6 text-white" />,
    },
    {
        id: 2,
        title: 'Etanol',
        amount: '9.000L',
        color: 'bg-yellow-500',
        icon: <Fuel className="w-6 h-6 text-white" />,
    },
    {
        id: 3,
        title: 'Gasolina Comum',
        amount: '13.000L',
        color: 'bg-blue-500',
        icon: <Car className="w-6 h-6 text-white" />, // Substituição do ícone problemático
    },
];

const FuelConsumptionCards = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            {cards.map((card) => (
                <div key={card.id} className="relative">
                    <div className="bg-white shadow-md rounded-lg p-4 sm:p-6 xl:p-8">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{card.amount}</span>
                                <h3 className="text-base font-normal text-gray-500">{card.title}</h3>
                            </div>
                        </div>
                    </div>
                    {/* Espaço com cor e ícone Lucide */}
                    <div className={`absolute top-0 right-0 p-2 rounded-bl-lg ${card.color} flex items-center justify-center`}>
                        {card.icon}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FuelConsumptionCards;
